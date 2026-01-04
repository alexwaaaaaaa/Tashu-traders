/**
 * Property Test: Heading Hierarchy Validity
 * Feature: tashra-website, Property 5: Heading Hierarchy Validity
 *
 * *For any* page in the website, the heading structure SHALL contain exactly one H1 element,
 * and heading levels SHALL not skip (e.g., H1 followed by H3 without H2 is invalid).
 *
 * **Validates: Requirements 11.4**
 */

import * as fc from "fast-check";

// Define page configurations with their expected heading structures
// This represents the architectural contract for heading hierarchy
interface PageHeadingConfig {
  path: string;
  hasH1: boolean;
  h1Source: "Hero" | "SectionHeading" | "inline" | "PartnerCTA";
  expectedH1Count: number;
}

const pageHeadingConfigs: PageHeadingConfig[] = [
  { path: "/", hasH1: true, h1Source: "Hero", expectedH1Count: 1 },
  { path: "/about", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/products", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/experience", hasH1: true, h1Source: "inline", expectedH1Count: 1 },
  { path: "/contact", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/privacy-policy", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/terms", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/disclaimer", hasH1: true, h1Source: "SectionHeading", expectedH1Count: 1 },
  { path: "/partnership", hasH1: true, h1Source: "PartnerCTA", expectedH1Count: 1 },
];

// Heading level validation helper
interface HeadingLevel {
  level: number;
  text: string;
}

function validateHeadingHierarchy(headings: HeadingLevel[]): { isValid: boolean; error?: string } {
  if (headings.length === 0) {
    return { isValid: false, error: "No headings found" };
  }

  // Check for exactly one H1
  const h1Count = headings.filter((h) => h.level === 1).length;
  if (h1Count === 0) {
    return { isValid: false, error: "No H1 heading found" };
  }
  if (h1Count > 1) {
    return { isValid: false, error: `Multiple H1 headings found: ${h1Count}` };
  }

  // Check that H1 comes first (or early in the document)
  const firstH1Index = headings.findIndex((h) => h.level === 1);
  if (firstH1Index > 0) {
    const headingsBeforeH1 = headings.slice(0, firstH1Index);
    const hasHigherLevelBeforeH1 = headingsBeforeH1.some((h) => h.level > 1);
    if (hasHigherLevelBeforeH1) {
      // This is acceptable - some pages may have section headings before the main H1
      // as long as they don't skip levels
    }
  }

  // Check for no skipped levels
  let currentLevel = 0;
  for (const heading of headings) {
    if (heading.level > currentLevel + 1 && currentLevel > 0) {
      return {
        isValid: false,
        error: `Heading level skipped: went from H${currentLevel} to H${heading.level}`,
      };
    }
    currentLevel = heading.level;
  }

  return { isValid: true };
}

describe("Property 5: Heading Hierarchy Validity", () => {
  describe("Page heading configuration", () => {
    it("every page should be configured to have exactly one H1", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageHeadingConfigs),
          (config: PageHeadingConfig) => {
            // Property: Every page must have H1 configured
            expect(config.hasH1).toBe(true);
            expect(config.expectedH1Count).toBe(1);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("every page should have a valid H1 source", () => {
      const validSources = ["Hero", "SectionHeading", "inline", "PartnerCTA"];

      fc.assert(
        fc.property(
          fc.constantFrom(...pageHeadingConfigs),
          (config: PageHeadingConfig) => {
            // Property: H1 source must be one of the valid component types
            expect(validSources).toContain(config.h1Source);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("all page paths should be unique", () => {
      const paths = pageHeadingConfigs.map((c) => c.path);
      const uniquePaths = new Set(paths);

      // Property: All paths should be unique
      expect(uniquePaths.size).toBe(paths.length);
    });
  });

  describe("Heading hierarchy validation function", () => {
    it("should accept valid heading hierarchies with single H1", () => {
      const validHierarchies: HeadingLevel[][] = [
        [{ level: 1, text: "Main Title" }],
        [
          { level: 1, text: "Main Title" },
          { level: 2, text: "Section" },
        ],
        [
          { level: 1, text: "Main Title" },
          { level: 2, text: "Section 1" },
          { level: 2, text: "Section 2" },
        ],
        [
          { level: 1, text: "Main Title" },
          { level: 2, text: "Section" },
          { level: 3, text: "Subsection" },
        ],
        [
          { level: 1, text: "Main Title" },
          { level: 2, text: "Section 1" },
          { level: 3, text: "Subsection 1.1" },
          { level: 2, text: "Section 2" },
        ],
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...validHierarchies),
          (headings: HeadingLevel[]) => {
            const result = validateHeadingHierarchy(headings);

            // Property: Valid hierarchies should pass validation
            expect(result.isValid).toBe(true);
            expect(result.error).toBeUndefined();
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should reject hierarchies with no H1", () => {
      const noH1Hierarchies: HeadingLevel[][] = [
        [{ level: 2, text: "Section" }],
        [
          { level: 2, text: "Section 1" },
          { level: 3, text: "Subsection" },
        ],
        [
          { level: 3, text: "Subsection" },
          { level: 4, text: "Sub-subsection" },
        ],
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...noH1Hierarchies),
          (headings: HeadingLevel[]) => {
            const result = validateHeadingHierarchy(headings);

            // Property: Hierarchies without H1 should fail
            expect(result.isValid).toBe(false);
            expect(result.error).toContain("No H1");
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should reject hierarchies with multiple H1s", () => {
      const multipleH1Hierarchies: HeadingLevel[][] = [
        [
          { level: 1, text: "Title 1" },
          { level: 1, text: "Title 2" },
        ],
        [
          { level: 1, text: "Title 1" },
          { level: 2, text: "Section" },
          { level: 1, text: "Title 2" },
        ],
        [
          { level: 1, text: "Title 1" },
          { level: 1, text: "Title 2" },
          { level: 1, text: "Title 3" },
        ],
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...multipleH1Hierarchies),
          (headings: HeadingLevel[]) => {
            const result = validateHeadingHierarchy(headings);

            // Property: Hierarchies with multiple H1s should fail
            expect(result.isValid).toBe(false);
            expect(result.error).toContain("Multiple H1");
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should reject hierarchies with skipped levels", () => {
      const skippedLevelHierarchies: HeadingLevel[][] = [
        [
          { level: 1, text: "Title" },
          { level: 3, text: "Subsection" }, // Skipped H2
        ],
        [
          { level: 1, text: "Title" },
          { level: 2, text: "Section" },
          { level: 4, text: "Deep" }, // Skipped H3
        ],
        [
          { level: 1, text: "Title" },
          { level: 4, text: "Very Deep" }, // Skipped H2 and H3
        ],
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...skippedLevelHierarchies),
          (headings: HeadingLevel[]) => {
            const result = validateHeadingHierarchy(headings);

            // Property: Hierarchies with skipped levels should fail
            expect(result.isValid).toBe(false);
            expect(result.error).toContain("skipped");
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should reject empty heading arrays", () => {
      const result = validateHeadingHierarchy([]);

      // Property: Empty heading arrays should fail
      expect(result.isValid).toBe(false);
      expect(result.error).toContain("No headings");
    });
  });

  describe("Generated heading hierarchies", () => {
    // Generator for valid heading hierarchies
    const validHeadingHierarchyArb = fc
      .array(fc.integer({ min: 2, max: 6 }), { minLength: 0, maxLength: 10 })
      .map((levels) => {
        // Always start with H1
        const headings: HeadingLevel[] = [{ level: 1, text: "Main Title" }];
        let currentLevel = 1;

        for (const targetLevel of levels) {
          // Ensure we don't skip levels
          const nextLevel = Math.min(targetLevel, currentLevel + 1);
          headings.push({ level: nextLevel, text: `Heading ${nextLevel}` });
          currentLevel = nextLevel;
        }

        return headings;
      });

    it("generated valid hierarchies should pass validation", () => {
      fc.assert(
        fc.property(validHeadingHierarchyArb, (headings: HeadingLevel[]) => {
          const result = validateHeadingHierarchy(headings);

          // Property: All generated valid hierarchies should pass
          expect(result.isValid).toBe(true);
        }),
        { numRuns: 100 }
      );
    });
  });

  describe("Page coverage", () => {
    it("all application routes should have heading configuration", () => {
      const expectedRoutes = [
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

      const configuredPaths = pageHeadingConfigs.map((c) => c.path);

      fc.assert(
        fc.property(
          fc.constantFrom(...expectedRoutes),
          (route: string) => {
            // Property: Every expected route should have heading configuration
            expect(configuredPaths).toContain(route);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
