import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    { name: "Work", href: "/work" },
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
      <article className="mx-auto max-w-4xl px-6 py-24">
        <span className="text-sm font-semibold tracking-wide text-accent-strong uppercase">
          {project.tag}
        </span>
        <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-body">
          {project.overview}
        </p>

        <div className="mt-16">
          <BlockRenderer blocks={project.content} />
        </div>
      </article>
    </>
  );
}
