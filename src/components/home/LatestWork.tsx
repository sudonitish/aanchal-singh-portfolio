"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/work/ProjectCard";
import { projectsMeta } from "@/data/content/work/data";
import { homePage } from "@/data/content/home/data";

export default function LatestWork() {
  const [first, ...rest] = projectsMeta.filter((project) => project.featured);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;

    const updateHeight = () => setGridHeight(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <SectionHeading label={homePage.latestWorkLabel} />
      <div className="flex flex-col gap-6">
        <div ref={featuredRef} className="aspect-[4/3] w-full sm:aspect-[1281/620]">
          <ProjectCard project={first} size="featured" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <div
              key={project.slug}
              className="aspect-[625/600] w-full"
              style={gridHeight ? { aspectRatio: "auto", height: gridHeight } : undefined}
            >
              <ProjectCard project={project} size="grid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
