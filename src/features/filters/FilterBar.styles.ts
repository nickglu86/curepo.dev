"use client";
import tw from "tailwind-styled-components";

export const Row = tw.div`
  mt-stack-sm flex flex-wrap items-center gap-stack-sm
`;

export const Chip = tw.button<{ $active?: boolean }>`
  px-3 py-1.5 rounded-full border font-label-xs text-label-xs transition-colors cursor-pointer
  ${(p) =>
    p.$active
      ? "bg-primary-container text-on-primary-container border-primary/20 shadow-sm"
      : "bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant border-outline-variant/50"}
`;

export const Right = tw.div`ml-auto flex gap-stack-sm`;

export const Select = tw.select`
  bg-surface-container-lowest border border-outline-variant/50 rounded-lg
  py-1.5 pl-3 pr-8 font-label-xs text-label-xs text-on-surface-variant
  focus:ring-1 focus:ring-primary cursor-pointer
`;

