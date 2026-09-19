import SectionHeading from "@/components/ui/SectionHeading";
import { expectations, expectationsHeading } from "@/data/content/about/data";

export default function Expectations() {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeading label={expectationsHeading.eyebrow ?? ""} />

      <div className="group relative py-10">
        <svg
          aria-hidden
          viewBox="0 0 1000 280"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-0 aspect-[1000/280] w-full select-none"
        >
          <text
            x="0"
            y="230"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="260"
            fontWeight="800"
            className="fill-[#F5F1FD] transition-colors duration-300 group-hover:fill-[#FDF6E3]"
          >
            DESIGN
          </text>
        </svg>

        <div className="relative grid gap-[13px] pt-16 sm:grid-cols-2 sm:pt-[90px] lg:grid-cols-4 lg:pt-[115px]">
          {expectations.map((item) => (
            <div
              key={item.category}
              className="relative overflow-hidden rounded-[14px] border border-[#DBDBDB] bg-white transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#F5F1FD] hover:shadow-xl"
              style={{ minHeight: 290 }}
            >
              <span
                aria-hidden
                className="absolute top-0 right-[18px] text-[48px] leading-[76px] font-normal tracking-[-5.675px] text-black/[0.07]"
              >
                {item.index}
              </span>
              <span className="absolute top-[48px] left-[30px] text-[8px] font-semibold tracking-[2px] text-black/[0.28] uppercase">
                {item.category}
              </span>
              <p className="absolute top-[83px] left-[30px] w-[175px] text-[14px] leading-[18px] font-bold tracking-[-0.312px] text-surface-dark">
                {item.heading}
              </p>
              <p className="absolute top-[178px] left-[30px] max-w-[calc(100%-60px)] text-[11px] leading-[17px] text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
