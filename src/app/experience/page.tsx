import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { ArrowRight, BookOpen, Factory, ShoppingCart, FileCheck, MessageSquare, Shield, Clock, Package, RefreshCw, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = getPageMetadata("experience");

const supplyCategories = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Baby Kit Books",
    description: "Successfully supplied government scheme books with bulk printing and delivery",
    image: "/images/product-books.png",
    items: [
      "Handled large-volume orders for government schemes",
      "Delivered as per tender specifications",
      "Quality-approved printing materials",
    ],
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Aluminium Gates & Products",
    description: "Supplied quality aluminium gates and fabrication products for institutional use",
    image: "/images/product-aluminium.png",
    items: [
      "Durable and quality-tested materials",
      "Custom fabrication as per requirements",
      "Timely installation support",
    ],
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply for institutional and government requirements",
    image: "/images/product-grocery.png",
    items: [
      "Large-scale institutional supply",
      "Packaging as per tender requirements",
      "Quality-assured products",
    ],
  },
];

const tenderProcessPoints = [
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Documentation Expertise",
    description: "Thorough understanding of tender documentation requirements, including technical specifications, compliance certificates, and quality standards.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Bid Preparation",
    description: "Experience in preparing comprehensive tender bids with accurate pricing, delivery schedules, and compliance documentation.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Compliance Management",
    description: "Ensuring all supplies meet government quality standards and regulatory requirements for institutional procurement.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Communication",
    description: "Clear and professional communication with tender authorities throughout the procurement process.",
  },
];

const deliveryCapabilities = [
  { icon: <Clock className="w-6 h-6" />, title: "On-Time Delivery", description: "Meeting tender-specified timelines" },
  { icon: <Package className="w-6 h-6" />, title: "Bulk Handling", description: "Large-volume order capability" },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Assurance", description: "Rigorous quality checks" },
  { icon: <RefreshCw className="w-6 h-6" />, title: "Flexible Scheduling", description: "Phased delivery support" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Tenders Completed" },
  { value: "100%", label: "Quality Assured" },
  { value: "3", label: "Product Categories" },
];

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/news-milestone.png"
          alt="Our Experience"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/90 via-[#1a4d3e]/80 to-[#1e3a5f]/90" />

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
              <span className="text-white">Our Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Experience
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A proven track record in government tender supply, delivering quality products with reliability and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Categories */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Successfully Handled Supply Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record in government tender fulfillment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supplyCategories.map((category) => (
              <div key={category.title} className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Award className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tender Process Understanding */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tender Process Understanding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise in navigating government procurement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {tenderProcessPoints.map((point) => (
              <div key={point.title} className="flex gap-4 p-6 border border-gray-200 hover:border-[#1e3a5f] transition-colors">
                <div className="w-12 h-12 bg-[#1e3a5f] text-white flex items-center justify-center flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Capabilities */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Delivery Timeline Capabilities
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Reliable and timely fulfillment of tender requirements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryCapabilities.map((capability) => (
              <div key={capability.title} className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#2d6a4f] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {capability.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Leverage our experience in government tender supply for your next project. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a4d3e] px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us for Tender Inquiries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
