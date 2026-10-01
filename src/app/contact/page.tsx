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
      <div className="px-5 pt-8 sm:pt-[38px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-16">
        <Nav />
      </div>
      <div className="mx-auto flex w-full max-w-[1142px] flex-col gap-16 px-5 pt-10 sm:gap-20 sm:pt-16">
        <h1 className="sr-only">{contactPage.heading}</h1>

        <div className="flex flex-col gap-5 rounded-card border border-[#E9E9E9] p-4 min-[640px]:gap-4 sm:p-[26px]">
          {[row1, row2].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 gap-5 min-[640px]:gap-4 min-[640px]:[aspect-ratio:var(--row-ratio)] min-[640px]:[grid-template-columns:var(--row-cols)]"
              style={
                {
                  "--row-cols": row.map((c) => `${c.width}fr`).join(" "),
                  "--row-ratio": `${row.reduce((sum, c) => sum + c.width, 0) + (row.length - 1) * 16} / ${row[0].height}`,
                } as React.CSSProperties
              }
            >
              {row.map((card, i) => (
                <BentoCard key={card.id} card={card} spanFull={i === row.length - 1 && row.length % 2 === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
