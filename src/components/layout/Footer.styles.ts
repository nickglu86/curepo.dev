"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";

export const FooterEl = tw.footer`
  bg-surface text-on-surface-variant
  border-t border-outline-variant mt-auto
`;

export const Inner = tw.div`
  max-w-7xl mx-auto px-margin-desktop py-stack-lg
  flex flex-col md:flex-row justify-between items-center w-full
`;

export const Brand = tw.div`
  font-headline-md text-headline-md font-bold text-on-surface mb-4 md:mb-0
`;

export const Nav = tw.nav`flex gap-gutter`;

export const FootLink = tw(Link)`
  text-on-surface-variant hover:text-primary transition-colors
  opacity-80 hover:opacity-100
`;
