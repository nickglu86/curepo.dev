"use client";
import tw from "tailwind-styled-components";
import type { Freshness } from "@/types/repo";

export const Card = tw.div<{ $featured?: boolean }>`
  relative flex flex-1 flex-col rounded-xl p-stack-md
  bg-surface-container-lowest border border-outline-variant/50
  transition-all duration-200
  hover:-translate-y-1 hover:shadow-lg hover:border-primary/50
  ${(p) => (p.$featured ? "overflow-hidden" : "")}
`;

export const Glow = tw.div`
  absolute inset-0 pointer-events-none
  bg-linear-to-br from-primary/5 to-transparent
`;

export const Head = tw.div`relative z-10 flex items-center gap-3 mb-stack-sm`;

export const Avatar = tw.div`
  w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30
  flex items-center justify-center font-code-sm text-code-sm text-on-surface
`;

export const RepoName = tw.h3`
  font-code-sm text-code-sm text-on-surface font-semibold
`;

export const ArchivedBadge = tw.span`
  ml-auto px-2 py-0.5 rounded-full font-label-xs text-label-xs
  bg-error-container text-on-error-container
`;

export const Desc = tw.p`
  relative z-10 font-body-md text-body-md text-on-surface-variant
  line-clamp-2 min-h-[3rem] mb-stack-md
`;

export const Tags = tw.div`relative z-10 mt-auto flex flex-wrap gap-2 mb-stack-md`;

export const Tag = tw.span`
  bg-surface-container-low text-on-surface-variant
  px-2 py-0.5 rounded font-label-xs text-label-xs
`;

export const Meta = tw.div`
  relative z-10 flex items-center justify-between
  border-t border-outline-variant/20 pt-stack-sm
  font-label-xs text-label-xs text-on-surface-variant
`;

export const Stat = tw.div`flex items-center gap-1`;

export const StarIcon = tw.span`
  material-symbols-outlined text-[16px] text-tertiary-fixed-dim
`;

export const LangDot = tw.span`w-2 h-2 rounded-full inline-block`;

export const FreshnessDot = tw.span<{ $status: Freshness }>`
  w-1.5 h-1.5 rounded-full inline-block
  ${(p) =>
    p.$status === "active"
      ? "bg-secondary"
      : p.$status === "slowing"
        ? "bg-tertiary-fixed-dim"
        : "bg-error"}
`;
