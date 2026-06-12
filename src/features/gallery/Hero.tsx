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
        The best GitHub repos for AI developers
      </Title>
      <Subtitle>
        Hand-picked LLM tools, agent frameworks, and AI libraries — curated for 2026
      </Subtitle>
      <StatPill>
        <StatIcon>check_circle</StatIcon>
        {repoCount} hand-picked repos · {topicCount} topics
      </StatPill>
    </Section>
  );
}
