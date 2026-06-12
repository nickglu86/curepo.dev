"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";

const DISABLE_KEY = "va-disable";

/**
 * Vercel Web Analytics has no server-side IP exclusion, so we opt out per-browser.
 * Visit the site once with `?disable-analytics` on each of your own devices to set
 * a localStorage flag; `beforeSend` then drops every event from that browser.
 */
export default function VercelAnalytics() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.search.includes("disable-analytics")
    ) {
      localStorage.setItem(DISABLE_KEY, "1");
    }
  }, []);

  return (
    <Analytics
      beforeSend={(event) => {
        if (
          typeof window !== "undefined" &&
          localStorage.getItem(DISABLE_KEY)
        ) {
          return null;
        }
        return event;
      }}
    />
  );
}
