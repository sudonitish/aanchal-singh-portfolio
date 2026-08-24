import SectionHeading from "@/components/ui/SectionHeading";
import { expectations, expectationsHeading } from "@/data/content/about/data";

export default function Expectations() {
  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={expectationsHeading.eyebrow ?? ""} />

      <div className="relative py-10">
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 text-[220px] font-extrabold text-[#F5F1FD] select-none sm:block lg:text-[300px]"
          style={{ letterSpacing: "-4.69%" }}
        >
          DESIGN
        </span>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => (
            <div
              key={item.category}
              className="relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-[#DBDBDB] bg-white p-[30px]"
              style={{ minHeight: 290 }}
            >
              <span
                aria-hidden
                className="absolute top-0 right-[18px] text-[60px] leading-[95px] font-normal tracking-tight text-black/[0.07]"
              >
                {item.index}
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold tracking-[2px] text-black/[0.28] uppercase">
                  {item.category}
                </span>
                <p className="text-[18px] leading-[23px] font-bold tracking-[-0.02em] text-surface-dark">
                  {item.heading}
                </p>
              </div>
              <p className="text-[14px] leading-[21px] text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
