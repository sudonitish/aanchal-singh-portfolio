export interface NavLink {
  href: string;
  label: string;
  enabled: boolean;
}

export const navLinks: NavLink[] = [
  { href: "/work", label: "Work", enabled: true },
  { href: "/about", label: "About", enabled: true },
  { href: "/visuals", label: "Visuals", enabled: true },
  { href: "/contact", label: "Contact", enabled: true },
];

export const footerLinks: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy", enabled: true },
];
