import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/data/config/constants";
import { assets } from "@/data/config/assets";
import { personalInfo } from "@/data/content/profile/data";

export const metaDetails: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Aanchal Singh",
    default: `${personalInfo.name} - ${personalInfo.role}`,
  },
  description: personalInfo.subtext,
  keywords: [
    "Aanchal Singh",
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "Portfolio",
    "UX/UI Case Studies",
  ],
  openGraph: {
    type: "website",
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.subtext,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.subtext,
    images: [`${SITE_URL}/og/og-image.png`],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: assets.logo, type: "image/svg+xml" }],
    shortcut: assets.logo,
    apple: [{ url: assets.logo, type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
};

export const viewPortDetails: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5f5138",
};
