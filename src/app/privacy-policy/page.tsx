import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = getPageMetadata("privacyPolicy");

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#1a4d3e] py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Privacy Policy</span>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">
              How we handle and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Tashu Traders (TASHRA), we are committed to protecting your privacy and ensuring
                  the security of any personal information you provide to us. This Privacy Policy
                  explains how we collect, use, and safeguard your data when you visit our website
                  or submit inquiries through our contact form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect the following information when you interact with our website:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Name and organization details
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Contact information (phone number, email address)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Tender and requirement details you provide in inquiries
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Technical data such as browser type and IP address for website analytics
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The information we collect is used solely for the following purposes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Responding to your tender inquiries and business communications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Providing information about our products and services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Improving our website and user experience
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full mt-2.5 flex-shrink-0"></span>
                    Complying with legal obligations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information
                  from unauthorized access, alteration, disclosure, or destruction. Your data is
                  stored securely and is only accessible to authorized personnel who need it to
                  respond to your inquiries.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Disclosure</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to
                  third parties without your consent, except as required by law or to fulfill
                  your specific requests related to government tender processes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-[#1e3a5f]">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium hover:gap-3 transition-all"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Last updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
