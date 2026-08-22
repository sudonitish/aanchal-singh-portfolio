import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BentoCard from "@/components/contact/BentoCard";
import { bentoCards, contactPage } from "@/data/content/contact/data";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.intro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const row1 = bentoCards.filter((card) => card.row === 1);
  const row2 = bentoCards.filter((card) => card.row === 2);

  return (
    <Container className="flex flex-col gap-16 py-10 sm:gap-20 sm:py-16">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-wide text-accent-strong uppercase">
          {contactPage.eyebrow}
        </span>
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
          {contactPage.heading}
        </h1>
        <p className="max-w-2xl text-lg text-body">{contactPage.intro}</p>
      </div>

      <div className="flex flex-col gap-5 rounded-card border border-[#E9E9E9] p-4 sm:p-8">
        <div className="flex flex-wrap gap-5">
          {row1.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {row2.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Container>
  );
}
