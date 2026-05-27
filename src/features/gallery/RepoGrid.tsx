import type { Repo } from "@/types/repo";
import RepoCard from "./RepoCard";
import { Grid, Empty } from "./RepoGrid.styles";

export default function RepoGrid({ repos }: { repos: Repo[] }) {
  if (repos.length === 0) {
    return <Empty>No repos match your filters.</Empty>;
  }
  return (
    <Grid>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </Grid>
  );
}
