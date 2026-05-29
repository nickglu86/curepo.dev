"use client";
import tw from "tailwind-styled-components";
import type { Freshness } from "@/types/repo";

export const Wrapper = tw.article`
  w-full max-w-[1080px] mx-auto
  px-margin-mobile md:px-margin-desktop py-stack-lg
  flex flex-col gap-stack-lg
`;

export const BackLink = tw.div`
  inline-flex items-center gap-2 text-on-surface-variant
  hover:text-primary transition-colors font-body-md text-body-md
`;

export const BackIcon = tw.span`
  material-symbols-outlined text-sm transition-transform
`;

export const Header = tw.header`
  flex flex-col md:flex-row md:items-start justify-between gap-stack-md
`;

export const HeaderInfo = tw.div`flex items-center gap-4`;

export const Avatar = tw.div`
  w-16 h-16 rounded-full overflow-hidden
  bg-surface-container shadow-sm border border-outline-variant/30 flex-shrink-0
  flex items-center justify-center
`;

export const AvatarImg = tw.img`w-full h-full object-cover`;

export const Title = tw.h1`
  font-code-sm text-headline-md md:text-display-lgs text-on-surface break-all
`;

export const Actions = tw.div`flex items-center gap-3 mt-4 md:mt-0`;

export const SecondaryAction = tw.a`
  inline-flex items-center justify-center h-10 px-4 py-2
  bg-surface-container-lowest border border-outline-variant/50
  text-primary! rounded-lg font-label-xs text-label-xs
  hover:shadow-level-1 hover:border-outline-variant transition-all
  focus:outline-none focus:ring-2 focus:ring-primary/20
`;

export const PrimaryAction = tw.a`
  inline-flex items-center justify-center h-10 px-4 py-2 gap-2
  bg-primary text-on-primary! rounded-lg
  font-label-xs text-label-xs shadow-sm
  hover:bg-primary-container transition-all
  focus:outline-none focus:ring-2 focus:ring-primary/20
`;

export const ActionIcon = tw.span`material-symbols-outlined text-[18px] text-on-primary!`;

export const Description = tw.section`
  font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed
`;

export const Tags = tw.section`flex flex-wrap gap-2`;

export const TagChip = tw.span`
  inline-flex items-center px-3 py-1 rounded-full
  bg-primary/10 text-primary font-label-xs text-label-xs
`;

export const StatsGrid = tw.section`
  grid grid-cols-2 md:grid-cols-4 gap-4 mt-stack-sm
`;

export const StatCard = tw.div`
  bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30
  shadow-level-1 hover:shadow-level-2 transition-shadow
  flex flex-col justify-center items-start gap-1
`;

export const WideStatCard = tw.div`
  col-span-2 md:col-span-3
  bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30
  shadow-level-1 hover:shadow-level-2 transition-shadow
  flex flex-col justify-center items-start gap-3
`;

export const StatLabel = tw.span`
  text-on-surface-variant font-label-xs text-label-xs
  flex items-center gap-1 uppercase tracking-wider
`;

export const StatIcon = tw.span`material-symbols-outlined text-[16px]`;

export const StatValue = tw.span`font-code-sm text-headline-md text-on-surface`;

export const LangRow = tw.div`flex items-center gap-2 mt-1`;

export const LangSwatch = tw.span`w-3 h-3 rounded-full inline-block`;

export const LangText = tw.span`font-code-sm text-body-md font-semibold text-on-surface`;

export const MetaRow = tw.div`
  flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full
`;

export const MetaCol = tw.div``;

export const MetaLabel = tw.span`
  block text-on-surface-variant font-label-xs text-label-xs
  uppercase tracking-wider mb-1
`;

export const MetaValue = tw.span`font-code-sm text-body-md font-semibold text-on-surface`;

export const MetaDivider = tw.div`hidden md:block w-px h-8 bg-outline-variant/30`;

export const FreshnessDot = tw.span<{ $status: Freshness }>`
  w-3 h-3 rounded-full inline-block
  ${(p) =>
    p.$status === "active"
      ? "bg-secondary"
      : p.$status === "slowing"
        ? "bg-tertiary-fixed-dim"
        : "bg-error"}
`;

export const HealthCallout = tw.section<{ $status: Freshness }>`
  rounded-xl p-4 flex items-center gap-3 border
  bg-surface-container-low
  ${(p) =>
    p.$status === "active"
      ? "border-primary/20"
      : p.$status === "slowing"
        ? "border-tertiary/20"
        : "border-error/20"}
`;

export const HealthIcon = tw.span<{ $status: Freshness }>`
  material-symbols-outlined
  ${(p) =>
    p.$status === "active"
      ? "text-primary"
      : p.$status === "slowing"
        ? "text-tertiary-fixed-dim"
        : "text-error"}
`;

export const HealthText = tw.p`font-body-md text-body-md text-on-surface`;
