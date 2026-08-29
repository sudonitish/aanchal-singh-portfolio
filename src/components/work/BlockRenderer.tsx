import Image from "next/image";
import type { Block } from "@/lib/content";
import {
  CaseStudyIcon,
  CaseStudyIconBadge,
  PainPointIconBadge,
  PlatformIcon,
  ThankYouHand,
} from "@/components/work/CaseStudyIcons";

interface BlockRendererProps {
  blocks: Block[];
}

function SectionDivider({ withDot = false }: { withDot?: boolean }) {
  const fade =
    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(148,163,184,0.2) 50%, rgba(0,0,0,0) 100%)";
  if (!withDot) {
    return (
      <div aria-hidden className="h-px w-full" style={{ background: fade }} />
    );
  }
  return (
    <div aria-hidden className="flex items-center gap-4">
      <div className="h-px flex-1" style={{ background: fade }} />
      <div className="h-2 w-2 shrink-0 rounded-full bg-[#06B6D4]" />
      <div className="h-px flex-1" style={{ background: fade }} />
    </div>
  );
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      {blocks.map((block, index) => (
        <BlockItem key={index} block={block} index={index} />
      ))}
    </div>
  );
}

function BlockItem({ block, index }: { block: Block; index: number }) {
  {
    switch (block.type) {
          case "divider":
            return <SectionDivider key={index} withDot={block.withDot} />;

          case "paragraph":
            return (
              <p key={index} className="max-w-3xl text-lg leading-relaxed text-body">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <div key={index} className="flex flex-col items-center gap-5 text-center">
                {block.eyebrow && (
                  <span className="text-sm font-bold tracking-[0.15em] text-accent-strong uppercase">
                    {block.eyebrow}
                  </span>
                )}
                <h2 className="text-[28px] font-extrabold leading-[1.2] text-black sm:text-[40px] sm:leading-[48px]">
                  {block.title}
                </h2>
                {block.subtitle && (
                  <p className="text-[18px] uppercase leading-[22px] tracking-wide text-[#8C8C8C]">
                    {block.subtitle}
                  </p>
                )}
                {block.description && (
                  <p className="max-w-3xl text-[18px] leading-[22px] text-[#8C8C8C]">
                    {block.descriptionLead && (
                      <>
                        <span className="font-bold text-black">
                          {block.descriptionLead}
                        </span>
                        <br />
                      </>
                    )}
                    {block.description}
                  </p>
                )}
              </div>
            );

          case "statCards": {
            const tint: Record<string, string> = {
              triangleWarning: "#06B6D4",
              bolt: "#8B5CF6",
              circleCheck: "#F59E0B",
            };
            const numberColors = ["#06B6D4", "#F59E0B", "#8B5CF6", "#10B981"];
            if (block.cards.every((card) => !card.icon)) {
              return (
                <div key={index} className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-[60px]">
                  {block.cards.map((card, i) => (
                    <div key={card.label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                      <span
                        className="font-badge text-3xl font-extrabold sm:text-4xl"
                        style={{ color: numberColors[i % numberColors.length] }}
                      >
                        {card.text}
                      </span>
                      <span className="font-dm-sans text-sm text-[#64748B]">{card.label}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={index} className="grid gap-[30px] sm:grid-cols-3">
                {block.cards.map((card) => {
                  const color = card.icon ? tint[card.icon] : undefined;
                  return (
                    <div
                      key={card.label}
                      className="flex flex-col gap-5 rounded-[24px] border p-6 sm:p-[30px]"
                      style={
                        color
                          ? {
                              background: `linear-gradient(135deg, ${color}0D 0%, ${color}1A 100%)`,
                              borderColor: `${color}33`,
                            }
                          : undefined
                      }
                    >
                      {card.icon && (
                        <CaseStudyIconBadge name={card.icon} size={56} />
                      )}
                      <h3 className="text-2xl font-bold leading-9 text-black">
                        {card.label}
                      </h3>
                      <p className="text-base leading-[26px] text-[#8C8C8C]">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          }

          case "quote":
            return (
              <div key={index} className="flex flex-wrap justify-center gap-10">
                {block.quotes.map((quote, quoteIndex) => (
                  <blockquote
                    key={quoteIndex}
                    className="max-w-xs text-center text-base font-medium leading-[24px] text-[#194776] sm:text-xl sm:leading-[30px]"
                  >
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                ))}
              </div>
            );

          case "list": {
            if (block.variant === "chips") {
              return (
                <div key={index} className="flex flex-wrap justify-center gap-[15px]">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-2 rounded-2xl border border-[#94A3B8] bg-white px-4 py-2.5"
                    >
                      {item.icon && <CaseStudyIcon name={item.icon} />}
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs text-[#64748B]">
                          {item.title}
                        </span>
                        <span className="text-sm font-semibold text-[#1A202C]">
                          {item.text}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "logoCards") {
              return (
                <div key={index} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-5 rounded-[24px] border border-[#06B6D4]/20 bg-white p-6"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {item.platform && (
                          <PlatformIcon name={item.platform} size={38} />
                        )}
                        <h3 className="font-badge text-2xl font-extrabold text-[#4F4F4F]">
                          {item.title}
                        </h3>
                      </div>

                      {item.strengths && (
                        <div className="flex flex-col gap-2">
                          <h4 className="text-center text-sm font-semibold text-[#8C8C8C]">
                            Strengths
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {item.strengths.map((line) => (
                              <li
                                key={line}
                                className="flex gap-1.5 text-sm leading-tight text-[#64748B]"
                              >
                                <span>•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.weaknesses && (
                        <div className="flex flex-col gap-2">
                          <h4 className="text-center text-sm font-semibold text-[#8C8C8C]">
                            Weaknesses
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {item.weaknesses.map((line) => (
                              <li
                                key={line}
                                className="flex gap-1.5 text-sm leading-tight text-[#64748B]"
                              >
                                <span>•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.features && (
                        <div className="flex flex-col gap-2">
                          <h4 className="text-center text-sm font-semibold text-[#8C8C8C]">
                            Features
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {item.features.map((line) => (
                              <li
                                key={line}
                                className="flex gap-1.5 text-sm leading-tight text-[#64748B]"
                              >
                                <span>•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "painPointCards") {
              return (
                <div key={index} className="grid gap-5 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[24px] border border-[#06B6D4]/20 bg-white p-5 sm:p-6"
                    >
                      {item.painPointIcon && (
                        <PainPointIconBadge name={item.painPointIcon} size={48} />
                      )}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-dm-sans text-lg font-bold leading-[27px] text-black">
                          {item.title}
                        </h3>
                        <p className="text-base leading-[23px] text-[#8C8C8C]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "plainCards") {
              return (
                <div key={index} className="grid gap-[30px] sm:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 rounded-[24px] border border-[#06B6D4]/20 bg-white p-6"
                    >
                      <h3 className="text-lg font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="text-base leading-[23px] text-[#8C8C8C]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "taskCards") {
              return (
                <div key={index} className="grid gap-6 sm:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-6 rounded-2xl border border-[#94A3B8]/20 bg-white p-6 sm:p-8"
                    >
                      {item.painPointIcon && (
                        <PainPointIconBadge name={item.painPointIcon} size={48} />
                      )}
                      <div className="flex flex-col gap-3">
                        <h3 className="font-badge text-xl font-bold text-black">
                          {item.title}
                        </h3>
                        <p className="text-base leading-6 text-[#64748B]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "iconCards") {
              const tint: Record<string, string> = {
                arrowUpRight: "#06B6D4",
                compass: "#8B5CF6",
                creditCard: "#F59E0B",
              };
              return (
                <div key={index} className="grid gap-[30px] sm:grid-cols-3">
                  {block.items.map((item) => {
                    const color = item.icon ? tint[item.icon] : undefined;
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col gap-4 rounded-[24px] border p-6 sm:p-[30px]"
                        style={
                          color
                            ? {
                                background: `linear-gradient(135deg, ${color}0D 0%, ${color}1A 100%)`,
                                borderColor: `${color}33`,
                              }
                            : undefined
                        }
                      >
                        {item.icon && (
                          <CaseStudyIconBadge name={item.icon} size={56} />
                        )}
                        <h3 className="text-2xl font-bold text-black">
                          {item.title}
                        </h3>
                        {item.lines ? (
                          <div className="flex flex-col gap-2.5">
                            {item.lines.map((line) => {
                              const [label, ...rest] = line.split(": ");
                              return (
                                <p
                                  key={line}
                                  className="text-base leading-[26px] text-black"
                                >
                                  <span className="font-semibold">
                                    {label}:
                                  </span>{" "}
                                  {rest.join(": ")}
                                </p>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-base leading-[26px] font-semibold text-black">
                            {item.text}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }

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
          }

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

          case "cardGroup":
            return (
              <div
                key={index}
                className="rounded-[24px] border border-[#94A3B8]/20 bg-[#F0F4F8] p-5 sm:p-10"
              >
                <BlockRenderer blocks={block.blocks} />
              </div>
            );

          case "thankYou":
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 py-10 sm:flex-row sm:gap-[25px]"
              >
                <h2 className="font-badge text-5xl font-bold text-black opacity-75 sm:text-8xl lg:text-[150px]">
                  {block.text}
                </h2>
                <div className="w-12 sm:w-24 lg:w-[170px]">
                  <ThankYouHand size="100%" />
                </div>
              </div>
            );

          default:
            return null;
        }
  }
}
