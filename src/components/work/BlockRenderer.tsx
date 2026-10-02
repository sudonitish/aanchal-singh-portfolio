import Image from "next/image";
import type { CSSProperties } from "react";
import type { Block } from "@/lib/content";
import InterviewFindings from "@/components/work/InterviewFindings";
import {
  CaseStudyIcon,
  CaseStudyIconBadge,
  PainPointIconBadge,
  PlatformIcon,
  ThankYouHand,
} from "@/components/work/CaseStudyIcons";

interface BlockRendererProps {
  blocks: Block[];
  wideGutter?: number;
}

const SECTION_PADDING_CLASS =
  "px-5 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[min(96px,var(--wide-gutter))] min-[1500px]:px-[var(--wide-gutter)]";

function SectionDivider({
  withDot = false,
  dotColor = "#06B6D4",
}: {
  withDot?: boolean;
  dotColor?: string;
}) {
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
      <div
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ background: dotColor }}
      />
      <div className="h-px flex-1" style={{ background: fade }} />
    </div>
  );
}

export default function BlockRenderer({ blocks, wideGutter = 150 }: BlockRendererProps) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, index) => {
        const isSelfPadded =
          (block.type === "image" &&
            (block.fullBleed || block.paddingX || block.paddingY || block.background)) ||
          (block.type === "imageStack" && block.fullBleed);
        const prev = blocks[index - 1];
        const noGap =
          index > 0 &&
          prev &&
          (((prev.type === "image" || prev.type === "imageStack") && prev.noGapAfter) ||
            (prev.type === "heading" && prev.noSpacingAfter));
        const tightGap =
          index > 0 && prev && prev.type === "heading" && prev.tightSpacingAfter;
        const customSpacing =
          index > 0 &&
          prev &&
          (prev.type === "heading" ||
            prev.type === "image" ||
            prev.type === "interviewFindings" ||
            prev.type === "divider" ||
            prev.type === "briefHeader" ||
            prev.type === "reflectionHeader" ||
            prev.type === "imageGrid" ||
            prev.type === "imageStack" ||
            prev.type === "splitList" ||
            prev.type === "leadList")
            ? prev.spacingAfter
            : undefined;
        const customSpacingMobile =
          index > 0 &&
          prev &&
          (prev.type === "heading" ||
            prev.type === "image" ||
            prev.type === "interviewFindings" ||
            prev.type === "divider" ||
            prev.type === "briefHeader" ||
            prev.type === "reflectionHeader" ||
            prev.type === "imageGrid" ||
            prev.type === "imageStack" ||
            prev.type === "splitList" ||
            prev.type === "leadList")
            ? (prev.spacingAfterMobile ?? prev.spacingAfter)
            : undefined;
        const spacingClass =
          index === 0 || noGap
            ? ""
            : customSpacing
              ? "spacing-custom"
              : block.type === "thankYou"
                ? "mt-24 sm:mt-[102px] lg:mt-[256px]"
                : tightGap
                  ? "mt-4 sm:mt-5 lg:mt-6"
                  : "mt-12 sm:mt-[51px] lg:mt-16";
        const customSpacingStyle = customSpacing
          ? ({
              "--spacing-mobile": `${customSpacingMobile}px`,
              "--spacing-desktop": `${customSpacing}px`,
            } as CSSProperties)
          : undefined;
        if (isSelfPadded) {
          return (
            <div key={index} className={spacingClass} style={customSpacingStyle}>
              <BlockItem block={block} index={index} />
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`${spacingClass} ${SECTION_PADDING_CLASS}`}
            style={
              {
                "--wide-gutter": `${wideGutter}px`,
                ...customSpacingStyle,
              } as CSSProperties
            }
          >
            <BlockItem block={block} index={index} />
          </div>
        );
      })}
    </div>
  );
}

function BlockItem({ block, index }: { block: Block; index: number }) {
  {
    switch (block.type) {
          case "divider":
            return (
              <SectionDivider
                key={index}
                withDot={block.withDot}
                dotColor={block.dotColor}
              />
            );

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
                  <span className="text-[11px] font-bold tracking-[0.15em] text-accent-strong uppercase">
                    {block.eyebrow}
                  </span>
                )}
                <h2 className="text-[28px] font-extrabold leading-[1.2] text-black sm:text-[32px] sm:leading-[38px]">
                  {block.title}
                </h2>
                {block.lineBelowTitle && (
                  <div className="-my-2.5 w-full">
                    <SectionDivider />
                  </div>
                )}
                {block.subtitle && (
                  <p className="text-[14px] uppercase leading-[18px] tracking-wide text-[#8C8C8C]">
                    {block.subtitle}
                  </p>
                )}
                {block.description && (
                  <p className="max-w-3xl text-[14px] leading-[18px] whitespace-pre-line text-[#8C8C8C]">
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
                <div key={index} className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-[38px]">
                  {block.cards.map((card, i) => (
                    <div key={card.label} className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
                      <span
                        className="font-badge text-2xl font-extrabold"
                        style={{ color: numberColors[i % numberColors.length] }}
                      >
                        {card.text}
                      </span>
                      <span className="text-[11px] text-[#64748B]">{card.label}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={index} className="grid gap-6 sm:grid-cols-3">
                {block.cards.map((card) => {
                  const color = card.icon ? tint[card.icon] : undefined;
                  return (
                    <div
                      key={card.label}
                      className="flex flex-col gap-4 rounded-[24px] border p-[19px] sm:p-[19px]"
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
                      <h3 className="text-[19px] font-bold leading-[29px] text-black">
                        {card.label}
                      </h3>
                      <p className="text-[13px] leading-[21px] text-[#8C8C8C]">
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
              <div key={index} className="flex flex-wrap justify-center gap-8">
                {block.quotes.map((quote, quoteIndex) => (
                  <blockquote
                    key={quoteIndex}
                    className="max-w-xs text-center text-base font-medium leading-[24px] text-[#194776] sm:text-base sm:leading-6"
                  >
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                ))}
              </div>
            );

          case "list": {
            if (block.variant === "chips") {
              return (
                <div key={index} className="flex flex-wrap justify-center gap-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-1.5 rounded-2xl border border-[#94A3B8] bg-white px-[13px] py-2"
                    >
                      {item.icon && <CaseStudyIcon name={item.icon} />}
                      <span className="flex flex-col leading-tight">
                        <span className="text-[10px] text-[#64748B]">
                          {item.title}
                        </span>
                        <span className="text-[11px] font-semibold text-[#1A202C]">
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
                <div key={index} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-4 rounded-[24px] border border-[#06B6D4]/20 bg-white p-6"
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        {item.platform && (
                          <PlatformIcon name={item.platform} size={38} />
                        )}
                        <h3 className="font-badge text-[19px] font-extrabold text-[#4F4F4F]">
                          {item.title}
                        </h3>
                      </div>

                      {item.strengths && (
                        <div className="flex flex-col gap-1.5">
                          <h4 className="text-center text-[11px] font-semibold text-[#8C8C8C]">
                            Strengths
                          </h4>
                          <ul className="flex flex-col gap-[5px]">
                            {item.strengths.map((line) => (
                              <li
                                key={line}
                                className="flex gap-[5px] text-[11px] leading-tight text-[#64748B]"
                              >
                                <span>•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.weaknesses && (
                        <div className="flex flex-col gap-1.5">
                          <h4 className="text-center text-[11px] font-semibold text-[#8C8C8C]">
                            Weaknesses
                          </h4>
                          <ul className="flex flex-col gap-[5px]">
                            {item.weaknesses.map((line) => (
                              <li
                                key={line}
                                className="flex gap-[5px] text-[11px] leading-tight text-[#64748B]"
                              >
                                <span>•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.features && (
                        <div className="flex flex-col gap-1.5">
                          <h4 className="text-center text-[11px] font-semibold text-[#8C8C8C]">
                            Features
                          </h4>
                          <ul className="flex flex-col gap-[5px]">
                            {item.features.map((line) => (
                              <li
                                key={line}
                                className="flex gap-[5px] text-[11px] leading-tight text-[#64748B]"
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
                <div key={index} className="grid gap-4 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-[13px] rounded-[24px] border border-[#06B6D4]/20 bg-white p-5 sm:p-5"
                    >
                      {item.painPointIcon && (
                        <div className="shrink-0">
                          <PainPointIconBadge name={item.painPointIcon} size={48} />
                        </div>
                      )}
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-[14px] font-bold leading-[22px] text-black">
                          {item.title}
                        </h3>
                        <p className="text-[13px] leading-[18px] text-[#8C8C8C]">
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
                <div key={index} className="grid gap-6 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-1.5 rounded-[24px] border border-[#06B6D4]/20 bg-white p-6"
                    >
                      <h3 className="text-[14px] font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-[18px] text-[#8C8C8C]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.variant === "taskCards") {
              return (
                <div key={index} className="grid gap-[19px] sm:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-[19px] rounded-2xl border border-[#94A3B8]/20 bg-white p-6 sm:p-[26px]"
                    >
                      {item.painPointIcon && (
                        <PainPointIconBadge name={item.painPointIcon} size={48} />
                      )}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="font-badge text-base font-bold text-black">
                          {item.title}
                        </h3>
                        <p className="text-[13px] leading-[19px] text-[#64748B]">
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
                <div key={index} className="grid gap-6 sm:grid-cols-3">
                  {block.items.map((item) => {
                    const color = item.icon ? tint[item.icon] : undefined;
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col gap-[13px] rounded-[24px] border p-[19px] sm:p-[19px]"
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
                        <h3 className="text-[19px] font-bold text-black">
                          {item.title}
                        </h3>
                        {item.lines ? (
                          <div className="flex flex-col gap-2">
                            {item.lines.map((line) => {
                              const [label, ...rest] = line.split(": ");
                              return (
                                <p
                                  key={line}
                                  className="text-[13px] leading-[21px] text-black"
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
                          <p className="text-[13px] leading-[21px] font-semibold text-black">
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

          case "image": {
            const image = (
              <Image
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className={
                  block.rounded === false
                    ? "h-auto w-full"
                    : "h-auto w-full rounded-[20px]"
                }
              />
            );
            const labelEl = block.label && (
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "19px",
                  lineHeight: "130%",
                  color: "#212427",
                }}
              >
                {block.label}
              </span>
            );
            if (!block.background && !block.paddingX && !block.paddingY && !block.fullBleed) {
              return labelEl ? (
                <div
                  key={index}
                  className="flex flex-col gap-4"
                  style={block.labelGap !== undefined ? { gap: block.labelGap } : undefined}
                >
                  {labelEl}
                  {image}
                </div>
              ) : (
                <div
                  key={index}
                  className={block.maxWidth ? "mx-auto" : undefined}
                  style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}
                >
                  {image}
                </div>
              );
            }
            return (
              <div
                key={index}
                className={[
                  block.fullBleed
                    ? "relative left-1/2 w-screen -translate-x-1/2"
                    : "",
                  block.paddingX
                    ? "px-5 min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[var(--section-x)]"
                    : "",
                  block.paddingY
                    ? "py-10 min-[640px]:py-[51px] min-[1020px]:py-16 min-[1200px]:py-[77px] min-[1500px]:py-[var(--section-y)]"
                    : "",
                  labelEl ? "flex flex-col gap-4" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={
                  {
                    background: block.background,
                    "--section-x": block.paddingX
                      ? `${block.paddingX}px`
                      : undefined,
                    "--section-y": block.paddingY
                      ? `${block.paddingY}px`
                      : undefined,
                  } as CSSProperties
                }
              >
                {labelEl}
                {image}
              </div>
            );
          }

          case "imageGrid":
            return (
              <div
                key={index}
                className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2"
              >
                {block.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="h-auto w-full"
                  />
                ))}
              </div>
            );

          case "imageStack": {
            const stack = (
              <div
                className={[
                  "flex flex-col",
                  block.paddingX ? SECTION_PADDING_CLASS : "",
                  block.paddingY
                    ? "py-10 min-[640px]:py-[51px] min-[1020px]:py-16 min-[1200px]:py-[77px] min-[1500px]:py-[var(--section-y)]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={
                  {
                    background: block.background,
                    backgroundSize: block.background?.startsWith("url(") ? "cover" : undefined,
                    backgroundPosition: block.background?.startsWith("url(") ? "center" : undefined,
                    gap: `clamp(24px, 5vw, ${block.gap ?? 60}px)`,
                    "--wide-gutter": block.paddingX
                      ? `${block.paddingX}px`
                      : undefined,
                    "--section-y": block.paddingY
                      ? `${block.paddingY}px`
                      : undefined,
                  } as CSSProperties
                }
              >
                {block.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="h-auto"
                    style={{ width: `${img.widthPercent ?? 100}%` }}
                  />
                ))}
              </div>
            );
            if (!block.fullBleed) {
              return <div key={index}>{stack}</div>;
            }
            return (
              <div
                key={index}
                className="relative left-1/2 w-screen -translate-x-1/2"
              >
                {stack}
              </div>
            );
          }

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

          case "briefHeader": {
            const eyebrowEl = (
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "8px",
                  lineHeight: "12px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: block.eyebrowColor ?? "#C4501A",
                }}
              >
                {block.eyebrow}
              </span>
            );
            const titleEl = (
              <h2
                className="max-w-full"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "clamp(26px, 5vw, 52px)",
                  lineHeight: "120%",
                  letterSpacing: "0px",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                {block.title}
              </h2>
            );
            const paragraphStyle = {
              fontFamily: "var(--font-heading)",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "150%",
              color: "#384149",
            } as const;
            const descriptionEl = Array.isArray(block.description) ? (
              <div className="flex max-w-full flex-col gap-[24px]">
                {block.description.map((paragraph, i) => (
                  <p key={i} style={paragraphStyle}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="max-w-full" style={paragraphStyle}>
                {block.descriptionLead && (
                  <span style={{ fontWeight: 600, color: "#000000" }}>
                    {block.descriptionLead}{" "}
                  </span>
                )}
                {block.description}
              </p>
            );

            if (block.layout === "stacked") {
              return (
                <div
                  key={index}
                  className="grid w-full grid-cols-1 gap-[24px] text-left lg:grid-cols-[1fr_1fr] lg:gap-x-[87px] lg:gap-y-[24px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <div className="flex flex-col items-start gap-[12px]">
                    {eyebrowEl}
                    {titleEl}
                  </div>
                  <div aria-hidden className="hidden lg:block" />
                  {descriptionEl}
                </div>
              );
            }

            return (
              <div
                key={index}
                className="grid w-full grid-cols-1 gap-[24px] text-left lg:grid-cols-[1fr_1fr] lg:gap-x-[87px] lg:gap-y-[24px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {block.eyebrow && (
                  <div className="flex flex-col items-start gap-[12px] lg:col-span-2">
                    {eyebrowEl}
                  </div>
                )}
                {titleEl}
                {descriptionEl}
              </div>
            );
          }

          case "splitList":
            return (
              <div
                key={index}
                className="grid w-full grid-cols-1 gap-[24px] text-left lg:grid-cols-[591fr_825fr] lg:gap-[213px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <div className="flex h-full flex-col items-start gap-[24px]">
                  <div className="flex flex-col items-start gap-[12px]">
                    {block.eyebrow && (
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "8px",
                          lineHeight: "12px",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                          color: block.eyebrowColor ?? "#C4501A",
                        }}
                      >
                        {block.eyebrow}
                      </span>
                    )}
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "clamp(26px, 5vw, 52px)",
                        lineHeight: "120%",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      {block.title}
                    </h2>
                  </div>
                  {block.description && (
                    <div className="flex flex-1 flex-col items-start justify-between gap-[24px]">
                      {Array.isArray(block.description) ? (
                        block.description.map((paragraph, i) =>
                          i === 0 ? (
                            <p
                              key={i}
                              style={{
                                fontFamily: "var(--font-heading)",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "150%",
                                color: "#384149",
                              }}
                            >
                              {paragraph}
                            </p>
                          ) : (
                            <div
                              key={i}
                              className="flex flex-row items-center gap-[12px]"
                            >
                              <div
                                className="h-full w-[4px] shrink-0 self-stretch"
                                style={{ background: "rgba(252, 74, 100, 1)" }}
                              />
                              <p
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "120%",
                                  color: "#8C8C8C",
                                }}
                              >
                                {paragraph}
                              </p>
                            </div>
                          ),
                        )
                      ) : (
                        <p
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "150%",
                            color: "#384149",
                          }}
                        >
                          {block.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-[12px]">
                  {block.items.map((item) => (
                    <p
                      key={item.label}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "150%",
                        color: "#000000",
                      }}
                    >
                      {item.label}
                      {item.text && (
                        <span style={{ fontWeight: 400, color: "#384149" }}>
                          {" "}
                          — {item.text}
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            );

          case "leadList":
            return (
              <div
                key={index}
                className="grid w-full grid-cols-1 gap-[24px] text-left lg:grid-cols-[1fr_1fr] lg:gap-x-[87px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <div className="flex flex-col items-start gap-[24px]">
                  <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "clamp(26px, 5vw, 52px)",
                    lineHeight: "120%",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  {block.title}
                </h2>
                <div className="flex w-full flex-col items-start gap-[24px]">
                  {block.lead && (
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "150%",
                        color: "#000000",
                      }}
                    >
                      {block.lead}
                    </p>
                  )}
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex w-full flex-col items-start gap-[12px]"
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "120%",
                          color: "#212427",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "120%",
                          color: "#384149",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            );

          case "interviewFindings":
            return (
              <InterviewFindings
                key={index}
                eyebrow={block.eyebrow}
                heading={block.heading}
                description={block.description}
                findings={block.findings}
                accentColor={block.accentColor}
              />
            );

          case "researchHeader":
            return (
              <div key={index} className="flex flex-col gap-14">
                <div className="flex flex-col items-start gap-4 border-b border-black/[0.08] pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-[19px]">
                  <h2 className="text-[32px] leading-[38px] font-extrabold text-[#1A202C] sm:text-[32px]">
                    {block.title}
                  </h2>
                  <div className="flex items-center gap-2.5">
                    <span className="h-0.5 w-8 shrink-0 bg-[#1A202C]/20" />
                    <span className="text-[11px] leading-4 font-medium text-[#8C8C8C]">
                      {block.stat}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 text-[10px] leading-[13px] font-semibold tracking-[2.4px] text-[#5A7A1A] uppercase">
                      {block.sectionLabel}
                    </span>
                    <span className="h-px flex-1 bg-black/[0.08]" />
                  </div>
                  {block.image && (
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      width={block.image.width}
                      height={block.image.height}
                      className="h-auto w-full rounded-[20px]"
                    />
                  )}
                  {block.cards && (
                    <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-black/[0.08] sm:grid-cols-2">
                      {block.cards.map((card) => (
                        <div key={card.src} className="group relative">
                          <Image
                            src={card.src}
                            alt={card.alt}
                            width={card.width}
                            height={card.height}
                            className="h-auto w-full"
                          />
                          <Image
                            src={card.hoverSrc}
                            alt=""
                            aria-hidden
                            width={card.width}
                            height={card.height}
                            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );

          case "reflectionHeader":
            return (
              <div
                key={index}
                className="flex flex-col items-start justify-between gap-[26px] sm:flex-row sm:items-center"
              >
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 text-[10px] leading-[13px] font-semibold tracking-[2.4px] text-[#5A7A1A] uppercase">
                      {block.eyebrow}
                    </span>
                    <span className="h-px flex-1 bg-black/[0.08]" />
                  </div>
                  <h2 className="max-w-[330.4px] text-[32px] leading-[48px] font-extrabold text-[#1A202C] sm:text-[32px] sm:leading-[48px]">
                    {block.title}
                  </h2>
                </div>
                <div className="flex shrink-0 items-center gap-2.5">
                  <span className="h-0.5 w-8 shrink-0 bg-[#1A202C]/20" />
                  <span className="text-[11px] leading-4 font-medium whitespace-nowrap text-[#8C8C8C]">
                    {block.stat}
                  </span>
                </div>
              </div>
            );

          case "problemSolution":
            return (
              <div key={index} className="flex flex-col gap-8">
                <div
                  className="flex flex-col gap-4 rounded-[24px] border p-6 sm:p-[26px]"
                  style={{
                    background:
                      "linear-gradient(94.48deg, rgba(255,255,255,0.031) 0.33%, rgba(0,0,0,0.093) 40.78%, rgba(0,0,0,0.093) 100%)",
                    borderColor: "#DDDDDD",
                  }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(0,0,0,0.2)" }}
                  >
                    <CaseStudyIconBadge
                      name="triangleWarning"
                      size={28}
                      color="#000000"
                      bare
                    />
                  </div>
                  <h3 className="text-[19px] leading-[29px] font-bold text-black">
                    {block.problem.title}
                  </h3>
                  <p className="text-[13px] leading-[21px] whitespace-pre-line text-[#8C8C8C]">
                    {block.problem.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {block.problem.points.map((point) => (
                      <div key={point.label} className="flex flex-col gap-2">
                        <p className="text-[13px] leading-[21px] font-semibold text-black">
                          {point.label}
                        </p>
                        <p className="text-[13px] leading-[21px] font-medium text-black">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-[24px] border p-6 sm:p-[26px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(216,251,120,0.15) 36.26%, rgba(216,251,120,0.15) 100%)",
                    borderColor: "#EEFFC7",
                  }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(216,251,120,0.3)" }}
                  >
                    <CaseStudyIconBadge
                      name="circleCheck"
                      size={28}
                      color="#AABE72"
                      bare
                    />
                  </div>
                  <h3 className="text-[19px] leading-[29px] font-bold text-black">
                    {block.solution.title}
                  </h3>
                  <p className="text-[13px] leading-[21px] text-[#8C8C8C]">
                    {block.solution.description}
                  </p>
                  {block.solution.note && (
                    <p className="text-[13px] leading-[21px] font-semibold text-black">
                      {block.solution.note}
                    </p>
                  )}
                </div>
              </div>
            );

          case "cardGroup":
            return (
              <div
                key={index}
                className="rounded-[24px] border border-[#94A3B8]/20 bg-[#F0F4F8] p-5 sm:p-[26px]"
              >
                <BlockRenderer blocks={block.blocks} />
              </div>
            );

          case "thankYou":
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
              >
                <h2 className="font-badge text-5xl font-bold text-black opacity-75 sm:text-[77px] lg:text-[120px]">
                  {block.text}
                </h2>
                <div className="w-12 sm:w-[77px] lg:w-[136px]">
                  <ThankYouHand size="100%" accentColor={block.accentColor} />
                </div>
              </div>
            );

          default:
            return null;
        }
  }
}
