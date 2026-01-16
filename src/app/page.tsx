import { Metadata } from "next";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { NewsCards } from "@/components/sections/NewsCards";
import { StatsSection } from "@/components/sections/StatsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("home");

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <NewsCards />
      <SolutionsSection />
      <CustomerStories />
      <StatsSection />
    </main>
  );
}
