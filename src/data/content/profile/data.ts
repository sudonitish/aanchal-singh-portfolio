export interface ContactLink {
  type: "email" | "phone" | "linkedin" | "resume";
  label: string;
  value: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  subtext: string;
  bio: string;
  resumeHref: string;
  contact: ContactLink[];
}

export const personalInfo: PersonalInfo = {
  name: "Aanchal Singh",
  role: "UX/UI Designer",
  tagline: "Creator. Dancer. explorer.",
  headline: "Hey! I’m Aanchal Singh - a creator removing confusion \nfor a living.",
  subtext:
    "Currently serving a UX/UI designer turning complexity into calm, usable experiences. I obsess over flow, clarity, and interfaces that just work - so users don't have to think twice.",
  bio: "I'm Aanchal Singh - a UX/UI designer who enjoys turning complexity into calm and confusion into flow. I believe good design shouldn't demand attention; it should quietly earn trust.",
  resumeHref: "/resume.pdf",
  contact: [
    {
      type: "email",
      label: "Email",
      value: "aanchalsinghui.ux@gmail.com",
      href: "mailto:aanchalsinghui.ux@gmail.com",
    },
    {
      type: "phone",
      label: "Phone",
      value: "6376478771",
      href: "tel:+916376478771",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Aanchal Singh",
      href: "https://www.linkedin.com/in/aanchalsingh",
    },
    {
      type: "resume",
      label: "Resume",
      value: "Download Resume",
      href: "/resume.pdf",
    },
  ],
};
