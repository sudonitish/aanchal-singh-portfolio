import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import BlockRenderer from "@/components/work/BlockRenderer";
import { projectsMeta } from "@/data/content/work/data";
import { getProjectBySlug } from "@/data/content/work-details/data";
import { getProjectMetadata, getProjectJsonLd } from "@/data/content/work-details/meta";
import { getBreadcrumbJsonLd } from "@/lib/breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsMeta.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return getProjectMetadata(slug);
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const jsonLd = getProjectJsonLd(slug);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Work", href: "/#work" },
    { name: project.name, href: `/work/${slug}` },
  ]);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="relative">
        <div className="px-5 pt-6 sm:pt-[26px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-8">
          <Nav />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[220px] h-[161px] w-screen -translate-x-1/2 blur-[90px]"
          style={{ background: project.heroBg ?? "rgba(251, 236, 214, 1)" }}
        />
        <div className="relative py-24">
          <article>
            <div className="relative mx-auto flex max-w-[1120px] flex-col items-center gap-4 px-5 text-center">
              <span className="font-dm-sans flex items-center gap-1.5 rounded-full border border-[#06B6D4]/80 px-[17px] py-[7px] text-[13px] font-semibold text-[#06B6D4]">
                <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
                {project.tag}
              </span>
              <h1 className="text-[32px] font-extrabold leading-[1.15] text-black sm:text-[48px] lg:text-[58px] lg:leading-[70px]">
                {project.name}
              </h1>
              <p className="max-w-2xl text-[14px] leading-[18px] text-[#8C8C8C]">
                {project.overview}
              </p>
            </div>

            <div className="mt-16">
              <BlockRenderer blocks={project.content} wideGutter={project.wideGutter ?? 150} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
