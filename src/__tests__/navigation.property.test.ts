/**
 * Property Test: Navigation Link Validity
 * Feature: tashra-website, Property 2: Navigation Link Validity
 * 
 * *For any* navigation item in the header or footer, the href attribute SHALL 
 * correspond to a valid, existing page route within the application.
 * 
 * **Validates: Requirements 3.4**
 */

import * as fc from "fast-check";
import { mainNavItems, legalLinks, NavItem } from "@/lib/constants";

// Define valid routes that exist in the application
const validRoutes = [
  "/",
  "/about",
  "/products",
  "/experience",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/partnership",
];

describe("Property 2: Navigation Link Validity", () => {
  // Combine all navigation items for testing
  const allNavItems: NavItem[] = [...mainNavItems, ...legalLinks];

  it("all navigation items should have valid href attributes that match existing routes", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allNavItems),
        (navItem: NavItem) => {
          // Property: Every navigation item's href must be in the valid routes list
          expect(validRoutes).toContain(navItem.href);
          
          // Property: href must start with /
          expect(navItem.href.startsWith("/")).toBe(true);
          
          // Property: href must be lowercase
          expect(navItem.href).toBe(navItem.href.toLowerCase());
          
          // Property: href must not contain special characters (except hyphen)
          expect(navItem.href).toMatch(/^\/[a-z0-9-]*$/);
          
          // Property: label must be non-empty
          expect(navItem.label.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("main navigation items should cover all primary pages", () => {
    const primaryRoutes = ["/", "/about", "/products", "/experience", "/contact"];
    const mainNavHrefs = mainNavItems.map((item) => item.href);

    fc.assert(
      fc.property(
        fc.constantFrom(...primaryRoutes),
        (route: string) => {
          // Property: Every primary route must be accessible from main navigation
          expect(mainNavHrefs).toContain(route);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("legal links should cover all legal pages", () => {
    const legalRoutes = ["/privacy-policy", "/terms", "/disclaimer"];
    const legalHrefs = legalLinks.map((item) => item.href);

    fc.assert(
      fc.property(
        fc.constantFrom(...legalRoutes),
        (route: string) => {
          // Property: Every legal route must be accessible from footer legal links
          expect(legalHrefs).toContain(route);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("no duplicate hrefs should exist in navigation", () => {
    const allHrefs = allNavItems.map((item) => item.href);
    const uniqueHrefs = new Set(allHrefs);
    
    // Property: All hrefs should be unique (no duplicates)
    expect(uniqueHrefs.size).toBe(allHrefs.length);
  });
});
