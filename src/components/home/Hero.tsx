"use client";

import Nav from "@/components/layout/Nav";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/content/profile/data";
import { homePage } from "@/data/content/home/data";
import { assets } from "@/data/config/assets";
import { useDeviceType } from "@/hooks/useDeviceType";

function HeroCta({ primaryClassName = "" }: { primaryClassName?: string }) {
  return (
    <>
      <Button href="/work" variant="solid" className={primaryClassName}>
        {homePage.heroCta.primary}
      </Button>
      <Button href={personalInfo.resumeHref} variant="outline">
        {homePage.heroCta.secondary}
      </Button>
    </>
  );
}

export default function Hero() {
  const device = useDeviceType();

  return (
    <section
      className="grid min-h-[600px] overflow-hidden lg:min-h-[950px]"
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

      <div className="col-start-1 row-start-1 flex h-full flex-col px-6 pt-8 pb-8 sm:px-10 sm:pt-12 sm:pb-10 lg:px-[150px] lg:pt-20 lg:pb-0">
        <Nav />

        <div className="mt-10 flex max-w-full flex-col gap-4 sm:mt-14 lg:mt-20 lg:max-w-[911px] lg:gap-[25px]">
          <div className="flex flex-col gap-2 lg:gap-2.5">
            <p className="font-heading text-[12px] leading-[14px] tracking-[2px] text-black/60 uppercase sm:text-[14px]">
              {personalInfo.tagline}
            </p>
            <h1 className="font-sans text-[32px] leading-[38px] font-semibold tracking-[-1px] whitespace-pre-line text-body sm:text-[44px] sm:leading-[52px] sm:tracking-[-2px] lg:text-[60px] lg:leading-[70px] lg:tracking-[-3px]">
              {personalInfo.headline.line1}
              <br />
              {personalInfo.headline.line2Prefix}
              <span className="font-brush text-[42px] leading-[38px] font-normal tracking-[-1px] sm:text-[58px] sm:leading-[52px] sm:tracking-[-2px] lg:text-[80px] lg:leading-[70px] lg:tracking-[-3px]">
                {personalInfo.headline.emphasis}
              </span>
              {personalInfo.headline.post}
            </h1>
          </div>

          <p className="font-heading max-w-full text-[16px] leading-[24px] font-medium tracking-[-0.4px] text-body sm:text-[20px] sm:leading-[28px] lg:max-w-[753px] lg:text-[24px] lg:leading-[34px] lg:tracking-[-0.8px]">
            {personalInfo.subtext}
          </p>

          {device !== null && !device.isMobile && (
            <div className="flex flex-wrap gap-[15px]">
              <HeroCta />
            </div>
          )}
        </div>

        {device !== null && device.isMobile && (
          <div className="mt-auto flex gap-3">
            <HeroCta primaryClassName="flex-1" />
          </div>
        )}
      </div>
    </section>
  );
}
