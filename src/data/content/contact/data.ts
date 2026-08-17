import { personalInfo } from "@/data/content/profile/data";

export interface BentoCard {
  id: string;
  label: string;
  href: string;
  bg: string;
  textClass: string;
  span?: "sm" | "md" | "lg";
}

const email = personalInfo.contact.find((c) => c.type === "email")!;
const phone = personalInfo.contact.find((c) => c.type === "phone")!;
const linkedin = personalInfo.contact.find((c) => c.type === "linkedin")!;
const resume = personalInfo.contact.find((c) => c.type === "resume")!;

export const bentoCards: BentoCard[] = [
  {
    id: "linkedin",
    label: linkedin.label,
    href: linkedin.href,
    bg: "bg-bento-blue",
    textClass: "text-ink",
    span: "md",
  },
  {
    id: "phone",
    label: phone.value,
    href: phone.href,
    bg: "bg-bento-yellow",
    textClass: "text-[#947000]",
    span: "sm",
  },
  {
    id: "email",
    label: email.value,
    href: email.href,
    bg: "bg-surface-4",
    textClass: "text-ink",
    span: "lg",
  },
  {
    id: "visuals",
    label: "Take a look",
    href: "/visuals",
    bg: "bg-bento-black",
    textClass: "text-white",
    span: "sm",
  },
  {
    id: "work",
    label: "See my work",
    href: "/work",
    bg: "bg-bento-cobalt",
    textClass: "text-white",
    span: "sm",
  },
  {
    id: "resume",
    label: resume.label,
    href: resume.href,
    bg: "bg-bento-mint",
    textClass: "text-[#004A40]",
    span: "lg",
  },
];
