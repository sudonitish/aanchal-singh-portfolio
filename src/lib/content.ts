import type {
  CaseStudyIconName,
  PainPointIconName,
  PlatformIconName,
} from "@/components/work/CaseStudyIcons";

export interface HeadingBlock {
  type: "heading";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  descriptionLead?: string;
  /** Fading separator line between the title and the description. */
  lineBelowTitle?: boolean;
  tightSpacingAfter?: boolean;
  noSpacingAfter?: boolean;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface StatCard {
  label: string;
  text: string;
  icon?: CaseStudyIconName;
}

export interface StatCardsBlock {
  type: "statCards";
  cards: StatCard[];
}

export interface QuoteBlock {
  type: "quote";
  quotes: string[];
}

export interface ListItem {
  index?: string;
  title: string;
  text: string;
  icon?: CaseStudyIconName;
  painPointIcon?: PainPointIconName;
  platform?: PlatformIconName;
  strengths?: string[];
  weaknesses?: string[];
  features?: string[];
  lines?: string[];
}

export interface ListBlock {
  type: "list";
  variant?:
    | "chips"
    | "logoCards"
    | "painPointCards"
    | "iconCards"
    | "plainCards"
    | "taskCards";
  items: ListItem[];
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  label?: string;
  /** Gap between label and image in px. Defaults to 16. */
  labelGap?: number;
  /** Max width of the image in px; centered when set. */
  maxWidth?: number;
  width: number;
  height: number;
  background?: string;
  paddingX?: number;
  paddingY?: number;
  fullBleed?: boolean;
  rounded?: boolean;
  noGapAfter?: boolean;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface ImageGridBlock {
  type: "imageGrid";
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface ImageStackBlock {
  type: "imageStack";
  background?: string;
  gap?: number;
  fullBleed?: boolean;
  paddingX?: number;
  paddingY?: number;
  noGapAfter?: boolean;
  spacingAfter?: number;
  spacingAfterMobile?: number;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    widthPercent?: number;
  }[];
}

export interface PlaceholderBlock {
  type: "placeholder";
  label?: string;
}

export interface ThankYouBlock {
  type: "thankYou";
  text: string;
  accentColor?: string;
}

export interface CardGroupBlock {
  type: "cardGroup";
  blocks: Block[];
}

export interface DividerBlock {
  type: "divider";
  withDot?: boolean;
  dotColor?: string;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface ResearchHeaderBlock {
  type: "researchHeader";
  title: string;
  stat: string;
  sectionLabel: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Cards shown in a 2-column grid; the hover image fades in on hover. */
  cards?: {
    src: string;
    hoverSrc: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export interface ReflectionHeaderBlock {
  type: "reflectionHeader";
  eyebrow: string;
  title: string;
  stat: string;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface ProblemSolutionBlock {
  type: "problemSolution";
  problem: {
    title: string;
    description: string;
    points: { label: string; text: string }[];
  };
  solution: {
    title: string;
    description: string;
    note?: string;
  };
}

export interface BriefHeaderBlock {
  type: "briefHeader";
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  description: string | string[];
  layout?: "split" | "stacked";
  descriptionLead?: string;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface SplitListBlock {
  type: "splitList";
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  description?: string | string[];
  items: { label: string; text: string }[];
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export interface LeadListBlock {
  type: "leadList";
  title: string;
  lead?: string;
  items: { label: string; text: string }[];
}

export interface InterviewFindingsBlock {
  type: "interviewFindings";
  eyebrow?: string;
  heading: string;
  description: string;
  findings: { pill: string; title: string; description: string }[];
  accentColor?: string;
  spacingAfter?: number;
  spacingAfterMobile?: number;
}

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | StatCardsBlock
  | QuoteBlock
  | ListBlock
  | ImageBlock
  | PlaceholderBlock
  | ThankYouBlock
  | CardGroupBlock
  | DividerBlock
  | InterviewFindingsBlock
  | ProblemSolutionBlock
  | ResearchHeaderBlock
  | ReflectionHeaderBlock
  | BriefHeaderBlock
  | ImageGridBlock
  | ImageStackBlock
  | SplitListBlock
  | LeadListBlock;
