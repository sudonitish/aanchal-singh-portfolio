import Nav from "@/components/layout/Nav";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/content/profile/data";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-bottom px-[150px] pt-20"
      style={{ backgroundImage: "url(/hero-bg.png)", backgroundColor: "#9FE7EE" }}
    >
      <Nav />

      <div className="mt-20 flex max-w-[911px] flex-col gap-[25px]">
        <div className="flex flex-col gap-2.5">
          <p className="text-[14px] leading-[14px] tracking-[2px] text-black/60 uppercase">
            {personalInfo.tagline}
          </p>
          <h1 className="font-display text-[60px] leading-[70px] font-semibold tracking-[-3px] whitespace-pre-line text-[#4f4f4f]">
            {personalInfo.headline}
          </h1>
        </div>

        <p className="max-w-[753px] text-[24px] leading-[33.6px] tracking-[-0.8px] text-[#4f4f4f]">
          {personalInfo.subtext}
        </p>

        <div className="flex flex-wrap gap-[15px]">
          <Button href="/work" variant="solid">
            Work
          </Button>
          <Button href={personalInfo.resumeHref} variant="outline">
            Download Resume
          </Button>
        </div>
      </div>

      <div className="h-64 sm:h-80" aria-hidden />
    </section>
  );
}
