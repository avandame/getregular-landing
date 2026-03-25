import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const ableLead = localFont({
  src: [
    {
      path: "./fonts/able_lead_otf-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/able_lead_otf-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-able-lead",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Get Regular — Trust Your Gut Again",
  description:
    "AI-powered gut health tracking. Analyze your stool, meals, and biomarkers for personalized insights — built with a board-certified gastroenterologist.",
  openGraph: {
    title: "Get Regular — Trust Your Gut Again",
    description:
      "AI-powered gut health tracking built with a board-certified gastroenterologist.",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Get Regular — AI Gut Health Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Regular — Trust Your Gut Again",
    description:
      "AI-powered gut health tracking built with a board-certified gastroenterologist.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ableLead.variable} ${dmSans.variable} ${inter.variable} antialiased`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_NlIRWmuA1MWWMDYI10nh3AEawcIZ02l8mLsfjZfoHYP', {
                api_host: 'https://us.i.posthog.com',
                person_profiles: 'identified_only',
              })
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
