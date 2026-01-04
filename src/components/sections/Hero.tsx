import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { companyInfo } from "@/lib/constants";

interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`bg-gray-50 py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {companyInfo.tagline}
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            {companyInfo.name} ({companyInfo.brand}) specializes in tender-based
            procurement and bulk supply of Baby Kit Books, Aluminium Gates &
            Products, and Grocery & Essential Items for government departments
            and institutions.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us for Government Tender Supply
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
