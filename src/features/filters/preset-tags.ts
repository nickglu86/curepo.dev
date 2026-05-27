/**
 * Curated filter chips shown under the search bar.
 *
 * Each entry is matched as a PREFIX against a repo's tags — e.g. "ai" matches
 * repos tagged "ai-agents" or "ai-assisted-development"; "game" matches
 * "game-dev", "gamedev", "gameboy". This groups the long-tail of GitHub topics
 * into a small, useful set of buckets. Edit freely as the catalog grows.
 */
export const PRESET_TAGS = [
  "ai",
  "claude",
  "agent",
  "llm",
  "python",
  "typescript",
  "rust",
  "game",
  "terminal",
  "web",
  "cloud",
  "machine-learning",
  "computer-vision",
  "finance"
];
