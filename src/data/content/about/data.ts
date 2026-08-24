import type { HeadingBlock, ListBlock } from "@/lib/content";
import { personalInfo } from "@/data/content/profile/data";
import { aboutAssets } from "@/data/config/assets";

export const aboutPage = {
  eyebrow: "About Me",
  introPrefix: "I'm ",
  introName: "Aanchal Singh",
  introRest:
    " - a UX/UI designer who enjoys turning complexity into calm and confusion into flow. I believe good design shouldn't demand attention; it should quietly earn trust. I approach problems with patience, structure, and a sharp eye for detail, the kind that notices when something feels almost right, and keeps going until it truly is.",
};

export const designPrinciplesHeading: HeadingBlock = {
  type: "heading",
  eyebrow: "How I Design",
  title: "Slowly. Thoughtfully. With intent.",
  description:
    "I design the way I explore new places. I care deeply about flow, clarity, and the small decisions that shape how an experience is felt - because hesitation is usually a design problem waiting to be solved.",
};

export const designPrinciples: ListBlock = {
  type: "list",
  items: [
    {
      title: "Questions before visuals",
      text: "I start with curiosity to uncover the right problem before jumping to solutions.",
    },
    {
      title: "Simplify before adding",
      text: "I remove the unnecessary so what's essential can truly stand out.",
    },
    {
      title: "Flow over friction",
      text: "I design experiences that feel intuitive, guiding people forward with clarity and ease.",
    },
    {
      title: "Intent in every detail",
      text: "I start with curiosity to uncover the right problem before jumping to solutions.",
    },
    {
      title: "Effortless is earned",
      text: "Great designs look effortless because they're built on thoughtful decisions and iterations.",
    },
  ],
};

export const moreAboutMeHeading: HeadingBlock = {
  type: "heading",
  eyebrow: "A Little More About Me",
  title: "Bold yet warm. Shaped by curiosity.",
  description:
    "Driven by curiosity and intention, I balance my time in Figma with chasing sunsets, exploring historic architecture, dancing, and painting. Whether designing products or capturing life outdoors, I bring a bold, thoughtful presence to everything I create.",
};

export interface MoreAboutMeItem {
  index: string;
  category: string;
  heading: string;
  body: string;
}

export const moreAboutMe: MoreAboutMeItem[] = [
  {
    index: "01",
    category: "Architecture",
    heading: "I love exploring historically rich places.",
    body: "The symmetry, the craftsmanship, the stories layered into stone. That appreciation for structure and intention finds its way into every design I make.",
  },
  {
    index: "02",
    category: "Art",
    heading: "I paint sometimes — and I'm told I'm quietly good at it.",
    body: "Creating, for me, isn't limited to screens. It's about observing, experimenting, and letting curiosity lead wherever it goes.",
  },
  {
    index: "03",
    category: "Method",
    heading: "Curiosity isn't a trait. It's the method.",
    body: "I'm driven by questions more than answers. Every project starts with genuine interest in the people I'm designing for — not just the brief.",
  },
];

export const expectationsHeading: HeadingBlock = {
  type: "heading",
  eyebrow: "What you can expect from working with me",
  title: "",
};

export interface ExpectationItem {
  index: string;
  category: string;
  heading: string;
  body: string;
}

export const expectations: ExpectationItem[] = [
  {
    index: "01",
    category: "Care",
    heading: "Users matter as much as outcomes.",
    body: "I never lose sight of who I'm designing for - even under deadlines and shifting briefs.",
  },
  {
    index: "02",
    category: "Attention",
    heading: "I notice what others walk past.",
    body: "The micro-copy, the loading state, the edge case. Details aren't extra - they're the product.",
  },
  {
    index: "03",
    category: "Intention",
    heading: "Empathy + structure + intention - every screen.",
    body: "Not just the hero flows. Every state, every moment of interaction gets all three.",
  },
  {
    index: "04",
    category: "Simplicity",
    heading: "If users have to think twice, I go back.",
    body: "I aim for experiences that feel intuitive, grounded, and easy — so users don't have to think twice.",
  },
];

export const toolsLabel = "Tools";

export interface ToolTile {
  name: string;
  icon: string;
}

export const tools: ToolTile[] = [
  { name: "Figma", icon: aboutAssets.toolFigma },
  { name: "Claude", icon: aboutAssets.toolClaude },
  { name: "ChatGPT", icon: aboutAssets.toolChatgpt },
  { name: "Framer", icon: aboutAssets.toolFramer },
];

export interface HeadingFragment {
  text: string;
  variant?: "accent" | "muted-italic";
}

export const closingCta = {
  eyebrow: "If you're still here —",
  headingFragments: [
    { text: "You probably value " },
    { text: "clarity", variant: "accent" },
    { text: ". Or good " },
    { text: "design", variant: "accent" },
    { text: ". Or details that " },
    { text: "don't shout.", variant: "muted-italic" },
  ] as HeadingFragment[],
  subtext:
    "Then we'll probably get along well. I design for the people who notice — and for the ones who don't, but feel it anyway.",
  primary: { label: "Let's work together", href: "/contact" },
  secondary: {
    label: "or just say hi :)",
    href:
      personalInfo.contact.find((c) => c.type === "email")?.href ?? "/contact",
  },
};
