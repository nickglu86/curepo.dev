import Script from "next/script";

/**
 * Google Analytics (GA4). Renders nothing unless NEXT_PUBLIC_GA_ID is set,
 * so local dev stays clean. Set it in .env.local and in Vercel's env vars:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
