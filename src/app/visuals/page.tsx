import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visuals",
  description: "A visual gallery by Aanchal Singh.",
  alternates: { canonical: "/visuals" },
};

const placeholderTiles = Array.from({ length: 6 }, (_, i) => i);

export default function VisualsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-ink">Visuals</h1>
      <p className="mt-3 max-w-2xl text-lg text-body">
        A gallery of visual work - photography, illustration, and design
        explorations.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderTiles.map((tile) => (
          <div
            key={tile}
            className="h-[303px] rounded-[20px] bg-surface-1"
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
