import SectionHeading from "@/components/ui/SectionHeading";
import { toolsLabel, tools } from "@/data/content/about/data";

export default function Tools() {
  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={toolsLabel} />

      <div className="flex flex-wrap items-center gap-6 sm:gap-[35px]">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex h-[99px] w-[99px] flex-none items-center justify-center rounded-[20px] border border-[#EAEAEA]"
            style={{ background: tool.bg }}
            title={tool.name}
          >
            <span
              className="text-[18px] font-bold"
              style={{ color: tool.fg }}
            >
              {tool.initials}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
