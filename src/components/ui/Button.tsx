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
    "inline-flex items-center gap-[5px] rounded-full px-6 py-3 font-heading text-[18px] leading-6 tracking-[-0.4px] transition-colors";
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
