"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, TrendingUp } from "lucide-react";

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
  image: string;
  highlight?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Recognition",
    date: "Jan 2026",
    title: "TASHRA Achieves Quality Excellence",
    description: "Recognized for maintaining 100% quality standards in government tender deliveries across multiple sectors",
    link: "/experience",
    image: "/images/news-recognition.png",
    highlight: true,
  },
  {
    id: 2,
    category: "Products",
    date: "Dec 2025",
    title: "New Baby Kit Books Range",
    description: "Expanded product line for government education schemes with enhanced specifications",
    link: "/products",
    image: "/images/product-books.png",
  },
  {
    id: 3,
    category: "Partnership",
    date: "Nov 2025",
    title: "State Government Collaboration",
    description: "New partnership established for multi-year institutional supply contracts",
    link: "/partnership",
    image: "/images/news-partnership.png",
  },
  {
    id: 4,
    category: "Infrastructure",
    date: "Oct 2025",
    title: "Aluminium Gates Project Complete",
    description: "Successfully delivered large-scale aluminium fabrication project for public institutions",
    link: "/products",
    image: "/images/news-gate.png",
  },
  {
    id: 5,
    category: "Milestone",
    date: "Sep 2025",
    title: "50+ Tenders Milestone",
    description: "Celebrating successful completion of over 50 government tenders with zero quality complaints",
    link: "/experience",
    image: "/images/news-milestone.png",
  },
];

export function NewsCards() {
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
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - TCS Style */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              What&apos;s New
            </h2>
            <p className="text-gray-600 text-lg">
              Latest updates, achievements, and announcements from TASHRA
            </p>
          </div>

          {/* Navigation Arrows - TCS Style */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-gray-500 italic mr-2">Swipe Right</span>
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
            <span className="text-sm text-gray-500 italic ml-2">Swipe Left</span>
          </div>
        </div>

        {/* Cards Container - TCS Style Horizontal Scroll */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex-shrink-0 w-[300px] sm:w-[350px] group snap-start"
            >
              <div className="h-full bg-white border border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg transition-all duration-300">
                {/* Card Image */}
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#1e3a5f] text-xs font-semibold shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Highlight Badge */}
                  {item.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="flex items-center gap-1 px-3 py-1.5 bg-[#2d6a4f]/90 backdrop-blur-sm text-white text-xs font-semibold shadow-sm">
                        <TrendingUp className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1e3a5f] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-[#1e3a5f] font-medium text-sm">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 gap-2 sm:hidden">
          {newsItems.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#1e3a5f] w-6" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
