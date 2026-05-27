"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";

export const Header = tw.header`
  sticky top-0 z-50 w-full
  bg-surface/80 backdrop-blur-md
  border-b border-outline-variant/30
`;

export const Inner = tw.div`
  max-w-7xl mx-auto px-margin-desktop
  flex justify-between items-center h-16 w-full
`;

export const Brand = tw(Link)`
  flex items-center gap-2
  font-display text-headline-md font-bold text-on-surface
`;

export const BrandIcon = tw.span`
  flex h-6 w-6 shrink-0 items-center justify-center
`;

export const Nav = tw.nav`
  hidden md:flex items-center gap-gutter
`;

export const NavLink = tw(Link)<{ $active?: boolean }>`
  font-body-md text-body-md transition-colors
  ${(p) =>
    p.$active
      ? "text-primary font-bold border-b-2 border-primary pb-1"
      : "text-on-surface-variant hover:text-primary"}
`;
