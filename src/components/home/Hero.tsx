"use client";

import Nav from "@/components/layout/Nav";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/content/profile/data";
import { homePage } from "@/data/content/home/data";
import { assets } from "@/data/config/assets";
import { useDeviceType } from "@/hooks/useDeviceType";

function HeroCta({
  primaryClassName = "",
  secondaryClassName = "",
}: {
  primaryClassName?: string;
  secondaryClassName?: string;
}) {
  return (
    <>
      <Button href="/#work" variant="solid" className={primaryClassName}>
        {homePage.heroCta.primary}
      </Button>
      <Button href={personalInfo.resumeHref} variant="outline" className={secondaryClassName}>
        {homePage.heroCta.secondary}
      </Button>
    </>
  );
}

export default function Hero() {
  const device = useDeviceType();

  return (
    <section
      className="grid min-h-[600px] overflow-hidden lg:min-h-[760px]"
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
        className="col-start-1 row-start-1 h-full w-full object-cover"
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>

      <div className="col-start-1 row-start-1 flex h-full flex-col px-5 pt-8 pb-8 sm:pt-[38px] sm:pb-8 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-16 lg:pb-0">
        <Nav />

        <div className="mt-10 flex max-w-full flex-col gap-4 sm:mt-[45px] lg:mt-16 lg:max-w-[911px] lg:gap-5">
          <div className="flex flex-col gap-1.5 lg:gap-1.5">
            <p className="font-heading text-[12px] leading-[13px] tracking-[2px] text-black/60 uppercase sm:text-[12px]">
              {personalInfo.tagline}
            </p>
            <h1 className="font-sans text-[26px] leading-[32px] font-semibold tracking-[-0.5px] whitespace-normal text-body sm:text-[35px] sm:leading-[42px] sm:tracking-[-2px] sm:whitespace-pre-line lg:text-[48px] lg:leading-[56px] lg:tracking-[-3px]">
              {personalInfo.headline.line1}
              <br />
              {personalInfo.headline.line2Prefix}
              <span className="font-brush text-[42px] leading-[38px] font-normal tracking-[-0.5px] sm:text-[46px] sm:leading-[42px] sm:tracking-[-2px] lg:text-[64px] lg:leading-[56px] lg:tracking-[-3px]">
                {personalInfo.headline.emphasis}
              </span>
              {personalInfo.headline.post}
            </h1>
          </div>

          <p className="font-heading max-w-[570px] text-[13px] leading-[19px] font-medium tracking-[-0.4px] text-body sm:text-[13px] sm:leading-[22px] lg:text-[19px] lg:leading-[27px] lg:tracking-[-0.8px]">
            {personalInfo.subtext}
          </p>

          {device !== null && !device.isMobile && (
            <div className="flex flex-wrap gap-[10px]">
              <HeroCta />
            </div>
          )}
        </div>

        {device !== null && device.isMobile && (
          <div className="mt-auto flex gap-[10px]">
            <HeroCta primaryClassName="flex-1" secondaryClassName="flex-1" />
          </div>
        )}
      </div>
    </section>
  );
}
