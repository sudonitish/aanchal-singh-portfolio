"use client";

import Image from "next/image";
import { personalInfo } from "@/data/content/profile/data";
import { footerContent } from "@/data/content/layout/footer";
import { START_YEAR } from "@/data/config/constants";
import { assets } from "@/data/config/assets";
import { useDeviceType } from "@/hooks/useDeviceType";
import ArrowUpRightIcon from "@/components/ui/ArrowUpRightIcon";

function SongsTrack() {
  return (
    <>
      {footerContent.songs.map((song, index) => (
        <span key={song} className="flex items-center gap-2">
          <span className="font-display-script text-[20px] leading-6 text-accent-teal sm:text-[30px]">
            {song}
          </span>
          {index < footerContent.songs.length - 1 && (
            <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden />
          )}
        </span>
      ))}
    </>
  );
}

function MarqueeTrack() {
  return (
    <div className="marquee-track flex w-max flex-nowrap items-center gap-2">
      <SongsTrack />
      <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden />
      <SongsTrack />
    </div>
  );
}

function EndMessage({ isMobile }: { isMobile: boolean | null }) {
  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <p className="flex max-w-full flex-wrap items-center justify-center gap-2 px-2 text-center">
        <span className="font-sans text-[13px] leading-5 font-medium text-accent-teal">
          {footerContent.endMessage.pre}
        </span>
        <span className="flex items-baseline gap-1">
          <span className="font-cursive text-[20px] leading-5 text-gold">
            {footerContent.endMessage.emphasis}
          </span>
          <Image
            src={assets.confettiLinesIcon}
            alt=""
            width={29.2}
            height={39.58}
            className="h-5 w-4"
            aria-hidden
          />
        </span>
      </p>
    );
  }

  return (
    <div className="group h-[50px] w-[462px] min-w-0 max-w-full overflow-hidden">
      <div className="flex w-full flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[50px]">
        <div className="flex h-[50px] w-full flex-nowrap items-baseline justify-center gap-1.5 whitespace-nowrap pb-1.5">
          <p className="font-sans text-[18px] leading-6 font-medium text-accent-teal">
            {footerContent.endMessage.pre}
          </p>
          <span className="flex items-baseline gap-[5px]">
            <span className="font-cursive text-[30px] leading-6 text-gold">
              {footerContent.endMessage.emphasis}
            </span>
            <Image
              src={assets.confettiLinesIcon}
              alt=""
              width={23}
              height={32}
              aria-hidden
            />
          </span>
        </div>
        <div className="flex h-[50px] w-full items-center justify-center">
          <p className="font-cursive text-[32px] leading-6 whitespace-nowrap text-accent-teal">
            {footerContent.hoverMessage}
            <span className="text-[48px] leading-9">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SongsWithTakeMeBack({ isMobile }: { isMobile: boolean | null }) {
  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="w-[260px] overflow-hidden">
        <MarqueeTrack />
      </div>
    );
  }

  return (
    <div className="group grid place-items-center">
      <div className="z-0 col-start-1 row-start-1 flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src={assets.musicIcon}
          alt=""
          width={50}
          height={50}
          className="h-[50px] w-[50px]"
          aria-hidden
        />
        <div className="w-[224px] overflow-hidden lg:w-[320px]">
          <MarqueeTrack />
        </div>
        <Image
          src={assets.musicIcon}
          alt=""
          width={50}
          height={50}
          className="h-[50px] w-[50px]"
          aria-hidden
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="pointer-events-none relative z-10 col-start-1 row-start-1 flex cursor-pointer items-center justify-center gap-[9px] opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
      >
        <span className="font-cursive text-[40px] leading-6 text-accent-teal">
          {footerContent.takeMeBack}
        </span>
        <Image src={assets.arrowIcon} alt="" width={32} height={32} aria-hidden />
      </button>
    </div>
  );
}

export default function Footer() {
  const device = useDeviceType();
  const isMobile = device?.isMobile ?? null;
  const links = personalInfo.contact.filter((c) =>
    ["linkedin", "email", "resume"].includes(c.type)
  );

  return (
    <footer
      className="relative mx-4 mt-10 mb-4 min-h-[318px] overflow-hidden rounded-card bg-cover bg-bottom px-4 pt-10 pb-0 sm:mt-16 sm:min-h-[318px] sm:px-0 sm:pt-16 sm:pb-0"
      style={{
        backgroundImage: `url(${assets.footerBg})`,
        backgroundColor: "var(--color-footer-fallback)",
      }}
    >
      <div className="flex w-full min-w-0 flex-col items-center gap-10 sm:gap-11">
        <div className="flex w-full min-w-0 flex-col items-center gap-5 sm:gap-5">
          <EndMessage isMobile={isMobile} />

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-[22px]">
            {links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                className="inline-flex items-center gap-1.5 font-sans text-[14px] leading-6 font-semibold text-accent-teal transition-colors hover:text-brand sm:text-[16px]"
              >
                {link.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-[13px]">
          <span className="flex items-center gap-2 px-4 py-2 font-sans text-[12px] leading-5 font-medium text-ink backdrop-blur-[2px] sm:gap-[10px] sm:px-4 sm:py-2 sm:text-[14px]">
            {footerContent.madeWithLabel}
            <Image
              src={assets.headphoneCoffeeIcon}
              alt=""
              width={81}
              height={30}
              className="h-6 w-[65px] sm:h-6 sm:w-[65px]"
              aria-hidden
            />
          </span>

          <div className="px-4 py-2 backdrop-blur-[2px] sm:px-4 sm:py-2">
            <SongsWithTakeMeBack isMobile={isMobile} />
          </div>

          <span className="px-4 py-2 font-sans text-[12px] leading-5 font-medium text-ink backdrop-blur-[2px] sm:px-4 sm:py-2 sm:text-[14px]">
            &copy; {START_YEAR} Aanchal.Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
