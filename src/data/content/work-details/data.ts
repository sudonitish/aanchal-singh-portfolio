import type { Project } from "@/data/content/work/data";
import { projectsMeta } from "@/data/content/work/data";
import { whatsappSchedulingContent } from "./projects/whatsapp-message-scheduling";
import { chaseContent } from "./projects/chase-sports-adventure-commerce";
import { ntesContent } from "./projects/ntes-train-tracking-app";
import { zohoContent } from "./projects/zoho-implementation-partner-marketing";
import { valueResearchContent } from "./projects/value-research-stock-screener";
import type { Block } from "@/lib/content";

const stubContent: Block[] = [
  {
    type: "paragraph",
    text: "Case study write-up coming soon.",
  },
];

const contentBySlug: Record<string, Block[]> = {
  "whatsapp-message-scheduling": whatsappSchedulingContent,
  "chase-sports-adventure-commerce": chaseContent,
  "ntes-train-tracking-app": ntesContent,
  "zoho-implementation-partner-marketing": zohoContent,
  "value-research-stock-screener": valueResearchContent,
};

export const projects: Project[] = projectsMeta.map((meta) => ({
  ...meta,
  overview: meta.description,
  content: contentBySlug[meta.slug] ?? stubContent,
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
