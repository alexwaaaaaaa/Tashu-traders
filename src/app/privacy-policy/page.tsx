import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("privacyPolicy");

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Privacy Policy"
          subtitle="How we handle and protect your information"
          centered
          as="h1"
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Introduction
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                At Tashu Traders (TASHRA), we are committed to protecting your privacy and ensuring
                the security of any personal information you provide to us. This Privacy Policy
                explains how we collect, use, and safeguard your data when you visit our website
                or submit inquiries through our contact form.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Information We Collect
              </h2>
              <p className="mb-4 text-neutral-gray-600 leading-relaxed">
                We may collect the following information when you interact with our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray-600">
                <li>Name and organization details</li>
                <li>Contact information (phone number, email address)</li>
                <li>Tender and requirement details you provide in inquiries</li>
                <li>Technical data such as browser type and IP address for website analytics</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-neutral-gray-600 leading-relaxed">
                The information we collect is used solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-gray-600">
                <li>Responding to your tender inquiries and business communications</li>
                <li>Providing information about our products and services</li>
                <li>Improving our website and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Data Protection
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction. Your data is
                stored securely and is only accessible to authorized personnel who need it to
                respond to your inquiries.
              </p>
            </section>

            {/* Third-Party Disclosure */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Third-Party Disclosure
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to
                third parties without your consent, except as required by law or to fulfill
                your specific requests related to government tender processes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Contact Us
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your
                data, please contact us through our{" "}
                <a href="/contact" className="text-primary-navy underline hover:text-primary-navyDark">
                  Contact Us
                </a>{" "}
                page.
              </p>
            </section>

            {/* Last Updated */}
            <section className="border-t border-neutral-gray-200 pt-6">
              <p className="text-sm text-neutral-gray-600">
                Last updated: January 2026
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
