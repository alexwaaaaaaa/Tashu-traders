import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const whoWeAre = [
  { label: "About TASHRA", href: "/about" },
  { label: "Our Experience", href: "/experience" },
  { label: "Leadership", href: "/about" },
  { label: "Newsroom", href: "/" },
];

const whatWeDo = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/about" },
  { label: "Industries", href: "/experience" },
];

const products = [
  { label: "Baby Kit Books", href: "/products" },
  { label: "Aluminium Gates", href: "/products" },
  { label: "Grocery Items", href: "/products" },
];

const partnership = [
  { label: "Partner With Us", href: "/partnership" },
  { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Sitemap", href: "/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo - TCS Style */}
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col">
                <span className="text-[32px] font-bold text-white tracking-tight leading-none group-hover:text-gray-200 transition-colors">
                  TASHRA
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.15em] uppercase mt-1 font-medium">
                  Tashu Traders
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building trust through quality. Your reliable partner for government tender supplies and institutional procurement.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+917321044854" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                <Phone className="w-4 h-4 text-gray-500 group-hover:text-white" />
                <span>+91 7321 044 854</span>
              </a>
              <a href="mailto:traderstashu@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-white" />
                <span>traderstashu@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white uppercase tracking-wider">Who We Are</h4>
            <ul className="space-y-3">
              {whoWeAre.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white uppercase tracking-wider">What We Do</h4>
            <ul className="space-y-3">
              {whatWeDo.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold mb-4 mt-8 text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnership & Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white uppercase tracking-wider">Partnership</h4>
            <ul className="space-y-3">
              {partnership.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold mb-4 mt-8 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white uppercase tracking-wider">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ready to discuss your tender requirements? Contact us for quality-assured bulk supplies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0a1628] px-5 py-3 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Social Links - TCS Style */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - TCS Style */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Tashu Traders (TASHRA). All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/disclaimer" className="text-gray-500 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
