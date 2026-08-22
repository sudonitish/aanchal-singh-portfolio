import SectionHeading from "@/components/ui/SectionHeading";
import {
  designPrinciples,
  designPrinciplesHeading,
} from "@/data/content/about/data";

const CARD_STYLES = [
  { bg: "bg-about-purple", title: "text-about-purple-ink", body: "text-about-purple-body" },
  { bg: "bg-about-navy", title: "text-about-navy-ink", body: "text-about-navy-body" },
  { bg: "bg-about-peach", title: "text-about-peach-ink", body: "text-about-peach-body" },
  { bg: "bg-about-forest", title: "text-about-forest-ink", body: "text-about-forest-body" },
] as const;

export default function HowIDesign() {
  const [purple, navy, peach, forest] = designPrinciples.items;

  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={designPrinciplesHeading.eyebrow ?? ""} />

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-[80px]">
        <h2 className="max-w-[420px] text-[36px] leading-[44px] font-bold text-ink sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[76px]">
          {designPrinciplesHeading.title}
        </h2>
        <p className="max-w-[463px] text-[14px] leading-[25px] text-body">
          {designPrinciplesHeading.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <BentoCard item={purple} style={CARD_STYLES[0]} />
        <BentoCard item={navy} style={CARD_STYLES[1]} />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <BentoCard item={peach} style={CARD_STYLES[2]} className="sm:flex-[1.4]" />
        <BentoCard item={forest} style={CARD_STYLES[3]} className="sm:flex-1" />
      </div>
    </section>
  );
}

function BentoCard({
  item,
  style,
  className = "",
}: {
  item: { title: string; text: string };
  style: { bg: string; title: string; body: string };
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] flex-1 flex-col gap-3 rounded-card p-8 ${style.bg} ${className}`}
    >
      <h3 className={`text-[22px] leading-[120%] font-semibold sm:text-[26px] ${style.title}`}>
        {item.title}
      </h3>
      <p className={`max-w-[280px] text-[13px] leading-[18px] font-light ${style.body}`}>
        {item.text}
      </p>
    </div>
  );
}
