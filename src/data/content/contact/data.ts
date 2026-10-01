import { personalInfo } from "@/data/content/profile/data";
import { contactAssets } from "@/data/config/assets";

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
  row: 1 | 2;
  width: number;
  height: number;
  icon: string;
  iconSize: number;
  variant: "arrow" | "chip" | "label" | "dual";
  chipBg?: string;
  chipTextClass?: string;
  primary?: string;
  secondary?: string;
  hover?: {
    text?: string;
    icon?: string;
    hoverIconSize?: number;
    invertBg?: string;
  };
}

const email = personalInfo.contact.find((c) => c.type === "email")!;
const phone = personalInfo.contact.find((c) => c.type === "phone")!;
const linkedin = personalInfo.contact.find((c) => c.type === "linkedin")!;
const resume = personalInfo.contact.find((c) => c.type === "resume")!;

export const bentoCards: BentoCard[] = [
  {
    id: "linkedin",
    href: linkedin.href,
    bg: "bg-[#BAD5E3]",
    row: 1,
    width: 530,
    height: 331,
    icon: contactAssets.iconLinkedin,
    iconSize: 40,
    variant: "arrow",
    hover: { text: "Let's Connect" },
  },
  {
    id: "phone",
    href: phone.href,
    bg: "bg-[#FFD75A]",
    row: 1,
    width: 330,
    height: 331,
    icon: contactAssets.iconPhone,
    iconSize: 40,
    variant: "chip",
    chipBg: "bg-[#FFE38C]",
    chipTextClass: "text-[#947000]",
    primary: phone.value,
  },
  {
    id: "email",
    href: email.href,
    bg: "bg-[#F6F6F6]",
    row: 1,
    width: 464,
    height: 331,
    icon: contactAssets.iconEmail,
    iconSize: 40,
    variant: "chip",
    chipBg: "bg-[#FFD3CF]",
    chipTextClass: "text-black",
    primary: email.value,
  },
  {
    id: "visuals",
    href: "/visuals",
    bg: "bg-black",
    row: 2,
    width: 375,
    height: 415,
    icon: contactAssets.iconVisuals,
    iconSize: 40,
    variant: "label",
    primary: "Take a look",
    hover: {
      hoverIconSize: 98,
      invertBg: "bg-white",
    },
  },
  {
    id: "work",
    href: "/#work",
    bg: "bg-[#0057FF]",
    row: 2,
    width: 375,
    height: 415,
    icon: contactAssets.iconWork,
    iconSize: 40,
    variant: "label",
  },
  {
    id: "resume",
    href: resume.href,
    bg: "bg-[#D3FFF9]",
    row: 2,
    width: 574,
    height: 415,
    icon: contactAssets.iconResume,
    iconSize: 98,
    variant: "dual",
    chipBg: "bg-[#004A40]",
    primary: "Download Resume",
    secondary: "Download Now",
  },
];
