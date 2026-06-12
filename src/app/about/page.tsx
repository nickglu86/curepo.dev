import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What curepo is and how it's built.",
};

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <h1 className="font-display-lg text-display-lgs md:text-display-lg font-extrabold text-on-surface mb-stack-md">
        About curepo
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
        curepo is a curated gallery of interesting GitHub repositories —
        hand-picked, tagged, and searchable. Instead of an algorithmic
        popularity feed, every repo here is chosen on purpose and comes with a
        short note on why it&apos;s worth a look.
      </p>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </section>
  );
}
