import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
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
    <>
      <div className="px-5 pt-6 sm:pt-8 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-10">
        <Nav />
      </div>
      <div className="flex flex-col gap-16 px-5 py-10 sm:gap-20 sm:py-16 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[197px]">
        <h1 className="sr-only">{contactPage.heading}</h1>

        <div className="flex flex-col gap-5 rounded-card border border-[#E9E9E9] p-4 sm:p-8">
          <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-row">
            {row1.map((card, i) => (
              <BentoCard key={card.id} card={card} spanFull={i === row1.length - 1 && row1.length % 2 === 1} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-row">
            {row2.map((card, i) => (
              <BentoCard key={card.id} card={card} spanFull={i === row2.length - 1 && row2.length % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
