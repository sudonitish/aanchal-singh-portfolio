import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-[4px] rounded-full px-[16px] py-[6px] font-heading text-[12px] leading-[19px] tracking-[-0.24px] transition-colors sm:px-[19px] sm:py-[8px] sm:text-[14px] sm:tracking-[-0.32px]";
  const variants = {
    solid: "border-[3px] border-brand bg-brand text-brand-foreground hover:bg-brand/90",
    outline: "border-2 border-brand bg-transparent text-brand hover:bg-brand/5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
