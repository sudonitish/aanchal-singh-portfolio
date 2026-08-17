import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/data/content/work/data";

interface ProjectCardProps {
  project: ProjectMeta;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative block h-full overflow-hidden rounded-[20px] ${project.cardBg}`}
    >
      <Image
        src={project.cardImage}
        alt=""
        fill
        aria-hidden
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      {project.live && (
        <span className="font-badge absolute top-6 right-6 z-10 flex items-center gap-1.5 rounded-[20px] border border-[#251548]/60 bg-black/[0.02] px-3 py-2 text-[14px] leading-[18px] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-[#0D2B1F]/20 px-5 py-5 sm:px-10">
        <h3 className="font-heading text-[16px] leading-[1.3] font-semibold text-white sm:text-[20px] sm:leading-7">
          {project.name}
        </h3>
        <span className="shrink-0 rounded-full bg-white px-5 py-2 text-[14px] leading-[18px] font-medium text-black">
          View
        </span>
      </div>
    </Link>
  );
}
