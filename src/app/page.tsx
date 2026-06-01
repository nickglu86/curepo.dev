import Hero from "@/features/gallery/Hero";
import Gallery from "@/features/gallery/Gallery";
import { getReposWithLiveFeatured } from "@/lib/data/repos-with-live";

export default async function Home() {
  const repos = await getReposWithLiveFeatured();
  const topicCount = new Set(repos.flatMap((r) => r.tags)).size;

  return (
    <>
      <Hero repoCount={repos.length} topicCount={topicCount} />
      <Gallery repos={repos} />
    </>
  );
}
