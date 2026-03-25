import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
