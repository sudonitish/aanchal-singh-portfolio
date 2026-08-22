import type { HeadingBlock, ListBlock } from "@/lib/content";
import { personalInfo } from "@/data/content/profile/data";

export const aboutPage = {
  eyebrow: "About Me",
  intro: personalInfo.bio,
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
    "Driven by curiosity and intention, I balance my time in Figma with chasing sunsets, exploring historic architecture, dancing, and painting. Whether designing products or capturing life outdoors, I bring the same eye for detail.",
};

export const moreAboutMe: ListBlock = {
  type: "list",
  items: [
    {
      index: "01",
      title: "Architecture",
      text: "I love exploring historically rich places. The symmetry, the craftsmanship, the stories layered into every structure - it never stops teaching me something about design.",
    },
    {
      index: "02",
      title: "Art",
      text: "I paint sometimes - and I'm told I'm quietly good at it. Creating, for me, isn't limited to screens. It's a way of seeing.",
    },
    {
      index: "03",
      title: "Method",
      text: "Curiosity isn't a trait. It's the method. I'm driven by questions more than answers. Every project starts with why.",
    },
  ],
};

export const expectationsHeading: HeadingBlock = {
  type: "heading",
  eyebrow: "What you can expect from working with me",
  title: "",
};

export const expectations: ListBlock = {
  type: "list",
  items: [
    {
      index: "01",
      title: "Care",
      text: "I never lose sight of who I'm designing for - even under deadlines and shifting briefs.",
    },
    {
      index: "02",
      title: "Attention",
      text: "The micro-copy, the loading state, the edge case. Details aren't extra - they're the product.",
    },
    {
      index: "03",
      title: "Intention",
      text: "Empathy + structure + intention - every screen. Not just the hero flows.",
    },
    {
      index: "04",
      title: "Simplicity",
      text: "If users have to think twice, I go back. I aim for experiences that feel intuitive and grounded.",
    },
  ],
};

export const toolsLabel = "Tools";

export interface ToolTile {
  name: string;
  initials: string;
  bg: string;
  fg: string;
}

export const tools: ToolTile[] = [
  { name: "Figma", initials: "Fi", bg: "#000000", fg: "#FFFFFF" },
  { name: "Claude", initials: "C", bg: "#D77655", fg: "#FCF2EE" },
  { name: "ChatGPT", initials: "Ai", bg: "#0EA282", fg: "#FFFFFF" },
  { name: "Sketch", initials: "Sk", bg: "#000000", fg: "#FFFFFF" },
];

export const closingCta = {
  eyebrow: "If you're still here —",
  heading: "You probably value clarity. Or good design. Or details that matter.",
  subtext:
    "Then we'll probably get along well. I design for people who care about how things feel, not just how they look.",
  primary: { label: "Let's work together", href: "/contact" },
  secondary: {
    label: "or just say hi :)",
    href:
      personalInfo.contact.find((c) => c.type === "email")?.href ?? "/contact",
  },
};
