import { SITE_URL } from "@/data/config/constants";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const withHome: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
