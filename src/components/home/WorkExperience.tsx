import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-center gap-5 px-6 py-10">
      <p className="text-[14px] leading-[32px] font-bold text-black/60">
        Work Experience with
      </p>
      <div className="relative h-[52px] w-full max-w-[600px]">
        <Image
          src="/work-logos.png"
          alt="Value Research, Dynamic Mavens Consultancy, Stimulus, Brewing Gadgets, Nespresso, Bajaj, StelMart"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
