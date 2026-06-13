import Hero from "@/features/gallery/Hero";
import Gallery from "@/features/gallery/Gallery";
import { getReposWithLiveFeatured } from "@/lib/data/repos-with-live";
import { PRESET_TAGS } from "@/features/filters/preset-tags";

export default async function Home() {
  const repos = await getReposWithLiveFeatured();

  return (
    <>
      <Hero repoCount={repos.length} topicCount={PRESET_TAGS.length} />
      <Gallery repos={repos} />
    </>
  );
}
