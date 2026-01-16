"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ArrowRight, Phone, Mail } from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "Who We Are",
    href: "/about",
    hasDropdown: true,
    subItems: [
      { label: "About TASHRA", href: "/about", description: "Our story, mission and values" },
      { label: "Our Experience", href: "/experience", description: "Track record in tenders" },
      { label: "Leadership", href: "/about", description: "Meet our team" },
    ],
  },
  {
    label: "What We Do",
    href: "/products",
    hasDropdown: true,
    subItems: [
      { label: "Baby Kit Books", href: "/products", description: "Government scheme supplies" },
      { label: "Aluminium Products", href: "/products", description: "Gates and fabrication" },
      { label: "Grocery Items", href: "/products", description: "Bulk institutional supply" },
      { label: "All Products", href: "/products", description: "View complete catalog" },
    ],
  },
  {
    label: "Partnership",
    href: "/partnership",
    hasDropdown: true,
    subItems: [
      { label: "Partner With Us", href: "/partnership", description: "Collaboration opportunities" },
      { label: "Tender Consultants", href: "/partnership", description: "Work with us" },
      { label: "Contractors", href: "/partnership", description: "Join our network" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""
          }`}
      >
        {/* Main Navigation */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-[72px]">
              {/* Logo - TCS Style */}
              <Link href="/" className="flex items-center group">
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[32px] font-bold text-[#1e3a5f] tracking-tight leading-none group-hover:text-[#2d5a87] transition-colors">
                    TASHRA
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 tracking-[0.15em] uppercase mt-0.5 font-medium">
                    Tashu Traders
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center h-full">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative h-full"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-5 h-full text-[15px] text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors relative ${activeDropdown === item.label ? "text-[#1e3a5f]" : ""
                        }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                        />
                      )}
                      {/* Active indicator line */}
                      <span className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#1e3a5f] transition-transform origin-left ${activeDropdown === item.label ? "scale-x-100" : "scale-x-0"
                        }`} />
                    </Link>

                    {/* TCS-Style Mega Dropdown Menu */}
                    {item.hasDropdown && item.subItems && (
                      <div
                        className={`absolute top-full left-0 min-w-[320px] bg-white shadow-xl border-t-[3px] border-[#1e3a5f] transition-all duration-200 ${activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                          }`}
                      >
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group/item border-l-[3px] border-transparent hover:border-[#1e3a5f]"
                            >
                              <div>
                                <div className="font-medium text-gray-900 group-hover/item:text-[#1e3a5f] text-[15px]">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <div className="text-sm text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#1e3a5f] opacity-0 group-hover/item:opacity-100 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Section - Search & CTA */}
              <div className="flex items-center gap-3">
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#1e3a5f]"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="hidden lg:inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#152a45] transition-colors"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay - TCS Style */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 right-0 bg-white p-6 shadow-2xl transition-transform duration-300 ${isSearchOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-xl font-light outline-none placeholder:text-gray-400"
                autoFocus={isSearchOpen}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {["Baby Kit Books", "Aluminium Gates", "Government Tenders", "Bulk Supply"].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="h-full overflow-y-auto pb-20">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>

          <nav className="p-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-gray-900 font-medium"
                  onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
                </Link>
                {item.hasDropdown && item.subItems && (
                  <div className="pb-4 pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-center gap-3 py-3 text-gray-600 hover:text-[#1e3a5f] border-l-2 border-gray-200 pl-4 hover:border-[#1e3a5f] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-[#1e3a5f] text-white py-3.5 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="p-4 bg-gray-50 mt-auto">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Contact Us</p>
            <a href="tel:+917321044854" className="flex items-center gap-3 py-2 text-gray-700">
              <Phone className="w-5 h-5 text-[#1e3a5f]" />
              <span>+91 7321 044 854</span>
            </a>
            <a href="mailto:traderstashu@gmail.com" className="flex items-center gap-3 py-2 text-gray-700">
              <Mail className="w-5 h-5 text-[#1e3a5f]" />
              <span>traderstashu@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
