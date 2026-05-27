"use client";
import tw from "tailwind-styled-components";

export const Wrapper = tw.div`relative group`;

export const Icon = tw.span`
  material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2
  text-outline group-focus-within:text-primary transition-colors
`;

export const Input = tw.input`
  w-full h-14 pl-12 pr-16
  bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm
  focus:ring-2 focus:ring-primary/20 focus:border-primary
  font-body-lg text-body-lg text-on-surface
  placeholder:text-on-surface-variant/50 transition-all
`;

export const Hint = tw.div`
  absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1
  bg-surface-container-high border border-outline-variant/30
  px-2 py-1 rounded font-code-sm text-label-xs text-on-surface-variant
`;

export const HintIcon = tw.span`material-symbols-outlined text-[14px]`;
