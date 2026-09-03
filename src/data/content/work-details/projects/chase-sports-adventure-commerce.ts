import type { Block } from "@/lib/content";

export const chaseContent: Block[] = [
  {
    type: "list",
    variant: "chips",
    items: [
      { title: "Role", text: "UX/UI Designer", icon: "user" },
      { title: "Duration", text: "3 Weeks", icon: "calendar" },
      { title: "Tools", text: "Figma", icon: "wrench" },
    ],
  },
  {
    type: "divider",
    withDot: true,
    dotColor: "#000000",
  },
  {
    type: "heading",
    title: "The Spark",
    description:
      "What happens when an athlete needs a new badminton racket and a camping backpack — but every app only solves half the problem?\n\nSports enthusiasts live multi-sport lives. They play badminton on Tuesday, plan a weekend trek on Wednesday, and browse running shoes on the commute home. Yet every existing platform forces them to silo these needs across multiple apps, multiple carts, and multiple checkout flows.\n\nChase was born from a single question: What if one platform could serve your entire active lifestyle — from the court to the campsite?",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/problem-solution-reference.png",
    alt: "The Problem and The Solution",
    width: 1429,
    height: 744,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/design-process-diagram.png",
    alt: "Design process: Empathize, Define, Ideate, Prototype, Test",
    width: 1441,
    height: 446,
  },
  {
    type: "divider",
  },
  {
    type: "researchHeader",
    title: "Research",
    stat: "5 interviews · 4 audience segments · 4 key insights",
    sectionLabel: "01 / Audience",
    image: {
      src: "/assets/work/chase-sports-adventure-commerce/audience-segments.png",
      alt: "Four audience segments: Competitive Athletes, Outdoor Adventurers, Casual Sports Fans, Weekend Warriors",
      width: 1332,
      height: 383,
    },
  },
  {
    type: "interviewFindings",
    eyebrow: "02 / Method",
    heading: "Qualitative Interviews",
    description:
      "In-depth sessions with five sports and adventure enthusiasts — exploring end-to-end buying journeys for gear. What works, what frustrates, what ultimately shapes decisions.",
    findings: [
      {
        pill: "App Fatigue",
        title: "One platform. Every sport.",
        description:
          "Most users expressed frustration switching between apps to cover sports and adventure gear needs. They wanted one platform that serves their active lifestyle holistically — on the field and off it.",
      },
      {
        pill: "Curation > Catalogues",
        title: "Recommend it. Don't just list it.",
        description:
          "Users didn't want another endless catalogue to filter through themselves. They wanted the platform to curate — surfacing the right racket or the right backpack for their sport, skill level, and budget.",
      },
      {
        pill: "Trust is Fragile",
        title: "One bad review breaks the sale.",
        description:
          "Before buying gear, users cross-checked reviews and ratings across multiple sources. A single unanswered complaint or a missing return policy was enough to send them elsewhere.",
      },
      {
        pill: "Unified Checkout",
        title: "One cart, every category.",
        description:
          "Switching carts between a badminton racket and a camping backpack — because they lived in separate apps — broke the purchase flow. Users wanted a single cart and a single checkout, no matter what they were buying.",
      },
    ],
    accentColor: "#D8FB78",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "User Persona",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/persona-raj-sharma.png",
    alt: "Persona: Raj Sharma, 26, Marketing Manager, Delhi",
    width: 842,
    height: 595,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/empathy-map.png",
    alt: "Empathy map covering what the user hears, sees, says & does, and thinks & feels",
    width: 1429,
    height: 1508,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/user-journey-map.png",
    alt: "User journey map across Awareness, Research, Evaluation, Purchase, Delivery, and Usage",
    width: 1429,
    height: 1017,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "User Flow",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/user-flow-diagram.png",
    alt: "User flow diagram for browsing, adding to cart, and checkout",
    width: 1184,
    height: 960,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Low - Mid Fidelity Wireframes",
    description: "Low-fidelity wireframes validated the core layout decisions.",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/wireframes-lofi.png",
    alt: "Low to mid fidelity wireframes for home, category, product, cart, and checkout screens",
    width: 1429,
    height: 1888,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "High Fidelity Frames",
    description:
      "The final designs bring together the research insights, IA decisions, and visual system into a polished, production-ready interface. The dark UI with lime-green accents creates a bold, energetic aesthetic that matches the brand's active lifestyle positioning — while maintaining strong contrast and readability.",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/highfi-frames.png",
    alt: "High fidelity frames for the Chase sports and adventure commerce app",
    width: 1429,
    height: 2220,
  },
  {
    type: "divider",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/style-guide.png",
    alt: "Style guide covering colors, typography, grid system, and iconography",
    width: 1429,
    height: 3042,
  },
  {
    type: "divider",
  },
  {
    type: "reflectionHeader",
    eyebrow: "03 / Reflection",
    title: "What this project taught me",
    stat: "4 reflections · 3 weeks of learning",
  },
  {
    type: "image",
    src: "/assets/work/chase-sports-adventure-commerce/retrospective-cards.png",
    alt: "Retrospective notes: unexpected research finding, design constraint, what I'd do differently, and closing thought",
    width: 1332,
    height: 568,
  },
  {
    type: "thankYou",
    text: "Thank you",
    accentColor: "#DAE1BE",
  },
];
