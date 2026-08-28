import Image from "next/image";
import type { Block } from "@/lib/content";

interface BlockRendererProps {
  blocks: Block[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="flex flex-col gap-16">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="max-w-3xl text-lg leading-relaxed text-body">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <div key={index} className="flex max-w-3xl flex-col gap-3">
                {block.eyebrow && (
                  <span className="text-sm font-bold tracking-[0.15em] text-accent-strong uppercase">
                    {block.eyebrow}
                  </span>
                )}
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  {block.title}
                </h2>
                {block.description && (
                  <p className="text-lg leading-relaxed text-body">
                    {block.description}
                  </p>
                )}
              </div>
            );

          case "statCards":
            return (
              <div key={index} className="grid gap-6 sm:grid-cols-3">
                {block.cards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[20px] bg-surface-1 p-6"
                  >
                    <h3 className="text-sm font-bold tracking-wide text-brand uppercase">
                      {card.label}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-body">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            );

          case "quote":
            return (
              <div key={index} className="grid gap-6 sm:grid-cols-3">
                {block.quotes.map((quote, quoteIndex) => (
                  <blockquote
                    key={quoteIndex}
                    className="rounded-[20px] bg-surface-4 p-6 text-base leading-relaxed text-ink italic"
                  >
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                ))}
              </div>
            );

          case "list":
            return (
              <div key={index} className="grid gap-6 sm:grid-cols-3">
                {block.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    {item.index && (
                      <span className="text-sm font-bold text-accent-strong">
                        {item.index}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-body">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            );

          case "image":
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="h-auto w-full rounded-[20px]"
              />
            );

          case "placeholder":
            return (
              <div
                key={index}
                className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[20px] bg-surface-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  fill="none"
                  className="text-body/40"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path
                    d="M21 15l-5-5-11 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {block.label && (
                  <span className="text-sm font-medium text-body/60">
                    {block.label}
                  </span>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
