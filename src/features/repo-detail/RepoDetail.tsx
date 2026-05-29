import Link from "next/link";
import type { Repo, Freshness } from "@/types/repo";
import { formatStars } from "@/lib/repo-utils";
import {
  Wrapper,
  BackLink,
  BackIcon,
  Header,
  HeaderInfo,
  Avatar,
  AvatarImg,
  Title,
  Actions,
  PrimaryAction,
  SecondaryAction,
  ActionIcon,
  Description,
  Tags,
  TagChip,
  StatsGrid,
  StatCard,
  WideStatCard,
  StatLabel,
  StatIcon,
  StatValue,
  LangRow,
  LangSwatch,
  LangText,
  MetaRow,
  MetaCol,
  MetaLabel,
  MetaValue,
  MetaDivider,
  FreshnessDot,
  HealthCallout,
  HealthIcon,
  HealthText,
} from "./RepoDetail.styles";

const HEALTH_COPY: Record<Freshness, string> = {
  active: "This repository is highly active and well-maintained.",
  slowing: "This repository receives occasional updates.",
  stale: "This repository hasn't been updated recently.",
};

const HEALTH_ICON: Record<Freshness, string> = {
  active: "check_circle",
  slowing: "schedule",
  stale: "warning",
};

function formatMonthYear(iso?: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function RepoDetail({ repo }: { repo: Repo }) {
  return (
    <Wrapper>
      <Link href="/">
        <BackLink>
          <BackIcon>arrow_back</BackIcon>
          Back to gallery
        </BackLink>
      </Link>

      <Header>
        <HeaderInfo>
          <Avatar>
            <AvatarImg src={repo.avatarUrl} alt={`${repo.owner} avatar`} />
          </Avatar>
          <div>
            <Title>{repo.id}</Title>
          </div>
        </HeaderInfo>
        <Actions>
          {repo.homepage && (
            <SecondaryAction
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
            >
              Visit site
            </SecondaryAction>
          )}
          <PrimaryAction
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-on-primary)" }}
          >
            <ActionIcon>open_in_new</ActionIcon>
            View on GitHub
          </PrimaryAction>
        </Actions>
      </Header>

      <Description>{repo.description}</Description>

      {repo.tags.length > 0 && (
        <Tags>
          {repo.tags.map((t) => (
            <TagChip key={t}>{t}</TagChip>
          ))}
        </Tags>
      )}

      <StatsGrid>
        <StatCard>
          <StatLabel>
            <StatIcon>star</StatIcon>
            Stars
          </StatLabel>
          <StatValue>{formatStars(repo.stars)}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Forks</StatLabel>
          <StatValue>
            {repo.forks !== undefined ? formatStars(repo.forks) : "—"}
          </StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Open Issues</StatLabel>
          <StatValue>
            {repo.openIssues !== undefined ? repo.openIssues : "—"}
          </StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>License</StatLabel>
          <StatValue>{repo.license ?? "—"}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Language</StatLabel>
          <LangRow>
            <LangSwatch style={{ backgroundColor: repo.languageColor }} />
            <LangText>{repo.language}</LangText>
          </LangRow>
        </StatCard>
        <WideStatCard>
          <MetaRow>
            <MetaCol>
              <MetaLabel>Created</MetaLabel>
              <MetaValue>{formatMonthYear(repo.createdAt)}</MetaValue>
            </MetaCol>
            <MetaDivider />
            <MetaCol>
              <MetaLabel>Last activity</MetaLabel>
              <LangRow>
                <FreshnessDot $status={repo.freshness} />
                <MetaValue>{repo.lastActivity}</MetaValue>
              </LangRow>
            </MetaCol>
          </MetaRow>
        </WideStatCard>
      </StatsGrid>

      <HealthCallout $status={repo.freshness}>
        <HealthIcon $status={repo.freshness}>
          {HEALTH_ICON[repo.freshness]}
        </HealthIcon>
        <HealthText>{HEALTH_COPY[repo.freshness]}</HealthText>
      </HealthCallout>
    </Wrapper>
  );
}
