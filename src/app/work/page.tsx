import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import ProjectCard from "@/components/work/ProjectCard";
import { projectsMeta } from "@/data/content/work/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and product design work by Aanchal Singh.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <div className="px-5 pt-6 sm:px-10 sm:pt-8 lg:px-[150px] lg:pt-10">
        <Nav />
      </div>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-ink">Work</h1>
        <p className="mt-3 max-w-2xl text-lg text-body">
          A collection of case studies exploring how I turn complexity into
          calm, usable experiences.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsMeta.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
