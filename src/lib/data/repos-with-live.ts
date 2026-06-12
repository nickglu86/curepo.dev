import type { Repo } from "@/types/repo";
import { getRepos } from "./repos";
import { getLiveStatsForRepos } from "./live-stats";
import { activityLabel, getFreshness } from "@/lib/repo-utils";

const MAX_FEATURED = 9;

export async function getReposWithLiveFeatured(): Promise<Repo[]> {
  const all = getRepos();
  const featuredIds = all
    .filter((r) => r.featured)
    .slice(0, MAX_FEATURED)
    .map((r) => r.id);

  const live = await getLiveStatsForRepos(featuredIds);
  if (live.size === 0) return all;

  return all.map((repo) => {
    const stats = live.get(repo.id);
    if (!stats) return repo;
    const freshness = getFreshness(stats.pushedAt);
    return {
      ...repo,
      stars: stats.stars,
      forks: stats.forks,
      openIssues: stats.openIssues,
      pushedAt: stats.pushedAt,
      freshness,
      lastActivity: activityLabel(stats.pushedAt),
    };
  });
}
