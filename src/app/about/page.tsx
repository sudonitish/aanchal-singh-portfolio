import type { Metadata } from "next";
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
      <div className="flex flex-col gap-20 px-5 py-10 sm:gap-[90px] sm:py-[51px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[197px] lg:gap-[120px]">
        <HowIDesign />
        <MoreAboutMe />
        <Expectations />
        <Tools />
        <ClosingCta />
      </div>
    </>
  );
}
