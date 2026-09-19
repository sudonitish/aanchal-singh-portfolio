import Link from "next/link";

interface SectionHeadingProps {
  label: string;
  viewAllHref?: string;
}

export default function SectionHeading({
  label,
  viewAllHref,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[14px] leading-[15px] font-bold tracking-[2.5px] whitespace-normal text-accent-strong uppercase sm:text-[11px] sm:leading-[12px]">
        {label}
      </span>
      <span className="h-px flex-1 translate-y-[1px] bg-black/10" />
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-[14px] leading-[15px] font-semibold whitespace-nowrap text-body capitalize underline transition-colors hover:text-brand sm:text-[11px] sm:leading-[12px]"
        >
          View all
        </Link>
      )}
    </div>
  );
}
