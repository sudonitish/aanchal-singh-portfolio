import Link from "next/link";
import Image from "next/image";
import type { BentoCard as BentoCardData } from "@/data/content/contact/data";

interface BentoCardProps {
  card: BentoCardData;
  spanFull?: boolean;
}

export default function BentoCard({ card, spanFull }: BentoCardProps) {
  const height = card.row === 1 ? "h-[120px] lg:h-[265px]" : "h-[140px] lg:h-[332px]";
  const hasHoverIcon = Boolean(card.hover?.icon);
  const isPhone = card.id === "phone";
  const isEmail = card.id === "email";
  const isVisuals = card.id === "visuals";
  const hoverIconSize = card.hover?.hoverIconSize ?? card.iconSize;

  return (
    <Link
      href={card.href}
      style={{ flexGrow: card.flex, flexBasis: 260 }}
      className={`group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-card p-6 transition-colors duration-300 ease-out lg:min-w-[260px] lg:flex-1 lg:gap-[13px] lg:p-[19px] ${
        spanFull ? "col-span-2" : ""
      } ${height} ${card.bg} ${
        hasHoverIcon ? "hover:bg-white" : ""
      } ${card.variant === "arrow" && card.hover?.text ? "hover:bg-[#DFF4FF]" : ""}`}
    >
      <div
        className={`flex flex-col items-center gap-4 transition-transform duration-300 ease-out ${
          isEmail ? "group-hover:scale-[1.28]" : ""
        } ${card.variant === "label" && card.primary ? "absolute inset-0 m-auto h-fit w-fit" : ""}`}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: card.iconSize, height: card.iconSize }}
        >
          <Image
            src={card.icon}
            alt=""
            width={card.iconSize}
            height={card.iconSize}
            aria-hidden
            className={`transition-all duration-300 ease-out ${
              card.variant === "arrow" && card.hover?.text ? "group-hover:opacity-0" : ""
            } ${isPhone ? "group-hover:-translate-y-16 group-hover:opacity-0" : ""} ${
              hasHoverIcon ? "group-hover:opacity-0" : ""
            }`}
          />
          {hasHoverIcon && card.hover?.icon && (
            <Image
              src={card.hover.icon}
              alt=""
              width={hoverIconSize}
              height={hoverIconSize}
              aria-hidden
              className="absolute top-1/2 left-1/2 max-w-none scale-50 opacity-0 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 group-hover:scale-100 group-hover:opacity-100"
            />
          )}
        </div>

        {card.variant === "chip" && (
          <span
            className={`hidden rounded-full px-4 py-1.5 text-sm font-semibold tracking-[-0.35px] transition-all duration-300 ease-out lg:inline-flex lg:px-[13px] lg:py-[5px] lg:text-[11px] ${
              isPhone ? "group-hover:scale-[2.27] group-hover:-translate-y-8" : ""
            } ${card.chipBg} ${card.chipTextClass}`}
          >
            {card.primary}
          </span>
        )}
      </div>

      {card.variant === "label" && card.primary && (
        <span
          className={`hidden text-sm font-semibold tracking-[-0.35px] transition-all duration-500 ease-out lg:block lg:text-[11px] ${
            isVisuals
              ? "absolute left-1/2 -translate-x-1/2 translate-y-[51px] text-black opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              : "text-white"
          }`}
          style={
            isVisuals
              ? { top: `calc(50% + ${hoverIconSize / 2 + 13}px)` }
              : undefined
          }
        >
          {card.primary}
        </span>
      )}

      {card.variant === "dual" && (
        <span
          className={`relative hidden h-[30px] w-[113px] items-center justify-center overflow-hidden rounded-[16px] lg:flex ${card.chipBg}`}
        >
          <span
            className="absolute text-sm font-semibold tracking-[-0.35px] text-[#D3FFF9] opacity-100 transition-all duration-300 group-hover:-translate-y-[19px] group-hover:opacity-0 lg:text-[11px]"
            style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            {card.primary}
          </span>
          <span
            className="absolute translate-y-[19px] text-sm font-semibold tracking-[-0.35px] text-[#D3FFF9] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:text-[11px]"
            style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            {card.secondary}
          </span>
        </span>
      )}

      {card.variant === "arrow" && (
        <>
          {card.hover?.text && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center font-body text-[40px] font-semibold italic tracking-[-3px] text-[#20719A] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              {card.hover.text}
            </span>
          )}
          <span
            aria-hidden
            className="absolute right-4 bottom-4 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#20719A] group-hover:text-white lg:flex"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </>
      )}
    </Link>
  );
}
