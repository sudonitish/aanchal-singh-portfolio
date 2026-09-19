import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WorkExperience from "@/components/home/WorkExperience";
import LatestWork from "@/components/home/LatestWork";
import VisualsPreview from "@/components/home/VisualsPreview";
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
      <div className="flex flex-col gap-16 px-5 py-10 sm:gap-[77px] sm:py-[51px] lg:gap-[120px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[256px]">
        <div id="work" className="scroll-mt-24">
          <LatestWork />
        </div>
        <VisualsPreview />
      </div>
    </>
  );
}
