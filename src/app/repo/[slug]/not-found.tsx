import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repo not found",
  description: "We couldn't find that repository in the curepo gallery.",
};

export default function RepoNotFound() {
  return (
    <section className="w-full max-w-[640px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl flex flex-col items-center text-center gap-stack-md">
      <span className="material-symbols-outlined text-primary text-[48px]">
        search_off
      </span>
      <h1 className="font-headline-md text-headline-md text-on-surface">
        Repo not found
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        That repository isn&apos;t in the curepo gallery — it may have been
        renamed, removed, or never curated in the first place.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-xs text-label-xs hover:bg-primary-container transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <span className="material-symbols-outlined text-[18px]">
          arrow_back
        </span>
        Back to gallery
      </Link>
    </section>
  );
}
