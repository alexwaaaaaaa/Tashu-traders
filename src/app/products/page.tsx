import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { ArrowRight, BookOpen, Factory, ShoppingCart, CheckCircle, FileCheck, Truck, Shield, Package } from "lucide-react";

export const metadata: Metadata = getPageMetadata("products");

const products = [
  {
    id: "books",
    icon: <BookOpen className="w-8 h-8" />,
    title: "Baby Kit Books",
    description: "Government scheme supplies with bulk printing and delivery capabilities",
    color: "from-[#1e3a5f] to-[#2d5a87]",
    image: "/images/product-books.png",
    features: [
      "Bulk printing with quality paper and binding",
      "Content as per government scheme specifications",
      "Delivery to multiple locations across the region",
      "Complete quality certification",
    ],
  },
  {
    id: "aluminium",
    icon: <Factory className="w-8 h-8" />,
    title: "Aluminium Gates & Products",
    description: "Quality aluminium gates and fabrication products for institutional use",
    color: "from-[#1a4d3e] to-[#2d6a4f]",
    image: "/images/product-aluminium.png",
    features: [
      "Durable aluminium construction with corrosion resistance",
      "Custom fabrication as per tender specifications",
      "Installation support and quality certification",
      "Long-lasting performance guaranteed",
    ],
  },
  {
    id: "grocery",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply for institutional and government requirements",
    color: "from-[#152a45] to-[#1e3a5f]",
    image: "/images/product-grocery.png",
    features: [
      "Bulk supply for institutional and government usage",
      "Packaging as per tender requirements",
      "Quality-checked products with proper documentation",
      "Fresh and hygienically packed items",
    ],
  },
];

const supplyFeatures = [
  { icon: <FileCheck className="w-6 h-6" />, title: "Tender Documentation", description: "Complete documentation support" },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Certification", description: "All products quality certified" },
  { icon: <Truck className="w-6 h-6" />, title: "Timely Delivery", description: "On-time delivery commitment" },
  { icon: <Package className="w-6 h-6" />, title: "Bulk Handling", description: "Large volume order capability" },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/hero-books.png"
          alt="TASHRA Products"
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
              <span className="text-white">What We Do</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Quality-approved supplies for government tender requirements. Meeting institutional needs with excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              TASHRA specializes in providing bulk supplies across multiple product categories for government departments, PSUs, and institutional buyers.
            </p>
          </div>

          {/* Product Cards */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image/Gradient Side */}
                <div
                  className={`h-64 md:h-auto min-h-[400px] relative overflow-hidden group-hover:shadow-xl transition-all duration-500 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                      {product.icon}
                      <span className="font-semibold">{product.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`p-8 md:p-12 bg-gray-50 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium group"
                  >
                    <span className="border-b-2 border-[#1e3a5f]/30 group-hover:border-[#1e3a5f] pb-1 transition-colors">
                      Inquire about this product
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Features */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose TASHRA
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              All our products and services are supplied through proper government tender processes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#2d6a4f] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
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
              Have a Tender Requirement?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We participate in tenders floated by government departments, PSUs, and authorized procurement agencies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a4d3e] px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
            >
              Contact for Tender Inquiry
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
