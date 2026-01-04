import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { productCategories } from "@/lib/constants";

export const metadata: Metadata = getPageMetadata("products");

export default function ProductsPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        {/* Page Header */}
        <section className="mb-12">
          <SectionHeading
            title="Our Products & Services"
            subtitle="Quality-approved supplies for government tender requirements"
            centered
            as="h1"
          />
          <p className="mx-auto max-w-3xl text-center text-lg text-neutral-gray-600">
            TASHRA specializes in providing bulk supplies across multiple product categories
            for government departments, PSUs, and institutional buyers. All our products
            meet tender specifications and quality standards.
          </p>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-3">
            {productCategories.map((category) => (
              <Card
                key={category.id}
                icon={category.icon}
                title={category.title}
                description={category.description}
                items={category.items}
              />
            ))}
          </div>
        </section>

        {/* Detailed Descriptions */}
        <section className="mb-16 space-y-8">
          <SectionHeading
            title="Supply Category Details"
            subtitle="Comprehensive information about our product offerings"
          />

          {/* Baby Kit Books */}
          <div className="rounded-lg border border-neutral-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">📘</span>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-primary-navy">
                  Baby Kit Books
                </h3>
                <p className="mb-4 text-neutral-gray-600">
                  We supply educational and informational books as part of government baby kit schemes.
                  Our book supply services include bulk printing, quality binding, and timely delivery
                  to designated locations as per tender requirements.
                </p>
                <ul className="space-y-2 text-neutral-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Bulk printing with quality paper and binding
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Content as per government scheme specifications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Delivery to multiple locations across the region
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aluminium Gates & Products */}
          <div className="rounded-lg border border-neutral-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">🏗</span>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-primary-navy">
                  Aluminium Gates & Products
                </h3>
                <p className="mb-4 text-neutral-gray-600">
                  We provide high-quality aluminium gates and fabrication products for government
                  institutions, schools, and public facilities. Our products are manufactured
                  using durable, quality-tested materials that meet institutional standards.
                </p>
                <ul className="space-y-2 text-neutral-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Durable aluminium construction with corrosion resistance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Custom fabrication as per tender specifications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Installation support and quality certification
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Grocery & Essential Items */}
          <div className="rounded-lg border border-neutral-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">🛒</span>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-primary-navy">
                  Grocery & Essential Items
                </h3>
                <p className="mb-4 text-neutral-gray-600">
                  We supply bulk grocery and essential items for government hostels, institutions,
                  and welfare programs. Our grocery supply chain ensures fresh, quality products
                  with proper packaging and timely delivery.
                </p>
                <ul className="space-y-2 text-neutral-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Bulk supply for institutional and government usage
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Packaging as per tender requirements
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-green">✓</span>
                    Quality-checked products with proper documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tender-Based Supply Note */}
        <section className="rounded-lg bg-neutral-gray-50 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-navy">
              Tender-Based Supply
            </h2>
            <p className="mb-4 text-lg text-neutral-gray-600">
              All our products and services are supplied through proper government tender processes.
              We participate in tenders floated by government departments, PSUs, and authorized
              procurement agencies.
            </p>
            <p className="text-neutral-gray-600">
              Our supply is subject to tender approval and follows all government procurement
              guidelines. We ensure complete documentation, quality certification, and compliance
              with tender terms and conditions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-gray-600">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                📋 Tender Documentation
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                ✅ Quality Certification
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                🚚 Timely Delivery
              </span>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
