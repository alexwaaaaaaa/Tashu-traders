import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = getPageMetadata("terms");

export default function TermsPage() {
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
              <span className="text-white">Terms & Conditions</span>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">Legal Terms</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/80">
              Please read these terms carefully before using our website
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the TASHRA (Tashu Traders) website, you agree to be bound
              by the following terms and conditions. If you do not agree with any part of these
              terms, please do not use our website.
            </p>

            <div className="bg-gray-50 p-6 border-l-4 border-[#1e3a5f]">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Website Usage</h2>
              <p className="text-gray-600 leading-relaxed">
                This website is provided for informational purposes only. The content on this
                website is intended to provide general information about Tashu Traders (TASHRA)
                and our government tender supply services. You may browse, download, and print
                content from this website for your personal, non-commercial use only. Any
                unauthorized use of this website may give rise to a claim for damages and/or
                be a criminal offense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-[#1e3a5f]">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Supply Conditions</h2>
              <p className="text-gray-600 leading-relaxed">
                All product supplies by TASHRA are subject to government tender approval and
                formal contract agreements. Information displayed on this website regarding
                products and services does not constitute an offer or guarantee of supply.
                Actual supply terms, pricing, and conditions will be determined based on
                specific tender requirements and formal agreements between parties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-[#1e3a5f]">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Accuracy of Information</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to ensure that the information on this website is accurate
                and up-to-date, we make no representations or warranties of any kind, express
                or implied, about the completeness, accuracy, reliability, or availability
                of the website or the information contained on it. Product specifications,
                availability, and pricing are subject to change without notice based on
                tender requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-[#1e3a5f]">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Tashu Traders (TASHRA) shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising out of your access to or use of this
                website. This includes, but is not limited to, damages for loss of profits,
                business interruption, or loss of data, even if we have been advised of the
                possibility of such damages. Your use of this website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with
                the laws of India. Any disputes relating to these terms shall be subject to
                the exclusive jurisdiction of the courts in the relevant jurisdiction.
              </p>
            </div>

            <div className="bg-[#1e3a5f] p-6">
              <h2 className="text-xl font-bold text-white mb-3">Questions?</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
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
      </section>
    </main>
  );
}
