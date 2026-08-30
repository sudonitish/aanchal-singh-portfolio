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
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/redesign-vs-current.png",
    alt: "Redesign vs current website comparison of the National Train Enquiry System",
    width: 1663,
    height: 897,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "The Trigger",
    title: "90 seconds before a train arrives.",
    description:
      "Standing on a platform with a phone in one hand and a suitcase in the other, the only question that matters is “is the train on time?” - everything else is noise. NTES is the official train tracking platform run by Indian Railways. It moves more than 20 million queries a day. For most travellers it is the last source of truth before a train pulls in, and yet the screen they meet is busier than the station itself. I picked NTES because of the gap between its stakes and its interface. A public utility used by millions deserves a layout that respects the 80 seconds someone spends on it - not a wall of links, ads, and dropdowns competing for the same square inch.",
  },
  {
    type: "statCards",
    cards: [
      { label: "QUERIES / DAY", text: "20M+" },
      { label: "TO FIND AN ANSWER", text: "80s" },
      { label: "JOB TO BE DONE", text: "1" },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/heuristic-evaluation.png",
    alt: "Heuristic evaluation: where the interface fights its user",
    width: 1920,
    height: 1080,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Visual Hierarchy",
    title: "The answer — not the loudest thing on the screen.",
    description:
      "On the live site, the train's status is the smallest typographic element on the page. A grey label tucked between a 'PF 1' badge and a 'Coach Position' button, easy to miss in a glance. In the redesign, the running status is the hero of the screen. Train name, current location and on-time delta sit on a deep blue card with the largest type weight on the page — answer first, details on demand.",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/finding-visual-hierarchy.png",
    alt: "Before: status hidden behind badges and buttons",
    width: 798,
    height: 617,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Information Architecture",
    title: "Navigation works, Prioritization doesn't",
    description:
      "Every NTES feature is reachable, but nothing is ranked. Spot Your Train, Live Station, Schedule, Trains B/W Stations and six other links all share the same visual weight in a sidebar that never collapses. I rebuilt the home around the three jobs that account for ~85% of traffic — PNR, Find Trains, Live Tracking — and pushed the rest into a quiet menu. Recent searches and saved trains pick up the rest.",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/finding-navigation-priority.png",
    alt: "Before: 10 menu items, equal weight, all the time",
    width: 871,
    height: 533,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Accessibility",
    title: "Passes the scan, Fails the person",
    description:
      "NTES has an accessibility scan that returns an “excellent” score. I've also evaluated it against the whole product. There are 3.4 million users accessing this without full vision. That gap between “passes the scan” and “actually works for the person using it” is exactly where design responsibility lives. Touch targets across Coach Position fall below the 48x48dp minimum. Form labels across Train Between Stations are absent. The platform dropdown defaults to 'All' with no indication of where that sits in any hierarchy. It is fine, if you already know the system, disorienting if it's your first time. None of these are difficult fixes, all of them have real consequences. The redesign uses 16px body type as a floor, status pills with both a color and a word, a single keyboard-first search field, and a 4.5:1 contrast minimum across every surface.",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/finding-accessibility.png",
    alt: "Before: color-only status, sub-12px labels, dense rows",
    width: 846,
    height: 651,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Trust",
    title: "A public utility carrying display ads.",
    description:
      "This was the most surprising finding, and honestly the most revealing. NTES - a public transport utility runs third-party display ads directly inside the interface, next to content users are actively trying to navigate. Ads interrupt the task, create false affordances, and add cognitive load that users didn't sign up for. For a platform of this scale, it's an odd choice. More importantly, it's a UX choice.",
  },
  {
    type: "image",
    src: "/assets/work/ntes-train-tracking-app/finding-display-ads.png",
    alt: "Current view: display ad inside an active tracking flow",
    width: 893,
    height: 535,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Future Impact",
    title: "For 20 million people, small changes compound.",
    description:
      "Promoting the running status, ranking the navigation around real jobs, fixing accessibility at the source and removing third-party ads doesn't sound revolutionary. But on a platform that ships answers to twenty million people a day, every saved tap, every readable label, every honest pixel is infrastructure. That's the bet of this case study — that public software deserves the same craft we reserve for products we'd build for ourselves.",
  },
  {
    type: "statCards",
    cards: [
      { label: "PRIMARY NAV ITEMS", text: "-6" },
      { label: "ANSWER ABOVE THE FOLD", text: "+1" },
      { label: "CONTRAST ACROSS SURFACES", text: "AA" },
      { label: "THIRD PARTY ADS IN CRITICAL PATH", text: "0" },
    ],
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
