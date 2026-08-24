import SectionHeading from "@/components/ui/SectionHeading";
import { moreAboutMe, moreAboutMeHeading } from "@/data/content/about/data";

export default function MoreAboutMe() {
  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={moreAboutMeHeading.eyebrow ?? ""} />

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-[70px]">
        <h2 className="max-w-[432px] text-[36px] leading-[44px] font-extrabold tracking-[-0.02em] text-surface-dark sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[76px]">
          {moreAboutMeHeading.title}
        </h2>
        <p className="max-w-[480px] text-[14px] leading-[25px] text-muted">
          {moreAboutMeHeading.description}
        </p>
      </div>

      <div className="flex flex-col border-t border-black/[0.08]">
        {moreAboutMe.map((item) => (
          <div
            key={item.category}
            className="flex flex-col gap-3 border-b border-black/[0.08] py-9 sm:flex-row sm:items-start sm:gap-10"
          >
            <span className="w-6 shrink-0 text-xs font-bold text-black/40">
              {item.index}
            </span>
            <span className="w-[140px] shrink-0 text-xs font-semibold tracking-[1.8px] text-black/40 uppercase">
              {item.category}
            </span>
            <div className="flex max-w-[644px] flex-col gap-3">
              <p className="text-[20px] leading-[26px] font-bold tracking-[-0.015em] text-surface-dark">
                {item.heading}
              </p>
              <p className="max-w-[480px] text-[13px] leading-[21px] text-muted">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
