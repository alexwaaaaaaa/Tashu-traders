// Navigation Items
export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Experience", href: "/experience" },
  { label: "Contact Us", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

// Product Categories
export interface ProductCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "books",
    icon: "📘",
    title: "Baby Kit Books",
    description: "Government scheme supplies",
    items: ["Bulk printing & delivery", "As per tender specifications"],
  },
  {
    id: "aluminium",
    icon: "🏗",
    title: "Aluminium Gates & Products",
    description: "Aluminium gates and fabrication-related supply",
    items: ["Durable & quality-tested materials"],
  },
  {
    id: "grocery",
    icon: "🛒",
    title: "Grocery & Essential Items",
    description: "Bulk grocery supply",
    items: [
      "Institutional & government usage",
      "Packaging as per requirement",
    ],
  },
];

// Design Tokens
export const colors = {
  primary: {
    navy: "#1e3a5f",
    navyDark: "#152a45",
    green: "#1a4d3e",
    greenLight: "#2d6a4f",
  },
  neutral: {
    white: "#ffffff",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray600: "#4b5563",
    gray800: "#1f2937",
    gray900: "#111827",
  },
};

// Company Information
export const companyInfo = {
  name: "Tashu Traders",
  brand: "TASHRA",
  tagline: "Reliable Government Tender Supplier for Quality Products",
  businessType: "Proprietorship",
  mobile: "[Mobile Number]",
  email: "[Email Address]",
  location: "[City, State]",
};

// Highlight Points for Home Page
export const highlightPoints = [
  "Government tender experience",
  "Bulk supply capability",
  "Quality assurance",
  "Multi-product capability",
];
