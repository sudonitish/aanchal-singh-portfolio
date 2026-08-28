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
  flex: number;
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
    flex: 1.6,
    icon: contactAssets.iconLinkedin,
    iconSize: 50,
    variant: "arrow",
    hover: { text: "Let's Connect" },
  },
  {
    id: "phone",
    href: phone.href,
    bg: "bg-[#FFD75A]",
    row: 1,
    flex: 1,
    icon: contactAssets.iconPhone,
    iconSize: 50,
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
    flex: 1.4,
    icon: contactAssets.iconEmail,
    iconSize: 50,
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
    flex: 1,
    icon: contactAssets.iconVisuals,
    iconSize: 50,
    variant: "label",
    primary: "Take a look",
    hover: {
      icon: contactAssets.iconVisualsHovered,
      hoverIconSize: 122,
      invertBg: "bg-white",
    },
  },
  {
    id: "work",
    href: "/work",
    bg: "bg-[#0057FF]",
    row: 2,
    flex: 1,
    icon: contactAssets.iconWork,
    iconSize: 50,
    variant: "label",
    hover: {
      icon: contactAssets.iconWorkHovered,
      hoverIconSize: 186,
      invertBg: "bg-white",
    },
  },
  {
    id: "resume",
    href: resume.href,
    bg: "bg-[#D3FFF9]",
    row: 2,
    flex: 1.5,
    icon: contactAssets.iconResume,
    iconSize: 122,
    variant: "dual",
    chipBg: "bg-[#004A40]",
    primary: "Download Resume",
    secondary: "Download Now",
  },
];
