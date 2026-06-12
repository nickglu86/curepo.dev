import type { MetadataRoute } from "next";
import { getRepos } from "@/lib/data/repos";

const BASE_URL = "https://curepo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const repoPages: MetadataRoute.Sitemap = getRepos().map((repo) => ({
    url: `${BASE_URL}/repo/${repo.slug}`,
    lastModified: new Date(repo.pushedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...repoPages];
}
