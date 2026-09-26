"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { homePage } from "@/data/content/home/data";

const visuals = [
  { src: "/assets/visuals/visual-1.mp4", type: "video" as const },
  { src: "/assets/visuals/visual-4.mp4", type: "video" as const },
  { src: "/assets/visuals/visual-5.mp4", type: "video" as const },
  { src: "/assets/visuals/visual-6.mp4", type: "video" as const },
  { src: "/assets/visuals/visual-2.png", type: "image" as const },
  { src: "/assets/visuals/visual-3.png", type: "image" as const },
];

const AUTOPLAY_INTERVAL_MS = 4000;

export default function VisualsPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
    const target = slides[index];
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  const scrollByOneSlide = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const nextIndex = (activeIndex + direction + visuals.length) % visuals.length;
      scrollToSlide(nextIndex);
    },
    [activeIndex, scrollToSlide],
  );

  useEffect(() => {
    const id = setInterval(() => scrollByOneSlide(1), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [scrollByOneSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDistance = Infinity;
      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft - track.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slideCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionHeading label={homePage.visualsLabel} viewAllHref="/visuals" />
      <div className="flex flex-col gap-4">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-[33px] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visuals.map((visual) => (
            <div
              key={visual.src}
              data-slide
              className="relative aspect-[405/303] w-full shrink-0 snap-center overflow-hidden rounded-[20px] bg-surface-1 sm:w-[calc(33.333%-22px)]"
            >
              {visual.type === "video" ? (
                <video
                  src={visual.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={visual.src}
                  alt=""
                  fill
                  aria-hidden
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {visuals.map((visual, index) => (
            <button
              key={visual.src}
              type="button"
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to visual ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-ink" : "w-2 bg-[#E9E9E9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
