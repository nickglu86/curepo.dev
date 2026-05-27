"use client";
import {
  Row,
  Chip,
  PillsRow,
  PillLabel,
  Pill,
  PillClose,
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
      {activeTags.size > 0 && (
        <PillsRow>
          <PillLabel>Active filters:</PillLabel>
          {[...activeTags].map((tag) => (
            <Pill key={tag}>
              {tag}
              <PillClose onClick={() => onToggle(tag)}>close</PillClose>
            </Pill>
          ))}
        </PillsRow>
      )}
    </>
  );
}
