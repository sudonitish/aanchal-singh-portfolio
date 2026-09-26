import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Visuals",
  description: "A visual gallery by Aanchal Singh.",
  alternates: { canonical: "/visuals" },
};

const placeholderTiles = Array.from({ length: 18 }, (_, i) => i);

export default function VisualsPage() {
  return (
    <>
      <div className="px-5 pt-8 sm:pt-[38px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-16">
        <Nav />
      </div>
      <div className="flex flex-col gap-16 px-5 py-10 sm:gap-16 sm:py-[51px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold text-ink sm:text-[38px] lg:text-[48px]">
            Design Showcase
          </h1>
          <p className="max-w-2xl text-lg text-[#6b6d75] sm:text-[19px]">
            A collection of design explorations, creative experiments, and
            visual storytelling
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[502/350] overflow-hidden rounded-card border border-[#FBECD6] bg-white">
            <video
              src="/assets/visuals/visual-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <video
              src="/assets/visuals/visual-4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <video
              src="/assets/visuals/visual-5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <video
              src="/assets/visuals/visual-6.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <Image
              src="/assets/visuals/visual-2.png"
              alt=""
              fill
              aria-hidden
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
          </div>
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <Image
              src="/assets/visuals/visual-3.png"
              alt=""
              fill
              aria-hidden
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
          </div>
          {placeholderTiles.map((tile) => (
            <div
              key={tile}
              className="flex aspect-[502/350] items-center justify-center rounded-card bg-surface-4"
            >
              <span className="font-dm-sans text-[14px] font-semibold text-[#6b6d75]">
                Coming soon...
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
