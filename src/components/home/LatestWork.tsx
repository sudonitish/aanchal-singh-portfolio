import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/work/ProjectCard";
import { projectsMeta } from "@/data/content/work/data";
import { homePage } from "@/data/content/home/data";

export default function LatestWork() {
  const [first, ...rest] = projectsMeta.filter((project) => project.featured);

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionHeading label={homePage.latestWorkLabel} />
      <div className="flex flex-col gap-[30px]">
        <div className="aspect-[1281/620] w-full">
          <ProjectCard project={first} />
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2">
          {rest.map((project) => (
            <div key={project.slug} className="aspect-[625/600] w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
