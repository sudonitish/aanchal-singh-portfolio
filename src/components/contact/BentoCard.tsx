import Link from "next/link";
import type { BentoCard as BentoCardData } from "@/data/content/contact/data";
import { iconById } from "@/components/contact/ContactIcons";

interface BentoCardProps {
  card: BentoCardData;
}

export default function BentoCard({ card }: BentoCardProps) {
  const Icon = iconById[card.id];
  const height = card.row === 1 ? "h-[220px] sm:h-[260px]" : "h-[280px] sm:h-[330px]";

  return (
    <Link
      href={card.href}
      style={{ flexGrow: card.flex, flexBasis: 260 }}
      className={`group relative flex min-w-[260px] flex-1 flex-col items-center justify-center gap-4 rounded-card p-6 transition-transform hover:-translate-y-1 ${height} ${card.bg}`}
    >
      {Icon && <Icon className={`h-12 w-12 ${card.textClass}`} />}

      {card.variant === "chip" && (
        <span
          className={`rounded-full px-4 py-1.5 text-sm font-semibold tracking-[-0.35px] ${card.chipBg} ${card.textClass}`}
        >
          {card.primary}
        </span>
      )}

      {card.variant === "label" && (
        <span className={`text-sm font-semibold tracking-[-0.35px] ${card.textClass}`}>
          {card.primary}
        </span>
      )}

      {card.variant === "dual" && (
        <span
          className={`flex flex-col items-center gap-1 rounded-[20px] px-6 py-2.5 ${card.chipBg}`}
        >
          <span className="text-sm font-semibold tracking-[-0.35px] text-bento-mint">
            {card.primary}
          </span>
          <span className="text-sm font-semibold tracking-[-0.35px] text-bento-mint">
            {card.secondary}
          </span>
        </span>
      )}

      {card.variant === "arrow" && (
        <span
          aria-hidden
          className="absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Link>
  );
}
