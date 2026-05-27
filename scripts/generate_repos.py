#!/usr/bin/env python3
"""Generate src/data/repos.json from a plain list of GitHub repositories.

Reads a text file (default: scripts/repos.txt) with one repo per line — either
"owner/name" or a full GitHub URL — fetches what it can from the GitHub API,
and writes the curated JSON the site reads.

The input file is the source of truth for WHICH repos appear (and their order).
On each run:
  - New repos are seeded from the API (description, topics->tags, homepage,
    stars, forks, openIssues, language, license, archived, createdAt, pushedAt).
    category defaults to "" and featured to false for you to fill in.
  - Repos already in repos.json keep your curated edits (description, tags,
    category, featured) and only have the API-derived fields refreshed.
  - Repos no longer listed in the input file are dropped.

Usage:
  python scripts/generate_repos.py
  python scripts/generate_repos.py --input scripts/repos.txt --output src/data/repos.json

Set a token to raise the rate limit from 60 to 5,000 requests/hour:
  PowerShell:  $env:GITHUB_TOKEN = "ghp_xxx"
  bash:        export GITHUB_TOKEN=ghp_xxx
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
API_VERSION = "2022-11-28"
FIELD_ORDER = [
    "id",
    "description",
    "tags",
    "category",
    "featured",
    "homepage",
    "stars",
    "forks",
    "openIssues",
    "language",
    "license",
    "archived",
    "createdAt",
    "pushedAt",
]


def parse_repo_id(line: str) -> str | None:
    """Extract "owner/name" from a list line, or None to skip it."""
    line = line.strip()
    if not line or line.startswith("#"):
        return None
    if "github.com" in line:
        line = line.split("github.com", 1)[1]
    line = line.split("#", 1)[0].split("?", 1)[0]
    line = line.lstrip(":/")
    if line.endswith(".git"):
        line = line[: -len(".git")]
    parts = [p for p in line.strip("/").split("/") if p]
    if len(parts) < 2:
        return None
    return f"{parts[0]}/{parts[1]}"


def read_ids(path: Path) -> list[str]:
    ids: list[str] = []
    seen: set[str] = set()
    for raw in path.read_text(encoding="utf-8").splitlines():
        rid = parse_repo_id(raw)
        if rid and rid not in seen:
            seen.add(rid)
            ids.append(rid)
    return ids


def load_existing(path: Path) -> dict[str, dict]:
    if not path.exists():
        return {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        print(f"warning: {path} is not valid JSON; starting fresh.", file=sys.stderr)
        return {}
    return {e["id"]: e for e in data if isinstance(e, dict) and "id" in e}


def fetch_repo(repo_id: str, token: str | None) -> dict | None:
    url = f"https://api.github.com/repos/{repo_id}"
    req = urllib.request.Request(url)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", API_VERSION)
    req.add_header("User-Agent", "curepo-generator")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as err:
        if err.code == 404:
            print(f"  skip {repo_id}: not found (404)", file=sys.stderr)
        elif err.code in (403, 429):
            print(
                f"  skip {repo_id}: rate limited ({err.code}). "
                "Set GITHUB_TOKEN to raise the limit.",
                file=sys.stderr,
            )
        else:
            print(f"  skip {repo_id}: HTTP {err.code}", file=sys.stderr)
    except urllib.error.URLError as err:
        print(f"  skip {repo_id}: network error ({err.reason})", file=sys.stderr)
    return None


def order_entry(entry: dict) -> dict:
    return {k: entry[k] for k in FIELD_ORDER if k in entry}


def build_entry(repo_id: str, data: dict, existing: dict[str, dict]) -> dict:
    license_id = (data.get("license") or {}).get("spdx_id")
    if license_id in (None, "NOASSERTION"):
        license_id = None
    stats = {
        "homepage": data.get("homepage") or None,
        "stars": data.get("stargazers_count", 0),
        "forks": data.get("forks_count", 0),
        "openIssues": data.get("open_issues_count", 0),
        "language": data.get("language") or "Unknown",
        "license": license_id,
        "archived": bool(data.get("archived", False)),
        "createdAt": data.get("created_at") or "",
        "pushedAt": data.get("pushed_at") or "",
    }
    if repo_id in existing:
        # Preserve the curated layer; only refresh volatile stats.
        entry = dict(existing[repo_id])
        entry["id"] = repo_id
        entry.update(stats)
        entry.setdefault("description", data.get("description") or "")
        entry.setdefault("tags", data.get("topics") or [])
        entry.setdefault("category", "")
        entry.setdefault("featured", False)
        return order_entry(entry)
    return order_entry(
        {
            "id": repo_id,
            "description": data.get("description") or "",
            "tags": data.get("topics") or [],
            "category": "",
            "featured": False,
            **stats,
        }
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate src/data/repos.json from a list of GitHub repos."
    )
    parser.add_argument("--input", type=Path, default=ROOT / "scripts" / "repos.txt")
    parser.add_argument(
        "--output", type=Path, default=ROOT / "src" / "data" / "repos.json"
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not args.input.exists():
        print(f"error: input file not found: {args.input}", file=sys.stderr)
        return 1

    token = os.environ.get("GITHUB_TOKEN")
    if not token:
        print("note: no GITHUB_TOKEN set — limited to 60 requests/hour.\n")

    ids = read_ids(args.input)
    existing = load_existing(args.output)

    entries: list[dict] = []
    added = updated = skipped = 0
    for repo_id in ids:
        data = fetch_repo(repo_id, token)
        if data is None:
            skipped += 1
            continue
        entries.append(build_entry(repo_id, data, existing))
        if repo_id in existing:
            updated += 1
            print(f"  updated {repo_id}")
        else:
            added += 1
            print(f"  added   {repo_id}")

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(entries, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )

    print(
        f"\nDone. {len(entries)} repos written to {args.output} "
        f"({added} added, {updated} updated, {skipped} skipped)."
    )
    if added:
        print("Remember to set 'category' and 'featured' for the newly added repos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
