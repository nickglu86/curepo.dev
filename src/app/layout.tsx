import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

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
    default: "curepo.dev — Curated GitHub Repositories Worth Your Stars",
    template: "%s · curepo.dev",
  },
  description:
    "Discover hand-picked, interesting GitHub repositories. Search and filter curated open-source projects by topic, language, and activity — a better way to find your next favorite repo.",
  keywords: [
    "github repositories",
    "open source projects",
    "curated repos",
    "developer tools",
    "discover github",
    "best github repos",
  ],
  openGraph: {
    type: "website",
    siteName: "curepo",
    url: "https://curepo.dev",
    title: "curepo — Curated GitHub Repositories Worth Your Stars",
    description:
      "Hand-picked, interesting GitHub repositories. Search and filter curated open-source projects by topic, language, and activity.",
    images: [
      {
        url: "/assets/repo.png",
        width: 128,
        height: 128,
        alt: "curepo.dev — Curated GitHub Repositories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "curepo — Curated GitHub Repositories",
    description:
      "Hand-picked, interesting GitHub repositories — a better way to discover open source.",
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
