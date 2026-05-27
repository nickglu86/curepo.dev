import { Section, Title, Subtitle, StatPill, StatIcon } from "./Hero.styles";

export default function Hero({
  repoCount,
  topicCount,
}: {
  repoCount: number;
  topicCount: number;
}) {
  return (
    <Section>
      <Title>
        Discover the best open source projects
      </Title>
      <Subtitle>Hand-picked repositories for modern developers</Subtitle>
      <StatPill>
        <StatIcon>check_circle</StatIcon>
        {repoCount} hand-picked repos · {topicCount} topics
      </StatPill>
    </Section>
  );
}
