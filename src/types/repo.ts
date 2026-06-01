export type Freshness = "active" | "slowing" | "stale";

/** What you author (or what the generator script produces) in repos.json. */
export type CuratedRepo = {
  id: string; // "owner/name"
  description: string;
  customDescription?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  // --- derived from the GitHub API by scripts/generate_repos.py ---
  homepage?: string | null;
  stars: number;
  forks?: number;
  openIssues?: number;
  language: string;
  license?: string | null;
  archived?: boolean;
  createdAt?: string; // ISO
  pushedAt: string; // ISO
};

/** Curated data + fields derived in code for rendering. */
export type Repo = CuratedRepo & {
  owner: string;
  name: string;
  slug: string;
  url: string;
  avatarUrl: string;
  languageColor: string;
  freshness: Freshness;
  lastActivity: string;
  displayDescription: string;
};

/** Live values fetched from the GitHub GraphQL API at request time. */
export type LiveStats = {
  stars: number;
  forks: number;
  openIssues: number;
  pushedAt: string;
};
