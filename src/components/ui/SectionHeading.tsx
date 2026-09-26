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
    <div className="flex items-center gap-[13px]">
      <span className="text-[12px] leading-[13px] font-bold tracking-[2.5px] whitespace-normal text-accent-strong uppercase">
        {label}
      </span>
      <span className="h-px flex-1 translate-y-[1px] bg-black/10" />
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-[12px] leading-[13px] font-semibold whitespace-nowrap text-body capitalize underline transition-colors hover:text-brand"
        >
          View all
        </Link>
      )}
    </div>
  );
}
