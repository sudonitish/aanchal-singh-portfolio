import SectionHeading from "@/components/ui/SectionHeading";
import { expectations, expectationsHeading } from "@/data/content/about/data";

export default function Expectations() {
  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={expectationsHeading.eyebrow ?? ""} />

      <div className="relative py-10">
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 text-[220px] font-extrabold tracking-tight text-[#F5F1FD] select-none sm:block lg:text-[300px]"
        >
          DESIGN
        </span>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DBDBDB] bg-white p-[30px]"
              style={{ minHeight: 290 }}
            >
              <span
                aria-hidden
                className="absolute top-0 right-[18px] text-[60px] leading-[95px] font-normal tracking-tight text-black/[0.07]"
              >
                {item.index}
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold tracking-[2px] text-black/30 uppercase">
                  {item.title}
                </span>
              </div>
              <p className="text-[14px] leading-[21px] text-body">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
