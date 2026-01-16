import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Building2, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = generateMetadata("contact");

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+91 7321 044 854",
    href: "tel:+917321044854",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "traderstashu@gmail.com",
    href: "mailto:traderstashu@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "India",
    href: null,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    label: "Business Type",
    value: "Proprietorship",
    href: null,
  },
];

const benefits = [
  "Experienced in government tender processes",
  "Quality-assured bulk supply",
  "Timely delivery commitment",
  "Competitive pricing for institutional orders",
  "Complete documentation support",
  "Dedicated customer service",
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/hero-govt.png"
          alt="Contact TASHRA"
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
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Get in touch for government tender inquiries and bulk supply requirements. We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We&apos;re here to help with your requirements or need bulk supplies? Contact us today and let&apos;s discuss how we can help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#1e3a5f] text-white flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-medium hover:text-[#1e3a5f] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="bg-[#1e3a5f] p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Why Contact TASHRA?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Tender Inquiry
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            <div className="relative">
              <Clock className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Quick Response Guaranteed
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We understand the time-sensitive nature of tender requirements. Our team ensures prompt responses to all inquiries within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917321044854"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1a4d3e] px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:traderstashu@gmail.com"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
