import { SITE_URL } from "@/data/config/constants";
import { personalInfo } from "@/data/content/profile/data";

export const ogBase = {
  siteName: `${personalInfo.name} Portfolio`,
  images: [
    {
      url: `${SITE_URL}/og/og-image.png`,
      width: 1200,
      height: 630,
      alt: `${personalInfo.name} - ${personalInfo.role}`,
    },
  ],
};

export const twitterBase = {
  card: "summary_large_image" as const,
  images: [`${SITE_URL}/og/og-image.png`],
};
