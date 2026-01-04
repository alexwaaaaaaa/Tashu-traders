import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { PartnerCTA } from "@/components/sections/PartnerCTA";

export const metadata: Metadata = generateMetadata("partnership");

export default function PartnershipPage() {
  return (
    <main>
      <PartnerCTA asPageHeader />
    </main>
  );
}
