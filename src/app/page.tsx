import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("home");

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
    </main>
  );
}
