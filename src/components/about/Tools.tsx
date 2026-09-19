import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { toolsLabel, tools } from "@/data/content/about/data";

export default function Tools() {
  return (
    <section className="flex flex-col gap-[30px]">
      <SectionHeading label={toolsLabel} />

      <div className="flex flex-wrap items-center gap-6 sm:gap-7">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="h-[99px] w-[99px] flex-none overflow-hidden rounded-[20px]"
            title={tool.name}
          >
            <Image src={tool.icon} alt={tool.name} width={99} height={99} />
          </div>
        ))}
      </div>
    </section>
  );
}
