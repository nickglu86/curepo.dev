import Hero from "@/features/gallery/Hero";
import Gallery from "@/features/gallery/Gallery";
import { getRepos } from "@/lib/data/repos";

export default function Home() {
  const repos = getRepos();
  const topicCount = new Set(repos.flatMap((r) => r.tags)).size;

  return (
    <>
      <Hero repoCount={repos.length} topicCount={topicCount} />
      <Gallery repos={repos} />
    </>
  );
}
