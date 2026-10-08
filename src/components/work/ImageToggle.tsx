"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ToggleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageToggleProps {
  images: ToggleImage[];
  /** How long each image holds before the next swap, in ms. */
  intervalMs?: number;
}

const SWAP_MS = 700;

/**
 * Stacks images in one slot. On each swap the front image slides out to the
 * right while the next one slides in from the right from behind it, then both
 * hold until the next swap. Pauses while off screen and when the visitor
 * prefers reduced motion.
 */
export default function ImageToggle({ images, intervalMs = 3000 }: ImageToggleProps) {
  const [front, setFront] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let settle: number | undefined;
    const id = window.setInterval(() => {
      const target = (front + 1) % images.length;
      setNext(target);
      settle = window.setTimeout(() => {
        setFront(target);
        setNext(null);
      }, SWAP_MS);
    }, intervalMs);
    return () => {
      window.clearInterval(id);
      if (settle) window.clearTimeout(settle);
    };
  }, [visible, front, images.length, intervalMs]);

  return (
    <div ref={ref} className="grid w-full overflow-hidden">
      {images.map((img, index) => {
        const isOut = next !== null && index === front;
        const isIn = next !== null && index === next;
        const isFront = next === null && index === front;
        const style = isOut
          ? { zIndex: 10, animation: `toggle-out ${SWAP_MS}ms ease-in-out forwards` }
          : isIn
            ? { zIndex: 0, animation: `toggle-in ${SWAP_MS}ms ease-in-out forwards` }
            : isFront
              ? { zIndex: 10 }
              : { zIndex: 0, transform: "translateX(100%)" };
        return (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            aria-hidden={index !== front}
            className="col-start-1 row-start-1 h-auto w-full self-start"
            style={style}
          />
        );
      })}
    </div>
  );
}
