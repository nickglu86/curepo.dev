"use client";
import tw from "tailwind-styled-components";

export const SearchSection = tw.section`
  max-w-3xl mx-auto px-margin-desktop mb-stack-lg
`;

export const GridSection = tw.section`
  max-w-7xl mx-auto px-margin-desktop mb-stack-lg
`;

export const Heading = tw.h2`
  font-headline-md text-headline-md font-bold text-on-surface  text-headline-md
`;

export const GridHeader = tw.div`
  flex items-center justify-between gap-stack-md mb-gutter
`;

export const SortSelect = tw.select`
  bg-surface-container-lowest border border-outline-variant/50 rounded-lg
  py-2 pl-3 pr-8 font-label-xs text-label-xs text-on-surface-variant
  focus:ring-1 focus:ring-primary cursor-pointer
`;

export const ShowMoreWrap = tw.div`flex justify-center mt-stack-lg`;

export const ShowMore = tw.button`
  px-6 py-2.5 rounded-full cursor-pointer
  font-body-md text-body-md font-semibold
  bg-primary text-on-primary hover:opacity-90 transition-opacity
`;
