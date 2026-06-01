"use client";
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import type { Repo } from "@/types/repo";
import SearchBar from "@/features/search/SearchBar";
import FilterBar from "@/features/filters/FilterBar";
import RepoGrid from "@/features/gallery/RepoGrid";
import { PRESET_TAGS } from "@/features/filters/preset-tags";
import {
  SearchSection,
  GridSection,
  GridHeader,
  Heading,
  SortSelect,
  ShowMoreWrap,
  ShowMore,
} from "./Gallery.styles";

type SortKey = "featured" | "stars" | "active" | "newest";

const PAGE_SIZE = 9;

export default function Gallery({ repos }: { repos: Repo[] }) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortKey>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, activeTags, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const active = [...activeTags];
    const list = repos.filter((r) => {
      const matchesQuery =
        !q ||
        r.id.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        active.length === 0 ||
        r.tags.some((t) => active.some((p) => t.startsWith(p)));
      return matchesQuery && matchesTags;
    });

    const ts = (d?: string) => (d ? new Date(d).getTime() : 0);
    const sorted = [...list];
    if (sort === "featured") {
      const order = new Map(repos.map((r, i) => [r.id, i]));
      sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.featured && b.featured) {
          return (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0);
        }
        return b.stars - a.stars;
      });
    } else if (sort === "stars") {
      sorted.sort((a, b) => b.stars - a.stars);
    } else if (sort === "active") {
      sorted.sort((a, b) => ts(b.pushedAt) - ts(a.pushedAt));
    } else if (sort === "newest") {
      sorted.sort((a, b) => ts(b.createdAt) - ts(a.createdAt));
    }
    return sorted;
  }, [repos, query, activeTags, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <SearchSection>
        <SearchBar value={query} onChange={setQuery} inputRef={inputRef} />
        <FilterBar
          tags={PRESET_TAGS}
          activeTags={activeTags}
          onToggle={toggleTag}
        />
      </SearchSection>
      <GridSection>
        <GridHeader>
          <Heading>Trending Now</Heading>
          <SortSelect
            value={sort}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSort(e.target.value as SortKey)
            }
          >
            <option value="featured">Featured</option>
            <option value="stars">Sort by: Stars</option>
            <option value="active">Recently active</option>
            <option value="newest">Newest</option>
          </SortSelect>
        </GridHeader>
        <RepoGrid repos={shown} />
        {filtered.length > visible && (
          <ShowMoreWrap>
            <ShowMore onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Show more
            </ShowMore>
          </ShowMoreWrap>
        )}
      </GridSection>
    </>
  );
}
