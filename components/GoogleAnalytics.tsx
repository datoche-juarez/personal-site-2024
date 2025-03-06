"use client";

import Script from "next/script";

// Log the tracking ID to verify it's being injected at build time
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "NOT_DEFINED";

export default function GoogleAnalytics() {
  if (!GA_TRACKING_ID || GA_TRACKING_ID === "NOT_DEFINED") {
    console.error("❌ Google Analytics ID is missing or undefined!");
    return null;
  }

  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
