"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Truck, Building2 } from "lucide-react";

interface SolutionItem {
  label: string;
  href: string;
}

interface TabData {
  id: string;
  label: string;
  description: string;
  items: SolutionItem[];
  icon: React.ReactNode;
}

const tabsData: TabData[] = [
  {
    id: "products",
    label: "Products",
    description: "Explore our products. Quality assured for government tenders.",
    icon: <ShoppingCart className="w-5 h-5" />,
    items: [
      { label: "Baby Kit Books", href: "/products" },
      { label: "Aluminium Gates", href: "/products" },
      { label: "Aluminium Fabrication", href: "/products" },
      { label: "Grocery Items", href: "/products" },
      { label: "Institutional Supplies", href: "/products" },
      { label: "Government Scheme Products", href: "/products" },
    ],
  },
  {
    id: "services",
    label: "Services",
    description: "Experience our services. Transform your procurement.",
    icon: <Truck className="w-5 h-5" />,
    items: [
      { label: "Bulk Supply", href: "/about" },
      { label: "Tender Procurement", href: "/experience" },
      { label: "Custom Manufacturing", href: "/products" },
      { label: "Quality Assurance", href: "/about" },
      { label: "Logistics & Delivery", href: "/about" },
      { label: "Documentation Support", href: "/experience" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    description: "Select your industry. Discover our impact.",
    icon: <Building2 className="w-5 h-5" />,
    items: [
      { label: "Government Departments", href: "/experience" },
      { label: "Educational Institutions", href: "/products" },
      { label: "Healthcare", href: "/products" },
      { label: "Public Sector", href: "/experience" },
      { label: "Corporate & Offices", href: "/products" },
      { label: "Residential Projects", href: "/products" },
    ],
  },
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("products");
  const activeData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cutting Edge Solutions to Power Your Requirements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive product and service offerings for government tenders and institutional needs
          </p>
        </div>

        {/* Tab Navigation - TCS Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-3 px-8 py-4 rounded-none border-b-[3px] transition-all duration-300 ${activeTab === tab.id
                ? "border-[#1e3a5f] bg-[#1e3a5f] text-white"
                : "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span className={`transition-colors ${activeTab === tab.id ? "text-white" : "text-[#1e3a5f]"}`}>
                {tab.icon}
              </span>
              <div className="text-left">
                <div className="font-semibold text-[15px]">{tab.label}</div>
                <div className={`text-xs mt-0.5 ${activeTab === tab.id ? "text-white/70" : "text-gray-500"}`}>
                  {tab.description.split(".")[0]}
                </div>
              </div>
              <ArrowRight className={`w-4 h-4 ml-2 transition-all ${activeTab === tab.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
            </button>
          ))}
        </div>

        {/* Tab Content - TCS Style Grid */}
        <div className="relative">
          {activeData && (
            <div className="animate-fadeIn">
              {/* Description Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeData.label}
                  </h3>
                  <p className="text-gray-600">{activeData.description}</p>
                </div>
                <Link
                  href={activeData.id === "products" ? "/products" : activeData.id === "services" ? "/about" : "/experience"}
                  className="hidden sm:inline-flex items-center gap-2 text-[#1e3a5f] font-medium hover:gap-3 transition-all"
                >
                  View all
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                {activeData.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between p-6 border border-gray-100 hover:border-[#1e3a5f] hover:bg-[#1e3a5f]/5 transition-all duration-300"
                  >
                    <span className="text-gray-800 group-hover:text-[#1e3a5f] font-medium transition-colors">
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1e3a5f] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Mobile View All Link */}
              <div className="mt-6 sm:hidden">
                <Link
                  href={activeData.id === "products" ? "/products" : activeData.id === "services" ? "/about" : "/experience"}
                  className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium"
                >
                  View all {activeData.label.toLowerCase()}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
