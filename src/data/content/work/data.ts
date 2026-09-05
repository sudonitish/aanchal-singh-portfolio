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
  /** Horizontal page padding at the 1500px+ breakpoint, in px. Defaults to 150. */
  wideGutter?: number;
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
      "A landing page and four service pages — from raw content documents into a conversion-focused system.",
    cardImage: "/assets/homepage/zoho.jpg",
    cardBg: "bg-surface-2",
    tone: "light",
    live: true,
    featured: true,
    wideGutter: 100,
  },
  {
    slug: "value-research-stock-screener",
    name: "Designing for the Decision, Not the Database",
    tag: "UX Case Study",
    description: "Redesigning the Value Research stock screener.",
    cardImage: "/assets/homepage/value-research.jpg",
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
    cardImage: "/assets/homepage/whatsapp.jpg",
    cardBg: "bg-surface-navy",
    tone: "dark",
    live: false,
    featured: true,
    wideGutter: 225,
  },
  {
    slug: "ntes-train-tracking-app",
    name: "Redesigning NTES: India's Train Tracking App",
    tag: "UX Case Study",
    description: "Indian Railways' digital face needed a makeover. Badly.",
    cardImage: "/assets/homepage/ntes.jpg",
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
    cardImage: "/assets/homepage/chase.jpg",
    cardBg: "bg-surface-3",
    tone: "dark",
    live: false,
    featured: true,
    wideGutter: 245,
  },
];
