import { assets } from "@/data/config/assets";

export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
  opacity: number;
}

export const clientLogos: ClientLogo[] = [
  {
    name: "Value Research",
    src: `${assets.workLogosDir}/valueresearch.svg`,
    width: 97.78,
    height: 25.67,
    opacity: 1,
  },
  {
    name: "Dynamic Mavens Consultancy",
    src: `${assets.workLogosDir}/dmc.svg`,
    width: 88.28,
    height: 26.37,
    opacity: 1,
  },
  {
    name: "Stimulus",
    src: `${assets.workLogosDir}/stimulus.svg`,
    width: 98.16,
    height: 52.35,
    opacity: 1,
  },
  {
    name: "Brewing Gadgets",
    src: `${assets.workLogosDir}/brewing-gadgets.svg`,
    width: 128.2,
    height: 32.24,
    opacity: 1,
  },
  {
    name: "Nespresso",
    src: `${assets.workLogosDir}/nespresso.svg`,
    width: 120.52,
    height: 22.04,
    opacity: 1,
  },
  {
    name: "Bajaj",
    src: `${assets.workLogosDir}/bajaj.svg`,
    width: 31.29,
    height: 38.38,
    opacity: 1,
  },
  {
    name: "StelMart",
    src: `${assets.workLogosDir}/stelmart.svg`,
    width: 109.29,
    height: 22.14,
    opacity: 1,
  },
];
