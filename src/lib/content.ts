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
  width: number;
  height: number;
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
}

export interface ReflectionHeaderBlock {
  type: "reflectionHeader";
  eyebrow: string;
  title: string;
  stat: string;
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

export interface InterviewFindingsBlock {
  type: "interviewFindings";
  eyebrow?: string;
  heading: string;
  description: string;
  findings: { pill: string; title: string; description: string }[];
  accentColor?: string;
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
  | ReflectionHeaderBlock;
