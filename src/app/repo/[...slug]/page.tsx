import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRepos, getRepoBySlug } from "@/lib/data/repos";
import RepoDetail from "@/features/repo-detail/RepoDetail";

type Params = { slug: string[] };

export function generateStaticParams() {
  return getRepos().map((r) => ({ slug: r.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const repo = getRepoBySlug(slug.join("/"));
  if (!repo) return {};
  return {
    title: `${repo.id} — ${repo.description}`,
    description: repo.description,
    openGraph: {
      title: `${repo.id} · curepo`,
      description: repo.description,
    },
  };
}

export default async function RepoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const repo = getRepoBySlug(slug.join("/"));
  if (!repo) notFound();
  return <RepoDetail repo={repo} />;
}
