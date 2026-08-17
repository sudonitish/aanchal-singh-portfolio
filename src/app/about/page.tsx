import type { Metadata } from "next";
import BlockRenderer from "@/components/work/BlockRenderer";
import { aboutPage, aboutContent } from "@/data/content/about/data";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <span className="text-sm font-semibold tracking-wide text-accent-strong uppercase">
        {aboutPage.eyebrow}
      </span>
      <p className="mt-3 max-w-2xl text-2xl leading-relaxed text-ink">
        {aboutPage.intro}
      </p>

      <div className="mt-16">
        <BlockRenderer blocks={aboutContent} />
      </div>
    </section>
  );
}
