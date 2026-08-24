import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AboutIntro from "@/components/about/AboutIntro";
import HowIDesign from "@/components/about/HowIDesign";
import MoreAboutMe from "@/components/about/MoreAboutMe";
import Expectations from "@/components/about/Expectations";
import Tools from "@/components/about/Tools";
import ClosingCta from "@/components/about/ClosingCta";
import { aboutPage } from "@/data/content/about/data";

export const metadata: Metadata = {
  title: "About",
  description: `${aboutPage.introPrefix}${aboutPage.introName}${aboutPage.introRest}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Container className="flex flex-col gap-20 py-10 sm:gap-28 sm:py-16 lg:gap-[150px]">
        <HowIDesign />
        <MoreAboutMe />
        <Expectations />
        <Tools />
        <ClosingCta />
      </Container>
    </>
  );
}
