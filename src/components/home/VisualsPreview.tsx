import SectionHeading from "@/components/ui/SectionHeading";
import { homePage } from "@/data/content/home/data";

const placeholderTiles = [1, 2, 3];

export default function VisualsPreview() {
  return (
    <div className="flex flex-col gap-[30px]">
      <SectionHeading label={homePage.visualsLabel} viewAllHref="/visuals" />
      <div className="grid gap-[33px] sm:grid-cols-3">
        {placeholderTiles.map((tile) => (
          <div
            key={tile}
            className="aspect-[405/303] rounded-[20px] bg-surface-1"
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
