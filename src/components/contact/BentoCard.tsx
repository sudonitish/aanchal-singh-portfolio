"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VisualsIcon from "./VisualsIcon";
import type { BentoCard as BentoCardData } from "@/data/content/contact/data";

interface BentoCardProps {
  card: BentoCardData;
  spanFull?: boolean;
}

export default function BentoCard({ card, spanFull }: BentoCardProps) {
  const [phase, setPhase] = useState<"idle" | "in" | "out">("idle");
  const height = card.row === 1 ? "h-[120px] min-[640px]:h-auto" : "h-[140px] min-[640px]:h-auto";
  const hasHoverIcon = Boolean(card.hover?.icon);
  const isPhone = card.id === "phone";
  const isEmail = card.id === "email";
  const isVisuals = card.id === "visuals";
  const isWork = card.id === "work";
  const hoverIconSize = card.hover?.hoverIconSize ?? card.iconSize;

  return (
    <Link
      href={card.href}
      onMouseEnter={() => setPhase("in")}
      onMouseLeave={() => setPhase("out")}
      className={`group relative flex flex-col items-center justify-center gap-[13px] overflow-hidden rounded-card p-[19px] transition-colors duration-300 ease-out min-[640px]:min-w-0 min-[640px]:col-span-1 ${
        spanFull ? "col-span-2" : ""
      } ${height} ${card.bg} ${
        hasHoverIcon || isWork || isVisuals ? "hover:bg-white" : ""
      } ${card.variant === "arrow" && card.hover?.text ? "hover:bg-[#DFF4FF]" : ""}`}
    >
      {isWork && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 87, 255, 0.42) 0%, rgba(0, 87, 255, 0.34) 3%, rgba(0, 87, 255, 0.25) 6%, rgba(0, 87, 255, 0.17) 9%, rgba(0, 87, 255, 0.1) 12%, rgba(0, 87, 255, 0.05) 16%, rgba(0, 87, 255, 0.02) 19%, rgba(0, 87, 255, 0) 22%)",
            maskImage: "radial-gradient(ellipse 75% 130% at 50% 0%, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 130% at 50% 0%, black 55%, transparent 100%)",
          }}
        />
      )}
      <div
        className={`flex flex-col items-center gap-[13px] transition-transform duration-300 ease-out ${
          isEmail ? "translate-y-[10px] group-hover:translate-y-0 group-hover:scale-[1.28]" : ""
        } ${card.variant === "label" && card.primary ? "absolute inset-0 m-auto h-fit w-fit" : ""}`}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: card.iconSize, height: card.iconSize }}
        >
          {isVisuals ? (
            <VisualsIcon size={card.iconSize} />
          ) : isWork ? (
            <svg
              width={card.iconSize}
              height={card.iconSize}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
              className="max-w-none origin-center transition-all duration-300 ease-out group-hover:scale-[3.725]"
            >
              <path
                d="M20.5704 23.5002C21.608 22.9783 22.3925 22.397 22.93 21.7688C23.8863 20.6374 24.3582 19.1373 24.3582 17.2778C24.3582 15.4683 23.8863 13.9213 22.9425 12.6243C21.3674 10.5116 18.7015 9.43028 14.9325 9.37402H0V39.8546H13.923C15.4919 39.8546 16.9451 39.7203 18.289 39.4452C19.6329 39.1671 20.7955 38.6577 21.7799 37.9139C22.655 37.2669 23.3863 36.4637 23.9676 35.5168C24.8864 34.0854 25.3458 32.4634 25.3458 30.657C25.3458 28.9069 24.9427 27.4161 24.1426 26.191C23.3332 24.9659 22.1456 24.069 20.5704 23.5002ZM6.15988 14.6682H12.8854C14.3637 14.6682 15.5825 14.8276 16.5389 15.1432C17.6452 15.6027 18.1984 16.5371 18.1984 17.9622C18.1984 19.2405 17.7765 20.1343 16.942 20.6374C16.1013 21.1406 15.0106 21.3938 13.673 21.3938H6.15988V14.6682ZM16.7951 34.0292C16.0513 34.3886 15.0044 34.5667 13.6636 34.5667H6.15988V26.4379H13.7668C15.0919 26.4473 16.1232 26.6223 16.8608 26.9505C18.1734 27.5443 18.8265 28.6319 18.8265 30.2226C18.8265 32.0978 18.1515 33.3604 16.7951 34.0292ZM31.9526 10.796H45.1943V14.5901H31.9526V10.796ZM49.7947 25.7691C49.5197 24.0033 48.9134 22.4501 47.9696 21.1094C46.9351 19.5905 45.6225 18.4779 44.0255 17.7747C42.4347 17.0684 40.644 16.7153 38.65 16.7184C35.3029 16.7184 32.5839 17.7653 30.4806 19.8436C28.3836 21.9282 27.3335 24.9253 27.3335 28.8319C27.3335 32.9978 28.493 36.0075 30.8244 37.8545C33.1465 39.7046 35.8279 40.6266 38.8719 40.6266C42.5566 40.6266 45.4225 39.5296 47.4695 37.3419C48.779 35.9606 49.5197 34.6011 49.6822 33.2666H43.5817C43.2285 33.926 42.8191 34.4417 42.3503 34.8167C41.5003 35.5043 40.3939 35.8481 39.0376 35.8481C37.7468 35.8481 36.653 35.5637 35.7404 34.998C34.2341 34.0917 33.4465 32.504 33.3465 30.2445H49.9947C50.0197 28.2974 49.9572 26.8005 49.7947 25.7691ZM33.4965 26.3535C33.7153 24.8878 34.2466 23.7252 35.0904 22.8658C35.9342 22.0094 37.128 21.5781 38.6563 21.575C40.0658 21.575 41.244 21.9782 42.2035 22.7876C43.1504 23.6033 43.6848 24.7878 43.7942 26.3535H33.4965Z"
                className="fill-white transition-colors duration-300 ease-out group-hover:fill-[#0057FF]"
              />
            </svg>
          ) : (
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
          )}
          {!isWork && !isVisuals && hasHoverIcon && card.hover?.icon && (
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
            className={`hidden rounded-full px-4 py-1.5 text-sm font-semibold tracking-[-0.35px] transition-all duration-300 ease-out min-[640px]:inline-flex min-[640px]:px-[13px] min-[640px]:py-[5px] min-[640px]:text-[11px] ${
              isPhone ? "group-hover:scale-[2.27] group-hover:-translate-y-8" : ""
            } ${card.chipBg} ${card.chipTextClass}`}
          >
            {card.primary}
          </span>
        )}
      </div>

      {card.variant === "label" && card.primary && (
        <span
          className={`hidden text-sm font-semibold tracking-[-0.35px] transition-all duration-500 ease-out min-[640px]:block min-[640px]:text-[11px] ${
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
          className={`relative hidden h-[24px] w-[113px] items-center justify-center overflow-hidden rounded-[16px] min-[640px]:flex ${card.chipBg}`}
        >
          <span
            className={`absolute inset-x-0 top-0 flex flex-col ${
              phase === "in" ? "track-up" : phase === "out" ? "track-down" : ""
            }`}
          >
            <span className="flex h-[24px] items-center justify-center text-sm font-semibold tracking-[-0.35px] text-[#D3FFF9] min-[640px]:text-[11px]">
              {card.primary}
            </span>
            <span className="flex h-[24px] items-center justify-center text-sm font-semibold tracking-[-0.35px] text-[#D3FFF9] min-[640px]:text-[11px]">
              {card.secondary}
            </span>
          </span>
        </span>
      )}

      {card.variant === "arrow" && (
        <>
          {card.hover?.text && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-[19px] text-center font-body text-[32px] font-semibold italic tracking-[-3px] text-[#20719A] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              {card.hover.text}
            </span>
          )}
          <span
            aria-hidden
            className="absolute right-4 bottom-4 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#20719A] group-hover:text-white min-[640px]:flex"
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
