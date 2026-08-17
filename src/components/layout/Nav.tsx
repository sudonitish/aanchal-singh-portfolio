"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/config/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-fit items-center gap-[30px] rounded-full border border-brand bg-white/60 px-[15px] py-[10px] backdrop-blur-md">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <Image src="/logo.svg" alt="" width={20} height={20} aria-hidden />
      </span>
      {navLinks
        .filter((link) => link.enabled)
        .map((link) => {
          const isActive =
            pathname === link.href || (link.href === "/work" && pathname === "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] leading-[21px] font-semibold transition-colors ${
                isActive ? "text-brand" : "text-accent hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
    </nav>
  );
}
