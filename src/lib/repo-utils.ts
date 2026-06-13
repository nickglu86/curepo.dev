import type { CuratedRepo, Repo, Freshness } from "@/types/repo";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  Go: "#00add8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4f5d95",
  Swift: "#f05138",
  Kotlin: "#a97bff",
  Dart: "#00b4ab",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
};

export function languageColor(language: string): string {
  return LANGUAGE_COLORS[language] ?? "#94a3b8";
}

const DAY = 1000 * 60 * 60 * 24;

export function getFreshness(pushedAt: string): Freshness {
  const days = (Date.now() - new Date(pushedAt).getTime()) / DAY;
  if (days <= 30) return "active";
  if (days <= 180) return "slowing";
  return "stale";
}

// Coarse "how recently" buckets — tweak the day thresholds / wording to taste.
export function activityLabel(pushedAt: string): string {
  const days = (Date.now() - new Date(pushedAt).getTime()) / DAY;
  if (days <= 30) return "Updated recently";
  if (days <= 180) return "Updated few months ago";
  if (days <= 365) return "Updated this year";
  return "Updated over a year ago";
}

export function formatStars(stars: number): string {
  if (stars >= 1000) return `${(stars / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(stars);
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRepo(c: CuratedRepo): Repo {
  const [owner, name] = c.id.split("/");
  const freshness = getFreshness(c.pushedAt);
  return {
    ...c,
    owner,
    name,
    slug: `${slugify(owner)}/${slugify(name)}`,
    url: `https://github.com/${c.id}`,
    avatarUrl: `https://github.com/${owner}.png`,
    languageColor: languageColor(c.language),
    freshness,
    lastActivity: activityLabel(c.pushedAt),
    displayDescription: c.customDescription || c.description,
  };
}
