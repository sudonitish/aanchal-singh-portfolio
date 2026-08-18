import Image from "next/image";
import { personalInfo } from "@/data/content/profile/data";
import { footerContent } from "@/data/content/layout/footer";
import { START_YEAR } from "@/data/config/constants";
import { assets } from "@/data/config/assets";
import ArrowUpRightIcon from "@/components/ui/ArrowUpRightIcon";

function SongsTrack() {
  return (
    <>
      {footerContent.songs.map((song, index) => (
        <span key={song} className="flex items-center gap-2">
          <span className="font-display-script text-[30px] leading-6 text-accent-teal">
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

export default function Footer() {
  const links = personalInfo.contact.filter((c) =>
    ["linkedin", "email", "resume"].includes(c.type)
  );

  return (
    <footer
      className="relative mx-4 mt-20 mb-4 flex min-h-[400px] items-center justify-center overflow-hidden rounded-card bg-cover bg-bottom px-6"
      style={{
        backgroundImage: `url(${assets.footerBg})`,
        backgroundColor: "var(--color-footer-fallback)",
      }}
    >
      <div className="flex w-full max-w-[1840px] flex-col items-center gap-[55px] py-10">
        <div className="flex flex-col items-center gap-[25px]">
          <div className="group flex flex-col items-center gap-1">
            <div className="flex flex-wrap items-end justify-center gap-2">
              <p className="font-sans text-[18px] leading-6 font-medium text-accent-teal">
                {footerContent.endMessage.pre}
              </p>
              <span className="font-cursive text-[30px] leading-6 text-gold">
                {footerContent.endMessage.emphasis}
              </span>
            </div>
            <p className="font-cursive text-[32px] leading-6 text-gold opacity-0 transition-opacity group-hover:opacity-100">
              {footerContent.hoverMessage}
              <span className="text-[48px] leading-9">.</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-7">
            {links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                className="inline-flex items-center gap-1.5 font-sans text-[16px] leading-6 font-semibold text-accent-teal transition-colors hover:text-brand"
              >
                {link.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <span className="flex items-center gap-2 font-sans text-[14px] leading-5 font-medium text-ink">
            {footerContent.madeWithLabel}
            <Image src={assets.headphoneCoffeeIcon} alt="" width={81} height={30} aria-hidden />
          </span>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-5">
              <Image src={assets.musicIcon} alt="" width={63} height={63} aria-hidden />
              <div className="w-[280px] overflow-hidden sm:w-[400px]">
                <div className="marquee-track flex w-max flex-nowrap items-center gap-2">
                  <SongsTrack />
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden />
                  <SongsTrack />
                </div>
              </div>
              <Image src={assets.musicIcon} alt="" width={63} height={63} aria-hidden />
            </div>
            <span className="font-cursive text-[40px] leading-6 text-maroon">
              {footerContent.takeMeBack}
            </span>
          </div>

          <span className="font-sans text-[14px] leading-5 font-medium text-ink">
            &copy; {START_YEAR} Aanchal.Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
