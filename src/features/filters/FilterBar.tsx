"use client";
import {
  Row,
  Chip,
} from "./FilterBar.styles";

export default function FilterBar({
  tags,
  activeTags,
  onToggle,
}: {
  tags: string[];
  activeTags: Set<string>;
  onToggle: (tag: string) => void;
}) {
  return (
    <>
      <Row>
        {tags.map((tag) => (
          <Chip
            key={tag}
            $active={activeTags.has(tag)}
            onClick={() => onToggle(tag)}
          >
            {tag}
          </Chip>
        ))}
      </Row>
    </>
  );
}
