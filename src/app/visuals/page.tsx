import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Visuals",
  description: "A visual gallery by Aanchal Singh.",
  alternates: { canonical: "/visuals" },
};

const placeholderTiles = Array.from({ length: 23 }, (_, i) => i);

export default function VisualsPage() {
  return (
    <Container className="flex flex-col gap-16 py-10 sm:gap-20 sm:py-16">
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
        <div className="flex aspect-[502/350] items-center justify-center rounded-card border border-[#FBECD6] bg-white">
          <div className="h-[75%] w-[75%] rounded-2xl bg-surface-1" aria-hidden />
        </div>
        {placeholderTiles.map((tile) => (
          <div
            key={tile}
            className="aspect-[502/350] rounded-card bg-surface-4"
            aria-hidden
          />
        ))}
      </div>
    </Container>
  );
}
