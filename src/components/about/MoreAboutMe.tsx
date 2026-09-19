import SectionHeading from "@/components/ui/SectionHeading";
import { moreAboutMe, moreAboutMeHeading } from "@/data/content/about/data";

export default function MoreAboutMe() {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeading label={moreAboutMeHeading.eyebrow ?? ""} />

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-14">
        <h2 className="max-w-[432px] text-[36px] leading-[44px] font-extrabold tracking-[-0.02em] text-surface-dark sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[61px]">
          {moreAboutMeHeading.title}
        </h2>
        <p className="max-w-[480px] text-[11px] leading-5 text-muted">
          {moreAboutMeHeading.description}
        </p>
      </div>

      <div className="flex flex-col border-t border-black/[0.08]">
        {moreAboutMe.map((item) => (
          <div
            key={item.category}
            className="flex flex-col gap-2.5 border-b border-black/[0.08] px-[13px] py-[29px] -mx-[13px] transition-colors duration-200 hover:bg-about-cream/40 sm:flex-row sm:items-start sm:justify-between sm:gap-[19px]"
          >
            <span className="w-[26px] shrink-0 text-[10px] font-bold text-black/40">
              {item.index}
            </span>
            <span className="w-[140px] shrink-0 text-[10px] font-semibold tracking-[1.8px] text-black/40 uppercase">
              {item.category}
            </span>
            <div className="flex flex-col gap-2.5 sm:flex-1 lg:w-[644px] lg:flex-none">
              <p className="text-base leading-[21px] font-bold tracking-[-0.015em] text-surface-dark">
                {item.heading}
              </p>
              <p className="max-w-[480px] text-[10px] leading-[17px] text-muted">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
