import type { Block } from "@/lib/content";
import { personalInfo } from "@/data/content/profile/data";

export const aboutPage = {
  eyebrow: "About Me",
  intro: personalInfo.bio,
};

export const aboutContent: Block[] = [
  {
    type: "heading",
    eyebrow: "How I Design",
    title: "Slowly. Thoughtfully. With intent.",
    description:
      "I design the way I explore new places. I care deeply about flow, clarity, and the small decisions that shape how an experience is felt - because hesitation is usually a design problem waiting to be solved.",
  },
  {
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
  },
  {
    type: "heading",
    eyebrow: "A Little More About Me",
    title: "Bold yet warm. Shaped by curiosity.",
    description:
      "Driven by curiosity and intention, I balance my time in Figma with chasing sunsets, exploring historic architecture, dancing, and painting. Whether designing products or capturing life outdoors, I bring the same eye for detail.",
  },
  {
    type: "list",
    items: [
      { index: "01", title: "Architecture", text: "Finding structure and story in built spaces." },
      { index: "02", title: "Art", text: "Painting as a way to slow down and observe." },
      { index: "03", title: "Method", text: "Dance and movement as discipline and release." },
    ],
  },
  {
    type: "heading",
    title: "What you can expect from working with me",
  },
  {
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
  },
];
