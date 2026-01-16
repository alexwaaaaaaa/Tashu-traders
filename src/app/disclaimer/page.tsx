import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { AlertCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = getPageMetadata("disclaimer");

export default function DisclaimerPage() {
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
              <span className="text-white">Disclaimer</span>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <AlertCircle className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">Important Notice</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-white/80">
              Important information about our trading operations
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Main Disclaimer */}
            <div className="bg-[#1e3a5f]/5 border-l-4 border-[#1e3a5f] p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trading Operations Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                Tashu Traders, operating under the brand name TASHRA, is a proprietorship firm
                engaged in government tender-based supply of products including Baby Kit Books,
                Aluminium Gates & Products, and Grocery & Essential Items. All business operations
                are conducted in accordance with applicable laws and regulations governing
                government procurement and tender processes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tender Approval Process</h2>
              <p className="text-gray-600 leading-relaxed">
                All supplies by TASHRA are subject to successful tender approval by the relevant
                government department or institution. The information presented on this website
                does not guarantee tender approval or contract award. Each tender submission is
                evaluated independently by the concerned authorities based on their specific
                criteria and requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">No Guarantee of Supply</h2>
              <p className="text-gray-600 leading-relaxed">
                The products and services listed on this website represent our supply capabilities
                and are not a guarantee of availability or supply. Actual product supply is
                contingent upon tender award, formal contract execution, and compliance with
                all tender specifications and requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing and Specifications</h2>
              <p className="text-gray-600 leading-relaxed">
                Product pricing, specifications, and availability are determined on a
                tender-by-tender basis and may vary based on specific requirements, quantities,
                delivery locations, and market conditions. Any pricing or specification
                information on this website is for general reference only and does not
                constitute a binding offer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">External Links</h2>
              <p className="text-gray-600 leading-relaxed">
                This website may contain links to external websites for your convenience.
                TASHRA is not responsible for the content, accuracy, or availability of
                any external websites. The inclusion of any link does not imply endorsement
                or recommendation by TASHRA.
              </p>
            </div>

            {/* Contact for Clarification */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#152a45] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <AlertCircle className="w-10 h-10 text-white/80 mb-4" />
                <h2 className="text-xl font-bold text-white mb-4">Need Clarification?</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  If you have any questions about this disclaimer or require clarification
                  regarding our trading operations and tender processes, please do not hesitate
                  to contact us. We are committed to transparent and ethical business practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+917321044854"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 7321 044 854</span>
                  </a>
                  <a
                    href="mailto:traderstashu@gmail.com"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>traderstashu@gmail.com</span>
                  </a>
                </div>
              </div>
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
