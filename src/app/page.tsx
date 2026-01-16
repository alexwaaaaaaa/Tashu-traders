import { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

// Lazy load below-the-fold components
const NewsCards = dynamic(() => import("@/components/sections/NewsCards").then(mod => ({ default: mod.NewsCards })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const SolutionsSection = dynamic(() => import("@/components/sections/SolutionsSection").then(mod => ({ default: mod.SolutionsSection })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const CustomerStories = dynamic(() => import("@/components/sections/CustomerStories").then(mod => ({ default: mod.CustomerStories })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="h-64 bg-[#1e3a5f] animate-pulse" />,
});

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
