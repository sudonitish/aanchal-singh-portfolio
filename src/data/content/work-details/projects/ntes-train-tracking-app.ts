import type { Block } from "@/lib/content";

export const ntesContent: Block[] = [
  {
    type: "list",
    variant: "chips",
    items: [
      { title: "Role", text: "UX/UI Designer", icon: "user" },
      { title: "Duration", text: "1 Week", icon: "calendar" },
      { title: "Tools", text: "Figma", icon: "wrench" },
    ],
  },
  {
    type: "divider",
    withDot: true,
    dotColor: "#F77F00",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/before-90s.png",
    alt: "NTES redesign, before the 90-seconds section",
    width: 1663,
    height: 897,
    paddingX: 154,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/redesign-vs-current.png",
    alt: "Redesign vs current website comparison of the National Train Enquiry System",
    width: 1576,
    height: 446,
    paddingX: 172,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/heuristic-evaluation.png",
    alt: "Heuristic evaluation: where the interface fights its user",
    width: 1353,
    height: 789,
    background: "var(--color-azure-6, rgba(7, 14, 22, 1))",
    paddingX: 284,
    paddingY: 144,
    fullBleed: true,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/findings-overview.png",
    alt: "Findings overview: visual hierarchy, navigation priority, accessibility and display ads",
    width: 1599,
    height: 3420,
    paddingX: 172,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/future-impact.png",
    alt: "For 20 million people, small changes compound",
    width: 1576,
    height: 414,
    paddingX: 172,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/product-mockups.png",
    alt: "NTES redesign shown on laptop and phone",
    width: 1513,
    height: 3257,
    paddingX: 204,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Screen Designs",
    description:
      "Home, PNR Status, Find Trains and Live Tracking — redesigned side by side with the current NTES flows, desktop and mobile.",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/screen-designs.png",
    alt: "Full screen designs: Home, PNR Status, Find Trains, Live Tracking — desktop and mobile",
    width: 1600,
    height: 10758,
  },
  {
    type: "thankYou",
    text: "Thank you",
    accentColor: "#F77F00",
  },
];
