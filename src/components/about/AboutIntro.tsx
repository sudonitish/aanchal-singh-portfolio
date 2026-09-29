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
          left: "calc(-31.9vw + 120px)",
          top: "calc(3.07vw + 180px)",
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
          left: "calc(57.55vw + 80px)",
          top: "calc(6.46vw + 380px)",
          background:
            "linear-gradient(202.77deg, #B1E5F2 6.1%, #EAE1D3 27.36%)",
          borderRadius: "50%",
          transform: "rotate(-56.3deg)",
        }}
        aria-hidden
      />

      <div className="relative px-5 pt-8 sm:pt-[38px] min-[640px]:px-[32px] min-[1020px]:px-[80px] min-[1200px]:px-[96px] min-[1500px]:px-[120px] lg:pt-16">
        <Nav />
      </div>

      <div className="relative flex flex-1 flex-col px-5 min-[640px]:px-[32px] min-[1020px]:px-[80px]">
        <div className="flex flex-1 flex-col items-center justify-center gap-12 pt-16 pb-16 min-[640px]:pt-[64px] min-[640px]:pb-[64px] min-[1200px]:items-start min-[1200px]:justify-start min-[1200px]:pb-16 min-[1200px]:pt-[280px] min-[1536px]:pt-[320px] min-[1600px]:justify-end min-[1600px]:pb-48">
          <div className="flex w-full flex-col gap-4 min-[1200px]:w-[47%] min-[1450px]:w-[52.5%]">
            <span className="font-heading text-[12px] leading-[13px] font-medium tracking-normal text-body uppercase">
              {aboutPage.eyebrow}
            </span>
            <p className="font-heading text-[18px] leading-6 font-normal tracking-normal text-body sm:text-[18px] sm:leading-6 lg:text-[24px] lg:leading-[32px]">
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

          <div className="w-full min-[1200px]:hidden">
            <PortraitCollage />
          </div>
        </div>
      </div>

      <div className="hidden min-[1200px]:absolute min-[1200px]:bottom-0 min-[1200px]:right-[40px] min-[1200px]:block min-[1200px]:w-[559px] min-[1450px]:w-[710px]">
        <PortraitCollage />
      </div>
    </section>
  );
}
