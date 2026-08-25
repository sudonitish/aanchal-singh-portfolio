import Nav from "@/components/layout/Nav";
import { aboutPage } from "@/data/content/about/data";
import PortraitCollage from "@/components/about/PortraitCollage";

export default function AboutIntro() {
  return (
    <section className="relative flex min-h-[105vh] flex-col overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute"
        style={{
          width: "100.6vw",
          height: "78.9vw",
          left: "calc(-31.9vw + 200px)",
          top: "calc(3.07vw + 100px)",
          background:
            "linear-gradient(202.77deg, #B1E5F2 13.88%, #EAE1D3 63.92%)",
          borderRadius: "50%",
          transform: "rotate(14.78deg)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: "100.6vw",
          height: "78.9vw",
          left: "calc(57.55vw + 200px)",
          top: "calc(6.46vw + 420px)",
          background:
            "linear-gradient(202.77deg, #B1E5F2 6.1%, #EAE1D3 27.36%)",
          borderRadius: "50%",
          transform: "rotate(-56.3deg)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col px-5 pt-6 sm:px-10 sm:pt-8 lg:px-[150px] lg:pt-10">
        <Nav />

        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-12 sm:py-16 lg:items-start lg:justify-center lg:py-20 lg:pt-40">
          <div className="flex w-full flex-col gap-4 lg:w-[50%]">
            <span className="font-heading text-[16px] leading-[16px] font-medium tracking-normal text-body uppercase">
              {aboutPage.eyebrow}
            </span>
            <p className="font-heading text-[22px] leading-[30px] font-normal tracking-normal text-body sm:text-[26px] sm:leading-[34px] lg:text-[30px] lg:leading-[40px]">
              {aboutPage.introPrefix}
              <span className="font-brush text-[1.67em] leading-none">
                {aboutPage.introName.charAt(0)}
              </span>
              <span className="font-brush text-[1.33em] leading-none">
                {aboutPage.introName.slice(1)}
              </span>
              {aboutPage.introRest}
            </p>
          </div>

          <div className="w-full lg:hidden">
            <PortraitCollage />
          </div>
        </div>
      </div>

      <div className="hidden lg:absolute lg:top-12 lg:right-[40px] lg:block lg:w-[820px]">
        <PortraitCollage />
      </div>
    </section>
  );
}
