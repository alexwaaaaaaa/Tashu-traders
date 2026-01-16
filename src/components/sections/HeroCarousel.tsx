"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  overlayColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Building Trust Through Quality",
    subtitle: "Government Tender Specialist",
    description: "TASHRA delivers quality-assured products for government tenders with a proven track record in bulk supply across India",
    ctaText: "Learn more",
    ctaLink: "/about",
    image: "/images/hero-govt.png",
    overlayColor: "from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent",
  },
  {
    id: 2,
    title: "Baby Kit Books Supply",
    subtitle: "Government Scheme Partner",
    description: "Specialized in government scheme supplies with bulk printing and delivery capabilities as per tender specifications",
    ctaText: "View Products",
    ctaLink: "/products",
    image: "/images/hero-books.png",
    overlayColor: "from-[#1a4d3e]/90 via-[#1a4d3e]/70 to-transparent",
  },
  {
    id: 3,
    title: "Aluminium Gates & Fabrication",
    subtitle: "Quality Engineering",
    description: "Durable, quality-tested aluminium gates and fabrication products meeting institutional requirements",
    ctaText: "Explore",
    ctaLink: "/products",
    image: "/images/hero-aluminium.png",
    overlayColor: "from-[#152a45]/90 via-[#152a45]/70 to-transparent",
  },
  {
    id: 4,
    title: "Partner With TASHRA",
    subtitle: "Collaboration Opportunities",
    description: "Join our network of contractors and consultants for government tender opportunities across multiple sectors",
    ctaText: "Discuss Partnership",
    ctaLink: "/partnership",
    image: "/images/hero-partnership.png",
    overlayColor: "from-[#0f1c2e]/90 via-[#0f1c2e]/70 to-transparent",
  },
];

const SlideContent = memo(function SlideContent({ slide, isActive }: { slide: Slide; isActive: boolean }) {
  return (
    <div className="relative z-30 h-full flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {slide.subtitle && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 transition-all duration-500 ${
              isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}>
              <span className="w-2 h-2 bg-[#2d6a4f] rounded-full" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                {slide.subtitle}
              </span>
            </div>
          )}

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 transition-all duration-500 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {slide.title}
          </h1>

          <p className={`text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-xl transition-all duration-500 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {slide.description}
          </p>

          <div className={`transition-all duration-500 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <Link
              href={slide.ctaLink}
              className="inline-flex items-center gap-3 text-white font-medium text-lg group"
            >
              <span className="border-b-2 border-white/50 group-hover:border-white pb-1 transition-colors">
                {slide.ctaText}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[calc(100vh-72px)] min-h-[500px] max-h-[800px] overflow-hidden bg-gray-900">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
              />
            </div>

            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor} z-20`} />

            <SlideContent slide={slide} isActive={index === currentSlide} />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-12 bg-white"
                        : "w-6 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white border border-white/30 hover:border-white/60 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white border border-white/30 hover:border-white/60 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 text-white/60 text-sm font-medium hidden lg:block z-40">
        <span className="text-white text-2xl font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-2 text-lg">/</span>
        <span className="text-lg">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
