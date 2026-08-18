import Image from "next/image";
import { clientLogos } from "@/data/content/home/work-experience";
import { homePage } from "@/data/content/home/data";

export default function WorkExperience() {
  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-center gap-5 py-10">
      <p className="text-[14px] leading-8 font-bold text-black/60">
        {homePage.workExperienceLabel}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[44.3px]">
        {clientLogos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            style={{ opacity: logo.opacity, height: `${logo.height}px`, width: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
