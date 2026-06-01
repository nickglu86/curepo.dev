// SERVER-ONLY. Do not import from a client component.
// Only called from server components / route handlers. The GITHUB_TOKEN
// must never reach the browser.

import type { LiveStats } from "@/types/repo";

const ENDPOINT = "https://api.github.com/graphql";
const REVALIDATE_SECONDS = 3600;

type GraphQLRepo = {
  stargazerCount: number;
  forkCount: number;
  pushedAt: string;
  issues: { totalCount: number };
} | null;

type GraphQLResponse = {
  data?: Record<string, GraphQLRepo>;
  errors?: unknown[];
};

export async function getLiveStatsForRepos(
  ids: string[],
): Promise<Map<string, LiveStats>> {
  const result = new Map<string, LiveStats>();
  if (ids.length === 0) return result;

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn(
      "[live-stats] GITHUB_TOKEN not set — falling back to snapshot stats.",
    );
    return result;
  }

  const aliases = ids.map((id, i) => {
    const [owner, name] = id.split("/");
    return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { stargazerCount forkCount pushedAt issues(states: OPEN) { totalCount } }`;
  });
  const query = `query LiveStats { ${aliases.join(" ")} }`;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "curepo-live-stats",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.warn(`[live-stats] GitHub returned HTTP ${res.status}`);
      return result;
    }

    const json = (await res.json()) as GraphQLResponse;

    if (json.errors?.length) {
      console.warn("[live-stats] GraphQL errors:", json.errors);
    }
    if (!json.data) return result;

    ids.forEach((id, i) => {
      const node = json.data?.[`r${i}`];
      if (!node) return;
      result.set(id, {
        stars: node.stargazerCount,
        forks: node.forkCount,
        openIssues: node.issues.totalCount,
        pushedAt: node.pushedAt,
      });
    });
  } catch (err) {
    console.warn("[live-stats] fetch failed:", err);
  }

  return result;
}
