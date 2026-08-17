import type { Project } from "@/data/content/work/data";
import { projectsMeta } from "@/data/content/work/data";
import { whatsappSchedulingContent } from "./projects/whatsapp-message-scheduling";
import { chaseContent } from "./projects/chase-sports-adventure-commerce";
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
};

export const projects: Project[] = projectsMeta.map((meta) => ({
  ...meta,
  overview: meta.description,
  content: contentBySlug[meta.slug] ?? stubContent,
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
