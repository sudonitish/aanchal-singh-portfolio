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
        <span key={song} className="flex items-center gap-1.5">
          <span className="font-display-script text-[20px] leading-[19px] text-accent-teal sm:text-[24px]">
            {song}
          </span>
          {index < footerContent.songs.length - 1 && (
            <span className="h-[5px] w-[5px] rounded-full bg-accent-teal" aria-hidden />
          )}
        </span>
      ))}
    </>
  );
}

function MarqueeTrack() {
  return (
    <div className="marquee-track flex w-max flex-nowrap items-center gap-1.5">
      <SongsTrack />
      <span className="h-[5px] w-[5px] rounded-full bg-accent-teal" aria-hidden />
      <SongsTrack />
    </div>
  );
}

function EndMessage({ isMobile }: { isMobile: boolean | null }) {
  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <p className="flex max-w-full flex-wrap items-baseline justify-center gap-1 px-1.5 text-center">
        <span className="font-sans text-[11px] font-medium text-accent-teal">
          {footerContent.endMessage.pre}
        </span>
        <span className="flex items-baseline gap-[3px]">
          <span className="font-cursive text-[16px] leading-[79%] text-gold">
            {footerContent.endMessage.emphasis}
          </span>
          <Image
            src={assets.confettiLinesIcon}
            alt=""
            width={23}
            height={32}
            className="h-4 w-[13px]"
            aria-hidden
          />
        </span>
      </p>
    );
  }

  return (
    <div className="group h-[46px] min-w-0 max-w-full overflow-hidden">
      <div className="flex w-full flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[46px]">
        <div className="flex h-[46px] w-full flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap">
          <p className="flex items-baseline gap-[5px] font-sans text-[14px] font-medium text-accent-teal">
            {footerContent.endMessage.pre}
            <span className="font-cursive text-[24px] leading-[19px] text-gold">
              {footerContent.endMessage.emphasis}
            </span>
            <Image
              src={assets.confettiLinesIcon}
              alt=""
              width={23}
              height={32}
              aria-hidden
            />
          </p>
        </div>
        <div className="flex h-[46px] w-full items-center justify-center">
          <p className="flex items-center gap-1 font-cursive text-[26px] whitespace-nowrap text-accent-teal">
            {footerContent.hoverMessage}
            <svg width="10" height="31" viewBox="0 0 13 39" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M1.5 32.2188C1.5 31.625 1.70312 31.1406 2.10938 30.7656C2.54688 30.3906 3.0625 30.0938 3.65625 29.875C4.28125 29.6562 4.90625 29.5 5.53125 29.4062C6.1875 29.2812 6.75 29.2188 7.21875 29.2188C7.5 29.2188 7.79688 29.2344 8.10938 29.2656C8.45312 29.2656 8.76562 29.3281 9.04688 29.4531C9.35938 29.5469 9.625 29.7031 9.84375 29.9219C10.0625 30.1094 10.1719 30.4062 10.1719 30.8125C10.1719 31.375 10.0469 31.8594 9.79688 32.2656C9.54688 32.6719 9.23438 33.0156 8.85938 33.2969C8.48438 33.5469 8.0625 33.7344 7.59375 33.8594C7.125 33.9844 6.64062 34.0469 6.14062 34.0469C5.79688 34.0469 5.35938 34.0469 4.82812 34.0469C4.29688 34.0781 3.78125 34.0469 3.28125 33.9531C2.8125 33.8594 2.39062 33.6875 2.01562 33.4375C1.67188 33.1562 1.5 32.75 1.5 32.2188ZM6.5625 31.5156C6.5 31.5156 6.39062 31.5156 6.23438 31.5156C6.10938 31.5156 5.96875 31.5312 5.8125 31.5625C5.65625 31.5938 5.5 31.6562 5.34375 31.75C5.1875 31.8125 5.09375 31.9219 5.0625 32.0781H6.5625V31.5156Z" fill="#3C838C"/>
              <path d="M10.7243 6C10.5016 6.33408 10.2789 6.66815 9.55171 9.12311C8.8245 11.5781 7.59955 16.1438 6.91283 19.164C6.22611 22.1842 6.11474 23.5205 6 24.8973" stroke="#3C838C" strokeWidth="3" strokeLinecap="round"/>
            </svg>
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
      <div className="flex w-full items-center gap-3">
        <Image
          src={assets.musicIcon}
          alt=""
          width={50}
          height={50}
          className="h-[32px] w-[32px] shrink-0"
          aria-hidden
        />
        <div className="min-w-0 flex-1 overflow-hidden">
          <MarqueeTrack />
        </div>
        <Image
          src={assets.musicIcon}
          alt=""
          width={50}
          height={50}
          className="h-[32px] w-[32px] shrink-0"
          aria-hidden
        />
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
        <div className="w-[224px] overflow-hidden lg:w-[462px]">
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
        className="pointer-events-none relative z-10 col-start-1 row-start-1 flex cursor-pointer items-center justify-center gap-[7px] opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
      >
        <span className="font-cursive text-[32px] leading-[19px] text-accent-teal">
          {footerContent.takeMeBack}
        </span>
        <Image src={assets.arrowIcon} alt="" width={26} height={26} aria-hidden />
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
      className="relative mx-4 mt-10 mb-4 overflow-hidden rounded-card bg-cover bg-bottom px-[19px] pt-[30px] pb-[16px] sm:mt-16 sm:pt-[90px]"
      style={{
        backgroundImage: `url(${assets.footerBg})`,
        backgroundColor: "var(--color-footer-fallback)",
      }}
    >
      <div className="flex w-full min-w-0 flex-col items-center gap-4 sm:gap-11">
        <div className="flex w-full min-w-0 flex-col items-center gap-4 sm:gap-5">
          <EndMessage isMobile={isMobile} />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-[22px]">
            {links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                className="inline-flex items-center gap-[5px] font-sans text-[11px] leading-[19px] font-semibold text-accent-teal transition-colors hover:text-brand sm:text-[13px]"
              >
                {link.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[15px] sm:flex-row sm:justify-between sm:gap-[19px]">
          <span className="flex items-center gap-1.5 font-sans text-[10px] leading-4 font-medium text-ink backdrop-blur-[2px] sm:gap-[10px] sm:text-[11px]">
            {footerContent.madeWithLabel}
            <Image
              src={assets.headphoneCoffeeIcon}
              alt=""
              width={65}
              height={24}
              className="h-[19px] w-[52px] sm:h-[19px] sm:w-[52px]"
              aria-hidden
            />
          </span>

          <div className="w-full backdrop-blur-[2px] sm:w-auto">
            <SongsWithTakeMeBack isMobile={isMobile} />
          </div>

          <span className="font-sans text-[10px] leading-4 font-medium text-ink backdrop-blur-[2px] sm:text-[11px]">
            &copy; {START_YEAR} Aanchal.Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
