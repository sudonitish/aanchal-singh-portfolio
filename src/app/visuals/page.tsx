import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Visuals",
  description: "A visual gallery by Aanchal Singh.",
  alternates: { canonical: "/visuals" },
};

const placeholderTiles = Array.from({ length: 20 }, (_, i) => i);

export default function VisualsPage() {
  return (
    <>
      <div className="px-5 pt-6 sm:pt-8 min-[640px]:px-[40px] min-[1020px]:px-[100px] min-[1200px]:px-[120px] min-[1500px]:px-[150px] lg:pt-10">
        <Nav />
      </div>
      <div className="flex flex-col gap-16 px-5 py-10 sm:gap-20 sm:py-16 min-[640px]:px-[40px] min-[1020px]:px-[100px] min-[1200px]:px-[120px] min-[1500px]:px-[150px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl lg:text-[60px]">
            Design Showcase
          </h1>
          <p className="max-w-2xl text-lg text-[#6b6d75] sm:text-2xl">
            A collection of design explorations, creative experiments, and
            visual storytelling
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[502/350] overflow-hidden rounded-card border border-[#FBECD6] bg-white">
            <Image
              src="/assets/visuals/visual-1.png"
              alt=""
              fill
              aria-hidden
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 50vw"
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
          <div className="relative aspect-[502/350] overflow-hidden rounded-card bg-surface-4">
            <Image
              src="/assets/visuals/visual-4.png"
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
              className="aspect-[502/350] rounded-card bg-surface-4"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </>
  );
}
