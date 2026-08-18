import type { Block } from "@/lib/content";

export const projectCardCopy = {
  liveLabel: "Live",
  viewLabel: "View",
};

export interface ProjectMeta {
  slug: string;
  name: string;
  tag: string;
  description: string;
  cardImage: string;
  cardBg: string;
  /** light = light overlay tint + dark title/badge (used on light card backgrounds) */
  tone: "light" | "dark";
  live: boolean;
  featured: boolean;
}

export interface Project extends ProjectMeta {
  overview: string;
  content: Block[];
}

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "zoho-implementation-partner-marketing",
    name: "Designing a Scalable Marketing Experience for a Zoho Implementation Partner",
    tag: "UX Case Study",
    description:
      "A scalable marketing site and design system for a Zoho implementation partner.",
    cardImage: "/card-zoho.png",
    cardBg: "bg-surface-2",
    tone: "light",
    live: true,
    featured: true,
  },
  {
    slug: "value-research-stock-screener",
    name: "Value Research Stock Screener",
    tag: "UX Case Study",
    description:
      "A stock screening tool that helps investors filter and discover high quality stocks.",
    cardImage: "/card-value-research.png",
    cardBg: "bg-black",
    tone: "dark",
    live: true,
    featured: true,
  },
  {
    slug: "whatsapp-message-scheduling",
    name: "Adding a Message Scheduling Feature to WhatsApp",
    tag: "UX Case Study",
    description:
      "Designing an intuitive scheduling system that empowers users to send messages at the perfect time.",
    cardImage: "/card-whatsapp.png",
    cardBg: "bg-surface-navy",
    tone: "dark",
    live: false,
    featured: true,
  },
  {
    slug: "ntes-train-tracking-app",
    name: "Redesigning NTES: India's Train Tracking App",
    tag: "UX Case Study",
    description: "A redesign of India's train tracking experience.",
    cardImage: "/card-ntes.png",
    cardBg: "bg-surface-4",
    tone: "dark",
    live: false,
    featured: true,
  },
  {
    slug: "chase-sports-adventure-commerce",
    name: "Designing a Unified Sports & Adventure Commerce Platform",
    tag: "UX Case Study",
    description:
      "Designing a single destination where sports enthusiasts shop for gear, prep for adventures, and never switch apps again.",
    cardImage: "/card-chase.png",
    cardBg: "bg-surface-3",
    tone: "dark",
    live: false,
    featured: true,
  },
];
