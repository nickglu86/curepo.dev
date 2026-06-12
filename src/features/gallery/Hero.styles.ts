"use client";
import tw from "tailwind-styled-components";

export const Section = tw.section`
  max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-md
  text-center flex flex-col items-center justify-center min-h-[25vh]
`;

export const Title = tw.h1`
  font-display-lg text-[2.6rem] leading-none md:text-display-lg
  font-extrabold text-on-surface mb-stack-sm
`;

export const Subtitle = tw.p`
  font-body-lg text-body-lg text-on-surface-variant my-stack-md max-w-2xl
`;

export const StatPill = tw.div`
  inline-flex items-center gap-2 bg-surface-container-high
  px-4 py-1.5 mt-stack-md rounded-full border border-outline-variant/30
  font-code-sm text-code-sm text-on-surface-variant
`;

export const StatIcon = tw.span`
  material-symbols-outlined text-primary text-[18px]
`;
