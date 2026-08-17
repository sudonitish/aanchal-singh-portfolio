import { personalInfo } from "@/data/content/profile/data";
import { footerContent } from "@/data/content/layout/footer";
import { START_YEAR } from "@/data/config/constants";

export default function Footer() {
  const links = personalInfo.contact.filter((c) =>
    ["linkedin", "email", "resume"].includes(c.type)
  );

  return (
    <footer
      className="relative mx-4 mt-20 mb-4 flex min-h-[400px] flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-bottom px-6 pb-6 sm:px-12"
      style={{ backgroundImage: "url(/footer-bg.png)", backgroundColor: "#bfe8ee" }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-[25px] py-14 text-center">
        <div className="group flex flex-col items-center gap-1">
          <p className="text-[18px] leading-6 font-medium text-accent-teal">
            {footerContent.endMessage.pre}{" "}
            <span className="text-[16px] leading-6 font-medium text-ink">
              {footerContent.endMessage.emphasis}
            </span>
          </p>
          <p className="font-cursive text-[32px] leading-6 text-[#a9824f] opacity-0 transition-opacity group-hover:opacity-100">
            {footerContent.hoverMessage}
            <span className="text-[48px] leading-9">.</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7">
          {links.map((link) => (
            <a
              key={link.type}
              href={link.href}
              className="text-[16px] leading-6 font-semibold text-accent-teal transition-colors hover:text-brand"
            >
              {link.label} &#8599;
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[14px] leading-5 font-medium text-ink">
            {footerContent.madeWithLabel} <span aria-hidden>🎧+☕</span>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {footerContent.songs.map((song, index) => (
              <span key={song} className="flex items-center gap-2">
                <span className="font-display-script text-[24px] leading-6 text-accent-teal">
                  {song}
                </span>
                {index < footerContent.songs.length - 1 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden />
                )}
              </span>
            ))}
          </div>

          <span className="text-[14px] leading-5 font-medium text-ink">
            &copy; {START_YEAR} Aanchal.Portfolio
          </span>
        </div>

        <span className="font-cursive text-[40px] leading-6 text-[#863234]">
          {footerContent.takeMeBack}
        </span>
      </div>
    </footer>
  );
}
