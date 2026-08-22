import { aboutPage } from "@/data/content/about/data";

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(202.77deg, #b1e5f2 13.88%, #eae1d3 63.92%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 -right-40 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "linear-gradient(202.77deg, #b1e5f2 6.1%, #eae1d3 27.36%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col gap-4 py-16 sm:py-20 lg:py-28">
        <span className="text-sm font-semibold tracking-wide text-accent-strong uppercase">
          {aboutPage.eyebrow}
        </span>
        <p className="max-w-[900px] text-[22px] leading-[32px] font-normal text-body sm:text-[26px] sm:leading-[38px] lg:text-[30px] lg:leading-[44px]">
          {aboutPage.intro}
        </p>
      </div>
    </section>
  );
}
