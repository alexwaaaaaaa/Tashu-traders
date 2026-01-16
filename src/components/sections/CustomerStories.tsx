"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";

interface Story {
  id: number;
  client: string;
  title: string;
  description: string;
  link: string;
  category: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    client: "Government Education Dept",
    title: "Delivered 50,000+ Baby Kit Books",
    description: "Successfully completed bulk supply of educational materials meeting all tender specifications and quality standards",
    link: "/experience",
    category: "Education",
    image: "/images/story-education.png",
  },
  {
    id: 2,
    client: "Public Works Department",
    title: "Aluminium Gates Installation",
    description: "Large-scale installation of quality-tested aluminium gates across multiple government facilities",
    link: "/products",
    category: "Infrastructure",
    image: "/images/story-infrastructure.png",
  },
  {
    id: 3,
    client: "Healthcare Institutions",
    title: "Institutional Grocery Supply",
    description: "Reliable bulk grocery supply maintaining consistent quality for healthcare facilities",
    link: "/products",
    category: "Healthcare",
    image: "/images/story-healthcare.png",
  },
  {
    id: 4,
    client: "State Government",
    title: "Multi-year Tender Partnership",
    description: "Trusted partner for consecutive government tenders with 100% fulfillment rate",
    link: "/experience",
    category: "Government",
    image: "/images/story-government.png",
  },
  {
    id: 5,
    client: "Municipal Corporation",
    title: "Urban Infrastructure Supply",
    description: "Comprehensive supply of fabrication products for municipal development projects",
    link: "/products",
    category: "Urban Development",
    image: "/images/story-urban.png",
  },
];

export function CustomerStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Customer Stories
            </h2>
            <p className="text-gray-600 text-lg">
              See how we&apos;ve helped government departments and institutions achieve their procurement goals
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-gray-500 mr-2">Swipe Left</span>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 flex items-center justify-center border transition-all ${canScrollLeft
                  ? "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
                }`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 flex items-center justify-center border transition-all ${canScrollRight
                  ? "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
                }`}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500 ml-2">Swipe Right</span>
          </div>
        </div>

        {/* Stories Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <Link
              key={story.id}
              href={story.link}
              className="flex-shrink-0 w-[320px] sm:w-[380px] group snap-start"
            >
              <div className="h-full bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Card Image Header */}
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1e3a5f] text-xs font-medium rounded-full shadow-sm">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-[#1e3a5f] font-semibold text-sm mb-2">
                    {story.client}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a5f] transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {story.description}
                  </p>
                  <div className="flex items-center text-[#1e3a5f] font-medium text-sm">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#1e3a5f]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

