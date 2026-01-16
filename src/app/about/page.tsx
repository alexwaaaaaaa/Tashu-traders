import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { ArrowRight, CheckCircle, Target, Eye, BookOpen, Factory, ShoppingCart } from "lucide-react";

export const metadata: Metadata = getPageMetadata("about");

const experienceAreas = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Baby Kit Books",
    description: "Government scheme book supplies with bulk printing and delivery capabilities",
    image: "/images/product-books.png",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Aluminium Gates & Products",
    description: "Quality aluminium gates and fabrication-related supplies for institutional use",
    image: "/images/product-aluminium.png",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply for institutional and government requirements",
    image: "/images/product-grocery.png",
  },
];

const values = [
  { title: "Quality Assurance", description: "Every product meets stringent government tender specifications" },
  { title: "Timely Delivery", description: "Committed to meeting all delivery deadlines without compromise" },
  { title: "Transparency", description: "Clear communication and honest business practices" },
  { title: "Reliability", description: "Consistent performance across all tender requirements" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section - TCS Style */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/about-hero.png"
          alt="About TASHRA"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#1a4d3e]/80" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Who We Are</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About TASHRA
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your trusted partner in government tender supply. Building trust through quality, reliability, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - TCS Style */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Building Trust Through Quality
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-[#1e3a5f]">Tashu Traders</strong>, operating under the brand name{" "}
                <strong className="text-[#1e3a5f]">TASHRA</strong>, is a dedicated government tender supplier
                specializing in quality-approved products for institutional and government procurement.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the unique requirements of government tender processes and are committed to
                delivering products that meet stringent quality standards while ensuring timely delivery
                and competitive pricing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium text-lg group"
              >
                <span className="border-b-2 border-[#1e3a5f]/30 group-hover:border-[#1e3a5f] pb-1 transition-colors">
                  Get in touch
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-6 border border-gray-200 hover:border-[#1e3a5f] transition-colors ${index === 0 ? 'col-span-2' : ''
                    }`}
                >
                  <CheckCircle className="w-6 h-6 text-[#2d6a4f] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Areas - TCS Style Cards */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Experience Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized supply categories for government tenders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experienceAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{area.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-[#1e3a5f] font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - TCS Style */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#152a45] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To be a reliable and trusted supplier for government tender requirements, delivering
                  quality-approved products with integrity, efficiency, and commitment to excellence.
                  We aim to simplify the procurement process for government departments and institutions
                  through our dedicated service and timely delivery.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To become a leading government tender supplier recognized for quality, reliability,
                  and customer satisfaction. We envision expanding our product portfolio while maintaining
                  the highest standards of service and building long-term partnerships with government
                  bodies and institutions across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us for your government tender requirements and experience reliable, quality service.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
