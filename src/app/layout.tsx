import {
  Plus_Jakarta_Sans,
  Inter,
  Cedarville_Cursive,
  Akaya_Kanadaka,
  Outfit,
} from "next/font/google";
import Footer from "@/components/layout/Footer";
import { metaDetails, viewPortDetails } from "@/data/content/layout/meta";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const cursiveFont = Cedarville_Cursive({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

const displayScriptFont = Akaya_Kanadaka({
  variable: "--font-display-script",
  subsets: ["latin"],
  weight: "400",
});

const badgeFont = Outfit({
  variable: "--font-badge",
  subsets: ["latin"],
});

export const metadata = metaDetails;
export const viewport = viewPortDetails;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${cursiveFont.variable} ${displayScriptFont.variable} ${badgeFont.variable} h-full antialiased`}
    >
      <body className="w-full min-h-full flex flex-col bg-white text-body">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
