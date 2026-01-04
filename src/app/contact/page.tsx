import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/constants";

export const metadata: Metadata = generateMetadata("contact");

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch for government tender inquiries and bulk supply requirements"
          centered
          as="h1"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Business Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Type</p>
                    <p className="text-gray-600">{companyInfo.businessType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mobile</p>
                    <p className="text-gray-600">{companyInfo.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{companyInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Why Contact TASHRA?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">✓</span>
                  Experienced in government tender processes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">✓</span>
                  Quality-assured bulk supply
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">✓</span>
                  Timely delivery commitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">✓</span>
                  Competitive pricing for institutional orders
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Submit Tender Inquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
