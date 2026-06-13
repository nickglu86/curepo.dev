"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";

export const FooterEl = tw.footer`
  bg-surface border-t border-outline-variant/30 pt-12 pb-6 mt-auto
`;

export const Inner = tw.div`
  max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop
`;

export const TopGrid = tw.div`
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12
`;

export const BrandCol = tw.div`flex flex-col gap-4`;

export const BrandRow = tw.div`
  flex items-center gap-2 font-headline-md text-on-surface font-bold text-[20px]
`;

export const BrandMark = tw.span`
  material-symbols-outlined text-primary text-[28px]
`;

export const Tagline = tw.p`
  text-on-surface-variant font-body-md max-w-xs
`;

export const SocialRow = tw.div`flex gap-4 mt-2`;

export const SocialLink = tw.a`
  text-on-surface-variant hover:text-primary transition-colors
`;

export const SocialIcon = tw.span`material-symbols-outlined`;

export const Column = tw.div`flex flex-col`;

export const ColTitle = tw.h4`
  font-headline-md text-[18px] text-on-surface font-bold mb-4
`;

export const LinkList = tw.ul`
  flex flex-col gap-3 font-body-md text-on-surface-variant
`;

export const FootLink = tw(Link)`hover:text-primary transition-colors`;

export const FootAnchor = tw.a`hover:text-primary transition-colors`;

export const UpdateCol = tw.div`flex flex-col gap-4`;

export const NewsletterForm = tw.form`flex flex-col gap-2`;

export const EmailInput = tw.input`
  bg-surface-container-low border border-outline-variant/50 rounded-lg
  px-4 py-2 text-on-surface outline-none transition-all
  focus:ring-2 focus:ring-primary/20 focus:border-primary
  disabled:opacity-60
`;

export const SubscribeBtn = tw.button`
  bg-primary text-on-primary font-bold px-4 py-2 rounded-lg
  hover:bg-primary/90 transition-all active:scale-[0.98]
  disabled:opacity-60 disabled:cursor-not-allowed
`;

export const StatusText = tw.p<{ $variant: "success" | "error" }>`
  text-sm mt-1
  ${(p) => (p.$variant === "error" ? "text-error" : "text-primary")}
`;

export const BottomBar = tw.div`
  pt-6 border-t border-outline-variant/30
  flex flex-col md:flex-row justify-between items-center gap-4
  text-on-surface-variant font-body-md text-sm
`;
