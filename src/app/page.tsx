import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WorkExperience from "@/components/home/WorkExperience";
import LatestWork from "@/components/home/LatestWork";
import VisualsPreview from "@/components/home/VisualsPreview";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/content/profile/data";
import { SITE_URL } from "@/data/config/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  url: SITE_URL,
  email: personalInfo.contact.find((c) => c.type === "email")?.value,
  sameAs: personalInfo.contact
    .filter((c) => c.type === "linkedin")
    .map((c) => c.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <WorkExperience />
      <Container className="flex flex-col gap-[150px] py-16">
        <LatestWork />
        <VisualsPreview />
      </Container>
    </>
  );
}
