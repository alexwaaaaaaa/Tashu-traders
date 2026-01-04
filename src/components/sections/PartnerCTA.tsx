import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { companyInfo } from "@/lib/constants";

interface PartnerCTAProps {
  className?: string;
  asPageHeader?: boolean;
}

export function PartnerCTA({ className = "", asPageHeader = false }: PartnerCTAProps) {
  const HeadingTag = asPageHeader ? "h1" : "h2";
  
  return (
    <section className={`bg-primary-navy py-16 sm:py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <HeadingTag className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Partner With {companyInfo.brand}
          </HeadingTag>

          {/* Collaboration Description */}
          <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
            Are you a contractor, tender consultant, or government liaison
            looking for a reliable supply partner? {companyInfo.brand} welcomes
            collaboration opportunities for government tender projects. Together,
            we can deliver quality products and meet institutional requirements
            efficiently.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
              Discuss Partnership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
