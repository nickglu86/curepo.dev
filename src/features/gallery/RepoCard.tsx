import Link from "next/link";
import type { Repo } from "@/types/repo";
import { formatStars } from "@/lib/repo-utils";
import {
  Card,
  Glow,
  Head,
  AvatarImg,
  RepoName,
  ArchivedBadge,
  Desc,
  Tags,
  Tag,
  Meta,
  Stat,
  StarIcon,
  LangDot,
  FreshnessDot,
} from "./RepoCard.styles";

const MAX_TAGS = 4;

export default function RepoCard({ repo }: { repo: Repo }) {
  const visibleTags = repo.tags.slice(0, MAX_TAGS);
  return (
    <Link href={`/repo/${repo.slug}`} className="flex flex-col">
      <Card $featured={repo.featured}>
        {repo.featured && <Glow />}
        <Head>
          <AvatarImg src={repo.avatarUrl} alt={`${repo.owner} avatar`} />
          <RepoName>{repo.id}</RepoName>
          {repo.archived && <ArchivedBadge>Archived</ArchivedBadge>}
        </Head>
        <Desc>{repo.description}</Desc>
        <Tags>
          {visibleTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
        <Meta>
          <Stat>
            <StarIcon>star</StarIcon>
            {formatStars(repo.stars)}
          </Stat>
          <Stat>
            <LangDot style={{ backgroundColor: repo.languageColor }} />
            {repo.language}
          </Stat>
          <Stat>
            <FreshnessDot $status={repo.freshness} />
            {repo.lastActivity}
          </Stat>
        </Meta>
      </Card>
    </Link>
  );
}
