import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import VercelAnalytics from "@/components/VercelAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["700", "800"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500"],
});

export const metadata: Metadata = {
  // TODO: update to your real production domain once the custom domain is live.
  metadataBase: new URL("https://curepo.dev"),
  title: {
    default: "curepo — Best Curated GitHub Repos for AI Developers (2026)",
    template: "%s · curepo.dev",
  },
  description:
    "A hand-picked gallery of the best GitHub repositories for AI developers in 2026 — LLM tools, agent frameworks, AI libraries, and modern dev tooling. Search and filter curated open-source projects by topic, language, and activity.",
  keywords: [
    "ai developer tools",
    "ai github repos",
    "best ai repos 2026",
    "llm open source",
    "agent frameworks",
    "ai libraries",
    "curated repos",
    "developer tools",
  ],
  verification: { google: "mLyM0M-Vc7IHbCYNIt-soBhTweXNU-gA1ezclKL9gog" },
  openGraph: {
    type: "website",
    siteName: "curepo",
    url: "https://curepo.dev",
    title: "curepo — Best Curated GitHub Repos for AI Developers (2026)",
    description:
      "Hand-picked GitHub repositories for AI developers — LLM tools, agent frameworks, AI libraries, and dev tooling. Search and filter by topic, language, and activity.",
    images: [
      {
        url: "/assets/repo.png",
        width: 128,
        height: 128,
        alt: "curepo — Curated GitHub repos for AI developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "curepo — Best Curated GitHub Repos for AI Developers (2026)",
    description:
      "Hand-picked GitHub repositories for AI developers — a better way to discover the open source worth your stars.",
    images: ["/assets/repo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-body-md text-body-md bg-background text-on-background antialiased min-h-screen flex flex-col">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <StyledComponentsRegistry>
          <TopNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
