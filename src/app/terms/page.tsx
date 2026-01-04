import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("terms");

export default function TermsPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our website"
          centered
          as="h1"
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-neutral-gray-600 leading-relaxed">
                By accessing and using the TASHRA (Tashu Traders) website, you agree to be bound
                by the following terms and conditions. If you do not agree with any part of these
                terms, please do not use our website.
              </p>
            </section>

            {/* Term 1: Website Usage */}
            <section className="rounded-lg border border-neutral-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                1. Website Usage
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                This website is provided for informational purposes only. The content on this
                website is intended to provide general information about Tashu Traders (TASHRA)
                and our government tender supply services. You may browse, download, and print
                content from this website for your personal, non-commercial use only. Any
                unauthorized use of this website may give rise to a claim for damages and/or
                be a criminal offense.
              </p>
            </section>

            {/* Term 2: Supply Conditions */}
            <section className="rounded-lg border border-neutral-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                2. Supply Conditions
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                All product supplies by TASHRA are subject to government tender approval and
                formal contract agreements. Information displayed on this website regarding
                products and services does not constitute an offer or guarantee of supply.
                Actual supply terms, pricing, and conditions will be determined based on
                specific tender requirements and formal agreements between parties.
              </p>
            </section>

            {/* Term 3: Accuracy of Information */}
            <section className="rounded-lg border border-neutral-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                3. Accuracy of Information
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                While we strive to ensure that the information on this website is accurate
                and up-to-date, we make no representations or warranties of any kind, express
                or implied, about the completeness, accuracy, reliability, or availability
                of the website or the information contained on it. Product specifications,
                availability, and pricing are subject to change without notice based on
                tender requirements.
              </p>
            </section>

            {/* Term 4: Limitation of Liability */}
            <section className="rounded-lg border border-neutral-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                4. Limitation of Liability
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                Tashu Traders (TASHRA) shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising out of your access to or use of this
                website. This includes, but is not limited to, damages for loss of profits,
                business interruption, or loss of data, even if we have been advised of the
                possibility of such damages. Your use of this website is at your own risk.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Governing Law
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with
                the laws of India. Any disputes relating to these terms shall be subject to
                the exclusive jurisdiction of the courts in the relevant jurisdiction.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Questions
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us
                through our{" "}
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
