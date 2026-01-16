import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata } from "@/lib/metadata";
import { ArrowRight, Handshake, Users, FileCheck, Truck, CheckCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = generateMetadata("partnership");

const partnerTypes = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Contractors",
    description: "Partner with us for government tender projects requiring bulk supply and quality products.",
    image: "/images/partner-contractor.png",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Tender Consultants",
    description: "Collaborate on tender documentation and bid preparation for institutional procurement.",
    image: "/images/partner-consultant.png",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logistics Partners",
    description: "Join our supply chain network for efficient delivery across multiple locations.",
    image: "/images/partner-logistics.png",
  },
];

const benefits = [
  "Access to established government tender network",
  "Quality-assured product supply chain",
  "Professional documentation support",
  "Timely delivery infrastructure",
  "Transparent business practices",
  "Long-term partnership opportunities",
];

export default function PartnershipPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/hero-partnership.png"
          alt="Partner With TASHRA"
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
              <span className="text-white">Partnership</span>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Handshake className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">Collaboration Opportunities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partner With TASHRA
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Are you a contractor, tender consultant, or government liaison looking for a reliable supply partner? TASHRA welcomes collaboration opportunities for government tender projects.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who Can Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with various stakeholders in the government procurement ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type) => (
              <div key={type.title} className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-[#1e3a5f]">
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {type.icon}
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#1e3a5f] font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Get in touch
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Partner With TASHRA?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Together, we can deliver quality products and meet institutional requirements efficiently. Our established network and experience in government tenders make us a reliable partner.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#2d6a4f] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#152a45] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <Handshake className="w-16 h-16 text-white/80 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Collaborate</h3>
                <p className="text-white/80 mb-8">
                  Ready to discuss partnership opportunities? Contact us today and let&apos;s explore how we can work together on government tender projects.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+917321044854"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 7321 044 854</span>
                  </a>
                  <a
                    href="mailto:traderstashu@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>traderstashu@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
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
              Ready to Partner?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss partnership opportunities for your next government tender project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a4d3e] px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
            >
              Discuss Partnership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
