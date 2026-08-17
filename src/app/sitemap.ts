import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/config/constants";
import { projectsMeta } from "@/data/content/work/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/visuals`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsMeta.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
