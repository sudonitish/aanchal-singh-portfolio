import { personalInfo } from "@/data/content/profile/data";

export const contactPage = {
  eyebrow: "Get In Touch",
  heading: "Let's talk",
  intro:
    "Reach out via email, phone, or LinkedIn - or take a look at recent work and visuals below.",
};

export interface BentoCard {
  id: string;
  href: string;
  bg: string;
  textClass: string;
  row: 1 | 2;
  flex: number;
  variant: "arrow" | "chip" | "label" | "dual";
  chipBg?: string;
  primary?: string;
  secondary?: string;
}

const email = personalInfo.contact.find((c) => c.type === "email")!;
const phone = personalInfo.contact.find((c) => c.type === "phone")!;
const linkedin = personalInfo.contact.find((c) => c.type === "linkedin")!;
const resume = personalInfo.contact.find((c) => c.type === "resume")!;

export const bentoCards: BentoCard[] = [
  {
    id: "linkedin",
    href: linkedin.href,
    bg: "bg-bento-blue",
    textClass: "text-ink",
    row: 1,
    flex: 1.6,
    variant: "arrow",
  },
  {
    id: "phone",
    href: phone.href,
    bg: "bg-bento-yellow",
    textClass: "text-[#947000]",
    row: 1,
    flex: 1,
    variant: "chip",
    chipBg: "bg-bento-yellow-soft",
    primary: phone.value,
  },
  {
    id: "email",
    href: email.href,
    bg: "bg-surface-4",
    textClass: "text-ink",
    row: 1,
    flex: 1.4,
    variant: "chip",
    chipBg: "bg-[#FFD3CF]",
    primary: email.value,
  },
  {
    id: "visuals",
    href: "/visuals",
    bg: "bg-bento-black",
    textClass: "text-white",
    row: 2,
    flex: 1,
    variant: "label",
    primary: "Take a look",
  },
  {
    id: "work",
    href: "/work",
    bg: "bg-bento-cobalt",
    textClass: "text-white",
    row: 2,
    flex: 1,
    variant: "label",
    primary: "See my work",
  },
  {
    id: "resume",
    href: resume.href,
    bg: "bg-bento-mint",
    textClass: "text-bento-mint-dark",
    row: 2,
    flex: 1.5,
    variant: "dual",
    chipBg: "bg-bento-mint-dark",
    primary: resume.value,
    secondary: "Download Now",
  },
];
