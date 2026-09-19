import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { designPrinciples, designPrinciplesHeading } from "@/data/content/about/data";
import { aboutAssets } from "@/data/config/assets";

const CARD_IMAGES = [
  aboutAssets.designCardQuestions,
  aboutAssets.designCardSimplify,
  aboutAssets.designCardFlow,
  aboutAssets.designCardIntent,
  aboutAssets.designCardEffortless,
] as const;

export default function HowIDesign() {
  const [questions, simplify, flow, intent, effortless] = designPrinciples.items;

  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={designPrinciplesHeading.eyebrow ?? ""} />

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
        <h2 className="max-w-[420px] text-[36px] leading-[44px] font-bold text-surface-dark sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[61px]">
          {designPrinciplesHeading.title}
        </h2>
        <p className="max-w-[463px] text-[14px] leading-[25px] text-muted">
          {designPrinciplesHeading.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <DesignCard src={CARD_IMAGES[0]} alt={questions.title} aspect="462/387" className="flex-1" />
        <DesignCard src={CARD_IMAGES[1]} alt={simplify.title} aspect="462/387" className="flex-1" />
        <DesignCard src={CARD_IMAGES[2]} alt={flow.title} aspect="462/387" className="flex-1" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <DesignCard src={CARD_IMAGES[3]} alt={intent.title} aspect="824/387" className="sm:flex-[1.41]" />
        <DesignCard src={CARD_IMAGES[4]} alt={effortless.title} aspect="584/387" className="sm:flex-1" />
      </div>
    </section>
  );
}

function DesignCard({
  src,
  alt,
  aspect,
  className = "",
}: {
  src: string;
  alt: string;
  aspect: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-card ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </div>
  );
}
