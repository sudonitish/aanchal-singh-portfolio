import type { Metadata } from "next";
import BentoCard from "@/components/contact/BentoCard";
import { bentoCards } from "@/data/content/contact/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aanchal Singh.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-ink">Let&apos;s talk</h1>
      <p className="mt-3 max-w-2xl text-lg text-body">
        Reach out via email, phone, or LinkedIn - or take a look at recent
        work and visuals below.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 rounded-[20px] border border-[#e9e9e9] bg-surface-4 p-8">
        {bentoCards.map((card) => (
          <BentoCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
