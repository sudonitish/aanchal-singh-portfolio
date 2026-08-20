import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/data/content/work/data";
import { projectCardCopy } from "@/data/content/work/data";

interface ProjectCardProps {
  project: ProjectMeta;
  size?: "featured" | "grid";
}

const toneClasses = {
  light: {
    overlay: "bg-overlay-tint-light/20",
    title: "text-title-on-light",
    badge: "border-badge-border text-badge-border",
  },
  dark: {
    overlay: "bg-overlay-tint/20",
    title: "text-title-on-dark",
    badge: "border-white text-white",
  },
} as const;

export default function ProjectCard({ project, size = "grid" }: ProjectCardProps) {
  const tone = toneClasses[project.tone];
  const barHeight =
    size === "featured"
      ? "min-h-[60px] sm:h-[75px]"
      : "min-h-[90px] sm:h-[145px]";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative grid h-full grid-cols-1 grid-rows-1 overflow-hidden rounded-card ${project.cardBg}`}
    >
      <Image
        src={project.cardImage}
        alt=""
        fill
        aria-hidden
        className="col-start-1 row-start-1 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      <div className="col-start-1 row-start-1 flex h-full w-full flex-col justify-between">
        <div className="flex justify-end p-3 sm:p-6">
          {project.live && (
            <span
              className={`font-badge z-10 flex items-center gap-1.5 rounded-card border bg-black/[0.02] px-2.5 py-1.5 text-[12px] leading-[16px] sm:px-3 sm:py-2 sm:text-[14px] sm:leading-[18px] ${tone.badge}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {projectCardCopy.liveLabel}
            </span>
          )}
        </div>

        <div
          className={`flex items-center justify-between gap-3 px-4 py-3 backdrop-blur-md sm:gap-4 sm:px-10 sm:py-0 ${barHeight} ${tone.overlay}`}
        >
          <h3
            className={`font-heading text-[14px] leading-[1.3] font-semibold sm:text-[20px] sm:leading-7 ${tone.title}`}
          >
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full bg-white px-4 py-1.5 text-[13px] leading-[18px] font-medium text-black sm:px-5 sm:py-2 sm:text-[14px]">
            {projectCardCopy.viewLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
