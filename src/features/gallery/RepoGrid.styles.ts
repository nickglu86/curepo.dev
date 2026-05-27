"use client";
import tw from "tailwind-styled-components";

export const Grid = tw.div`
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter auto-rows-fr
`;

export const Empty = tw.div`
  text-center py-stack-lg font-body-md text-body-md text-on-surface-variant
`;
