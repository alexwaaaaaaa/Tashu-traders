import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("disclaimer");

export default function DisclaimerPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Disclaimer"
          subtitle="Important information about our trading operations"
          centered
          as="h1"
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Main Disclaimer */}
            <section className="rounded-lg border-l-4 border-primary-navy bg-neutral-gray-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Trading Operations Disclaimer
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                Tashu Traders, operating under the brand name TASHRA, is a proprietorship firm
                engaged in government tender-based supply of products including Baby Kit Books,
                Aluminium Gates & Products, and Grocery & Essential Items. All business operations
                are conducted in accordance with applicable laws and regulations governing
                government procurement and tender processes.
              </p>
            </section>

            {/* Tender Approval Notice */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Tender Approval Process
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                All supplies by TASHRA are subject to successful tender approval by the relevant
                government department or institution. The information presented on this website
                does not guarantee tender approval or contract award. Each tender submission is
                evaluated independently by the concerned authorities based on their specific
                criteria and requirements.
              </p>
            </section>

            {/* No Guarantee of Supply */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                No Guarantee of Supply
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                The products and services listed on this website represent our supply capabilities
                and are not a guarantee of availability or supply. Actual product supply is
                contingent upon tender award, formal contract execution, and compliance with
                all tender specifications and requirements.
              </p>
            </section>

            {/* Pricing and Specifications */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                Pricing and Specifications
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                Product pricing, specifications, and availability are determined on a
                tender-by-tender basis and may vary based on specific requirements, quantities,
                delivery locations, and market conditions. Any pricing or specification
                information on this website is for general reference only and does not
                constitute a binding offer.
              </p>
            </section>

            {/* Third-Party Content */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-primary-navy">
                External Links
              </h2>
              <p className="text-neutral-gray-600 leading-relaxed">
                This website may contain links to external websites for your convenience.
                TASHRA is not responsible for the content, accuracy, or availability of
                any external websites. The inclusion of any link does not imply endorsement
                or recommendation by TASHRA.
              </p>
            </section>

            {/* Contact for Clarification */}
            <section className="rounded-lg bg-primary-navy p-6 text-white">
              <h2 className="mb-4 text-xl font-bold">
                Need Clarification?
              </h2>
              <p className="leading-relaxed text-gray-100">
                If you have any questions about this disclaimer or require clarification
                regarding our trading operations and tender processes, please do not hesitate
                to{" "}
                <a href="/contact" className="underline hover:text-gray-200">
                  contact us
                </a>
                . We are committed to transparent and ethical business practices.
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
