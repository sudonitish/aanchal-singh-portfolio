export interface HeadingBlock {
  type: "heading";
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface StatCard {
  label: string;
  text: string;
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
}

export interface ListBlock {
  type: "list";
  items: ListItem[];
}

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | StatCardsBlock
  | QuoteBlock
  | ListBlock;
