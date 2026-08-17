import Link from "next/link";
import type { BentoCard as BentoCardData } from "@/data/content/contact/data";

const spanClasses: Record<NonNullable<BentoCardData["span"]>, string> = {
  sm: "col-span-1",
  md: "col-span-1",
  lg: "col-span-2",
};

interface BentoCardProps {
  card: BentoCardData;
}

export default function BentoCard({ card }: BentoCardProps) {
  return (
    <Link
      href={card.href}
      className={`flex h-[220px] flex-col justify-end rounded-[20px] p-6 transition-transform hover:-translate-y-1 ${card.bg} ${spanClasses[card.span ?? "sm"]}`}
    >
      <span className={`text-lg font-semibold ${card.textClass}`}>
        {card.label}
      </span>
    </Link>
  );
}
