import Image from "next/image";
import { clientLogos } from "@/data/content/home/work-experience";
import { homePage } from "@/data/content/home/data";

export default function WorkExperience() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-5 py-10 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[256px]">
      <p className="text-[11px] leading-[26px] font-bold text-black/60">
        {homePage.workExperienceLabel}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7">
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
