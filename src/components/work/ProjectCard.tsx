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
  const barHeight = "min-h-[58px] sm:h-[70px]";

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
        <div className="flex justify-end p-3 sm:p-[19px]">
          {project.live && (
            <span
              className={`font-badge z-10 flex items-center gap-1.5 rounded-card border bg-black/[0.02] px-2.5 py-1.5 text-[12px] leading-[16px] backdrop-blur-md sm:px-[10px] sm:py-[6px] sm:text-[11px] sm:leading-[14px] ${tone.badge}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {projectCardCopy.liveLabel}
            </span>
          )}
        </div>

        <div
          className={`flex items-center justify-between gap-3 px-4 py-5 backdrop-blur-md sm:gap-[13px] sm:px-8 sm:py-0 ${barHeight} ${tone.overlay}`}
        >
          <h3
            className={`font-heading text-[14px] leading-[1.3] font-semibold sm:text-[16px] sm:leading-[22px] ${tone.title}`}
          >
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full bg-white px-4 py-1.5 text-[13px] leading-[18px] font-medium text-black shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md sm:px-4 sm:py-[6px] sm:text-[11px]">
            {projectCardCopy.viewLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
