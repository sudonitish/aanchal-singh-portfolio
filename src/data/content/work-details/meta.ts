import type { Metadata } from "next";
import { SITE_URL } from "@/data/config/constants";
import { ogBase, twitterBase } from "@/data/content/layout/shared-meta";
import { getProjectBySlug } from "./data";

export function getProjectMetadata(slug: string): Metadata {
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      ...ogBase,
      type: "article",
      title: project.name,
      description: project.description,
      url: `${SITE_URL}/work/${slug}`,
    },
    twitter: {
      ...twitterBase,
      title: project.name,
      description: project.description,
    },
  };
}

export function getProjectJsonLd(slug: string) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${SITE_URL}/work/${slug}`,
  };
}
