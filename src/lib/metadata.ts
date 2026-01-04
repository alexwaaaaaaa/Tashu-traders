import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tashra.com";

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "TASHRA - Reliable Government Tender Supplier | Tashu Traders",
    description:
      "Tashu Traders (TASHRA) is a trusted government tender supplier for books, aluminium products, and grocery items. Quality assured bulk supply.",
    keywords: [
      "government tender supplier",
      "bulk supply",
      "tender procurement",
      "Tashu Traders",
      "TASHRA",
    ],
    path: "/",
  },
  about: {
    title: "About Us - TASHRA | Government Tender Supply Company",
    description:
      "Learn about Tashu Traders and TASHRA brand. Specializing in government tender work and institutional supply with quality-approved products.",
    keywords: [
      "about TASHRA",
      "Tashu Traders",
      "government supplier",
      "tender company",
    ],
    path: "/about",
  },
  products: {
    title: "Products & Services - TASHRA | Government Tender Supplies",
    description:
      "Explore TASHRA supply categories: Baby Kit Books, Aluminium Gates & Products, and Grocery Items. Tender-based bulk supply for government departments.",
    keywords: [
      "baby kit books",
      "aluminium gates",
      "grocery supply",
      "government tender products",
    ],
    path: "/products",
  },
  experience: {
    title: "Our Experience - TASHRA | Proven Tender Track Record",
    description:
      "TASHRA has successfully handled government tenders for books, aluminium products, and grocery items. Reliable delivery and quality assurance.",
    keywords: [
      "tender experience",
      "government supply track record",
      "bulk delivery",
    ],
    path: "/experience",
  },
  contact: {
    title: "Contact Us - TASHRA | Government Tender Inquiries",
    description:
      "Contact Tashu Traders (TASHRA) for government tender inquiries. Submit your tender requirements and get quality bulk supply solutions.",
    keywords: [
      "contact TASHRA",
      "tender inquiry",
      "government supply contact",
    ],
    path: "/contact",
  },
  privacyPolicy: {
    title: "Privacy Policy - TASHRA | Tashu Traders",
    description:
      "Read TASHRA privacy policy. Learn how we handle and protect your data when you use our website.",
    keywords: ["privacy policy", "data protection", "TASHRA"],
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions - TASHRA | Tashu Traders",
    description:
      "Review TASHRA terms and conditions for website usage and supply agreements.",
    keywords: ["terms and conditions", "website terms", "TASHRA"],
    path: "/terms",
  },
  disclaimer: {
    title: "Disclaimer - TASHRA | Tashu Traders",
    description:
      "Read TASHRA disclaimer about trading operations and tender approval processes.",
    keywords: ["disclaimer", "legal notice", "TASHRA"],
    path: "/disclaimer",
  },
  partnership: {
    title: "Partner With TASHRA | Contractor & Consultant Collaboration",
    description:
      "Explore partnership opportunities with TASHRA. Collaborate with us for government tender projects and bulk supply requirements.",
    keywords: [
      "partnership",
      "contractor collaboration",
      "tender consultant",
      "TASHRA",
    ],
    path: "/partnership",
  },
};

export function generateMetadata(page: keyof typeof pageMetadata): Metadata {
  const meta = pageMetadata[page];
  const pageUrl = `${baseUrl}${meta.path || ""}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      siteName: "TASHRA - Tashu Traders",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
