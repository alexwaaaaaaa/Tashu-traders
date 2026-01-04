import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("experience");

const supplyCategories = [
  {
    icon: "📘",
    title: "Baby Kit Books",
    description: "Successfully supplied government scheme books with bulk printing and delivery",
    items: [
      "Handled large-volume orders for government schemes",
      "Delivered as per tender specifications",
      "Quality-approved printing materials",
    ],
  },
  {
    icon: "🏗",
    title: "Aluminium Gates & Products",
    description: "Supplied quality aluminium gates and fabrication products for institutional use",
    items: [
      "Durable and quality-tested materials",
      "Custom fabrication as per requirements",
      "Timely installation support",
    ],
  },
  {
    icon: "🛒",
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply for institutional and government requirements",
    items: [
      "Large-scale institutional supply",
      "Packaging as per tender requirements",
      "Quality-assured products",
    ],
  },
];

const tenderProcessPoints = [
  {
    title: "Documentation Expertise",
    description: "Thorough understanding of tender documentation requirements, including technical specifications, compliance certificates, and quality standards.",
  },
  {
    title: "Bid Preparation",
    description: "Experience in preparing comprehensive tender bids with accurate pricing, delivery schedules, and compliance documentation.",
  },
  {
    title: "Compliance Management",
    description: "Ensuring all supplies meet government quality standards and regulatory requirements for institutional procurement.",
  },
  {
    title: "Communication",
    description: "Clear and professional communication with tender authorities throughout the procurement process.",
  },
];

const deliveryCapabilities = [
  {
    icon: "⏱",
    title: "On-Time Delivery",
    description: "Committed to meeting tender-specified delivery timelines without compromise",
  },
  {
    icon: "📦",
    title: "Bulk Handling",
    description: "Equipped to handle large-volume orders with efficient logistics management",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description: "Rigorous quality checks before dispatch to ensure compliance with specifications",
  },
  {
    icon: "🔄",
    title: "Flexible Scheduling",
    description: "Ability to accommodate phased deliveries as per project requirements",
  },
];

export default function ExperiencePage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-navy sm:text-5xl">
            Our Experience
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-gray-600">
            TASHRA has a proven track record in government tender supply, delivering quality products
            with reliability and professionalism.
          </p>
        </section>

        {/* Successfully Handled Supply Categories */}
        <section className="mb-16">
          <SectionHeading
            title="Successfully Handled Supply Categories"
            subtitle="Our track record in government tender fulfillment"
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
            {supplyCategories.map((category) => (
              <Card
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                items={category.items}
              />
            ))}
          </div>
        </section>

        {/* Tender Process Understanding */}
        <section className="mb-16">
          <SectionHeading
            title="Tender Process Understanding"
            subtitle="Our expertise in navigating government procurement"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {tenderProcessPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border border-neutral-gray-200 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-navy">
                  {point.title}
                </h3>
                <p className="text-neutral-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Timeline Capabilities */}
        <section className="mb-16">
          <SectionHeading
            title="Delivery Timeline Capabilities"
            subtitle="Reliable and timely fulfillment of tender requirements"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-lg bg-neutral-gray-50 p-6 text-center"
              >
                <div className="mb-3 text-3xl" aria-hidden="true">
                  {capability.icon}
                </div>
                <h3 className="mb-2 font-semibold text-primary-navy">
                  {capability.title}
                </h3>
                <p className="text-sm text-neutral-gray-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-lg bg-primary-navy p-8 text-center text-white sm:p-12">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-200">
            Leverage our experience in government tender supply for your next project.
            Contact us to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-navy transition-colors hover:bg-gray-100"
          >
            Contact Us for Tender Inquiries
          </a>
        </section>
      </Container>
    </main>
  );
}
