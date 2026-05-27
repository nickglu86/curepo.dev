# curepo — Growth & Distribution Ideas

Working notes on getting real traffic. The order matters: SEO compounds over
time, so lay that foundation early; outreach and community posts give spikes.

## 0. The wedge — why anyone would share us

We're not "another trending list." The shareable hooks are:

- **Curation** — every repo is hand-picked with a "why it's interesting" note.
- **Health / freshness data** — "is this repo still maintained?" is a real
  question people google. Our freshness signal can answer it. Unique + rankable.
- **Comparisons & collections** — "X vs Y", "10 best CLI tools" — naturally
  shareable formats.

Lean into these in everything below.

## 1. SEO foundation (highest ROI, compounding) — do this first

- **Per-repo detail pages** with unique `<title>` + meta description, targeting
  long-tail searches: `"is <repo> maintained"`, `"<repo> alternatives"`,
  `"<A> vs <B>"`. Each page is an indexable landing page.
- **Tag / category hub pages** → target `"best <topic> repos"` (e.g. "best AI
  repos", "best terminal tools").
- **Dynamic Open Graph images** per repo & per collection → rich link previews
  on X/Slack/Discord → more clicks per share. (Next supports OG image routes.)
- **sitemap.xml + robots.txt** — Next can generate both.
- **Structured data** — JSON-LD `SoftwareSourceCode` / `ItemList` so Google
  understands the pages.
- **Speed** — server-rendered on Vercel = good Core Web Vitals = ranking help.

## 2. Repo-owner outreach (the "we added your repo" idea) — tasteful version

- **"Featured on curepo" README badge** — give maintainers a badge + snippet to
  add to their README. This is the big one: backlinks from high-authority GitHub
  repos = SEO juice + steady referral clicks. Many maintainers love showing it.
- **A short, personal heads-up** to a maintainer (a friendly mention/tweet, or a
  Discussion where the project welcomes it) saying you featured them. Keep it
  **low volume and genuine**.
- ⚠️ Avoid mass / automated GitHub issues or DMs — they get flagged as spam,
  can hurt the project's reputation, and annoy maintainers. Quality over volume.

## 3. Community seeding (the "comment where people recommend repos" idea)

- **Launch posts**: `Show HN: curepo`, r/coolgithubprojects, r/webdev,
  r/programming (read their rules), dev.to, Lobsters, Bluesky, X, LinkedIn.
- **Value-first replies**: when someone asks "what cool repos should I check
  out?", link the *specific relevant* curepo page — not a generic "check out my
  site". Be useful first; the plug is the page being genuinely helpful.
- **Directories**: submit to relevant `awesome-*` lists, Product Hunt, BetaList,
  AlternativeTo.

## 4. Growth loops (recurring, not one-off)

- **"Repo of the week"** + email capture → a small newsletter → recurring visits.
- **Shareable collections** users (or you) can curate and link.
- **Embeddable badge/widget** for blogs/READMEs.

## 5. Measure what works

- Add **Vercel Analytics** or **Plausible**. Track which pages and search
  queries actually land traffic, then make more of those.

## Suggested sequence (easy wins first)

1. Ship to Vercel + add analytics.
2. SEO basics: per-page meta, OG images, sitemap, JSON-LD.
3. Launch: Show HN + 2–3 relevant subreddits + dev.to.
4. README badges + a handful of personal maintainer heads-ups.
5. Content pages ("is X maintained", comparisons) + newsletter.

## Keep it clean

Everything here works *because* the site is genuinely useful. Don't trade that
for spammy volume — one good Show HN or one popular README badge beats 500 cold
issue comments, and won't get you banned.
