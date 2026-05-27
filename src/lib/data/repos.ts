import data from "@/data/repos.json";
import type { CuratedRepo, Repo } from "@/types/repo";
import { toRepo } from "@/lib/repo-utils";

const repos: Repo[] = (data as CuratedRepo[]).map(toRepo);

export function getRepos(): Repo[] {
  return repos;
}

export function getRepoById(id: string): Repo | undefined {
  return repos.find((r) => r.id === id);
}

export function getAllTags(): string[] {
  return [...new Set(repos.flatMap((r) => r.tags))].sort();
}

export function getAllCategories(): string[] {
  return [...new Set(repos.map((r) => r.category))].sort();
}
