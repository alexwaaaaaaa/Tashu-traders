import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("about");

const experienceAreas = [
  {
    icon: "📘",
    title: "Baby Kit Books",
    description: "Government scheme book supplies with bulk printing and delivery capabilities",
  },
  {
    icon: "🏗",
    title: "Aluminium Gates & Products",
    description: "Quality aluminium gates and fabrication-related supplies for institutional use",
  },
  {
    icon: "🛒",
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply for institutional and government requirements",
  },
];

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        {/* Company Description Section */}
        <section className="mb-16">
          <SectionHeading
            title="About TASHRA"
            subtitle="Your Trusted Partner in Government Tender Supply"
            centered
            as="h1"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-lg text-neutral-gray-600">
              <strong className="text-primary-navy">Tashu Traders</strong>, operating under the brand name{" "}
              <strong className="text-primary-navy">TASHRA</strong>, is a dedicated government tender supplier
              specializing in quality-approved products for institutional and government procurement.
            </p>
            <p className="text-lg text-neutral-gray-600">
              We understand the unique requirements of government tender processes and are committed to
              delivering products that meet stringent quality standards while ensuring timely delivery
              and competitive pricing.
            </p>
          </div>
        </section>

        {/* Experience Areas Section */}
        <section className="mb-16">
          <SectionHeading
            title="Our Experience Areas"
            subtitle="Specialized supply categories for government tenders"
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
            {experienceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-neutral-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 text-4xl" aria-hidden="true">
                  {area.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary-navy">
                  {area.title}
                </h3>
                <p className="text-neutral-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* Mission Statement */}
          <div className="rounded-lg bg-primary-navy p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-100">
              To be a reliable and trusted supplier for government tender requirements, delivering
              quality-approved products with integrity, efficiency, and commitment to excellence.
              We aim to simplify the procurement process for government departments and institutions
              through our dedicated service and timely delivery.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="rounded-lg bg-primary-green p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-100">
              To become a leading government tender supplier recognized for quality, reliability,
              and customer satisfaction. We envision expanding our product portfolio while maintaining
              the highest standards of service and building long-term partnerships with government
              bodies and institutions across the region.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
