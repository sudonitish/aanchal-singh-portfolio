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
  },
  {
    type: "heading",
    eyebrow: "The Spark",
    title: "What happens when an athlete needs a new badminton racket and a camping backpack — but every app only solves half the problem?",
    description:
      "Sports enthusiasts live multi-sport lives. They play badminton on Tuesday, plan a weekend trek on Wednesday, and browse running shoes on the commute home. Yet every existing platform forces them to switch apps for every need. Chase was born from a single question: what if one platform could serve your entire active lifestyle — from the court to the campsite?",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "My Design Process",
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
    type: "heading",
    eyebrow: "Research",
    title: "01 / Audience & 02 / Method",
    description:
      "Research combined competitive analysis of multi-category commerce apps with direct interviews across badminton, camping, and running communities.",
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
    type: "quote",
    quotes: [
      "From pixels to performance, I need gear that matches my hustle. Give me the facts, the fit, and the finest value, and I'll be ready to play.",
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Empathy Map",
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
    type: "heading",
    title: "User Journey Map",
    description:
      "Raj's goal: find and purchase an affordable, high-performance badminton racket and a durable camping bag without juggling multiple platforms. Mapped across Awareness, Research, Evaluation, Purchase, Delivery, and Usage — surfacing pain points like inconsistent product info, lengthy checkout, and the recurring frustration of never finding everything in one cart.",
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
      "The final designs bring together the research insights, IA decisions, and visual system into a polished, production-ready interface. The dark UI with lime-green accents creates a bold, energetic aesthetic suited to an active lifestyle brand.",
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
    type: "heading",
    title: "Style Guide",
    description:
      "Typography: Plus Jakarta Sans (headings), Inter (body). Grid: 8 columns, 16px margin, 16px gutter. Primary palette: #4F4F4F, #D8FB78, #EEF3DA. Secondary palette: #0E0E10, #DDE5C0, #F9FBF1.",
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
    type: "heading",
    title: "What this project taught me",
    description:
      "Designing for overlapping-but-distinct user needs (sport vs. adventure gear) sharpened how I think about information architecture that scales across categories without becoming generic.",
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
  },
];
