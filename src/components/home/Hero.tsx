import Nav from "@/components/layout/Nav";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/content/profile/data";
import { homePage } from "@/data/content/home/data";
import { assets } from "@/data/config/assets";

export default function Hero() {
  return (
    <section
      className="relative min-h-[950px] overflow-hidden px-[150px] pt-20"
      style={{
        background:
          "linear-gradient(180deg, var(--color-hero-from) 26.44%, var(--color-hero-to) 72.6%)",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-10">
        <Nav />

        <div className="mt-20 flex max-w-[911px] flex-col gap-[25px]">
          <div className="flex flex-col gap-2.5">
            <p className="font-heading text-[14px] leading-[14px] tracking-[2px] text-black/60 uppercase">
              {personalInfo.tagline}
            </p>
            <h1 className="font-sans text-[60px] leading-[70px] font-semibold tracking-[-3px] whitespace-pre-line text-body">
              {personalInfo.headline.pre}
              <span className="font-brush text-[80px] leading-[70px] font-normal tracking-[-3px]">
                {personalInfo.headline.emphasis}
              </span>
              {personalInfo.headline.post}
            </h1>
          </div>

          <p className="font-heading max-w-[753px] text-[24px] leading-[34px] font-medium tracking-[-0.8px] text-body">
            {personalInfo.subtext}
          </p>

          <div className="flex flex-wrap gap-[15px]">
            <Button href="/work" variant="solid">
              {homePage.heroCta.primary}
            </Button>
            <Button href={personalInfo.resumeHref} variant="outline">
              {homePage.heroCta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
