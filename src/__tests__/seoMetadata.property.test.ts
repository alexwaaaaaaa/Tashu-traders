/**
 * Property Test: SEO Metadata Presence
 * Feature: tashra-website, Property 4: SEO Metadata Presence
 *
 * *For any* page in the website:
 * - The page SHALL have a non-empty meta title
 * - The page SHALL have a non-empty meta description
 * - The meta title SHALL be unique across all pages
 * - The URL SHALL follow SEO-friendly patterns (lowercase, hyphen-separated, no special characters)
 *
 * **Validates: Requirements 11.1, 11.2**
 */

import * as fc from "fast-check";
import { pageMetadata, generateMetadata } from "@/lib/metadata";

// All page keys in the metadata configuration
const pageKeys = Object.keys(pageMetadata) as Array<keyof typeof pageMetadata>;

describe("Property 4: SEO Metadata Presence", () => {
  describe("Non-empty meta titles", () => {
    it("every page should have a non-empty meta title", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const meta = pageMetadata[pageKey];

            // Property: Title must exist and be non-empty
            expect(meta.title).toBeDefined();
            expect(typeof meta.title).toBe("string");
            expect(meta.title.trim().length).toBeGreaterThan(0);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("generated metadata should have non-empty title", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const metadata = generateMetadata(pageKey);

            // Property: Generated metadata title must be non-empty
            expect(metadata.title).toBeDefined();
            expect(typeof metadata.title).toBe("string");
            expect((metadata.title as string).trim().length).toBeGreaterThan(0);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Non-empty meta descriptions", () => {
    it("every page should have a non-empty meta description", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const meta = pageMetadata[pageKey];

            // Property: Description must exist and be non-empty
            expect(meta.description).toBeDefined();
            expect(typeof meta.description).toBe("string");
            expect(meta.description.trim().length).toBeGreaterThan(0);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("generated metadata should have non-empty description", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const metadata = generateMetadata(pageKey);

            // Property: Generated metadata description must be non-empty
            expect(metadata.description).toBeDefined();
            expect(typeof metadata.description).toBe("string");
            expect((metadata.description as string).trim().length).toBeGreaterThan(0);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Unique meta titles", () => {
    it("all page titles should be unique", () => {
      const allTitles = pageKeys.map((key) => pageMetadata[key].title);
      const uniqueTitles = new Set(allTitles);

      // Property: All titles should be unique (no duplicates)
      expect(uniqueTitles.size).toBe(allTitles.length);
    });

    it("no two pages should share the same title", () => {
      fc.assert(
        fc.property(
          fc.tuple(
            fc.constantFrom(...pageKeys),
            fc.constantFrom(...pageKeys)
          ).filter(([a, b]) => a !== b),
          ([pageKeyA, pageKeyB]: [keyof typeof pageMetadata, keyof typeof pageMetadata]) => {
            const titleA = pageMetadata[pageKeyA].title;
            const titleB = pageMetadata[pageKeyB].title;

            // Property: Different pages must have different titles
            expect(titleA).not.toBe(titleB);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("SEO-friendly URL patterns", () => {
    it("all page paths should follow SEO-friendly patterns", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const meta = pageMetadata[pageKey];
            const path = meta.path;

            // Property: Path must exist
            expect(path).toBeDefined();

            // Property: Path must start with /
            expect(path!.startsWith("/")).toBe(true);

            // Property: Path must be lowercase
            expect(path).toBe(path!.toLowerCase());

            // Property: Path must only contain lowercase letters, numbers, hyphens, and slashes
            expect(path).toMatch(/^\/[a-z0-9-]*$/);

            // Property: Path must not contain special characters (except hyphen)
            expect(path).not.toMatch(/[^a-z0-9/-]/);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("all page paths should be unique", () => {
      const allPaths = pageKeys.map((key) => pageMetadata[key].path);
      const uniquePaths = new Set(allPaths);

      // Property: All paths should be unique (no duplicates)
      expect(uniquePaths.size).toBe(allPaths.length);
    });
  });

  describe("Open Graph metadata", () => {
    it("generated metadata should include Open Graph tags", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const metadata = generateMetadata(pageKey);

            // Property: Open Graph metadata must exist
            expect(metadata.openGraph).toBeDefined();
            expect(metadata.openGraph!.title).toBeDefined();
            expect(metadata.openGraph!.description).toBeDefined();
            expect(metadata.openGraph!.url).toBeDefined();
            expect(metadata.openGraph!.siteName).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    });

    it("Open Graph URL should match page path", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const meta = pageMetadata[pageKey];
            const metadata = generateMetadata(pageKey);
            const ogUrl = metadata.openGraph!.url as string;

            // Property: Open Graph URL should end with the page path
            expect(ogUrl.endsWith(meta.path!)).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Twitter card metadata", () => {
    it("generated metadata should include Twitter card tags", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const metadata = generateMetadata(pageKey);

            // Property: Twitter metadata must exist
            expect(metadata.twitter).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect((metadata.twitter as any).card).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect((metadata.twitter as any).title).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect((metadata.twitter as any).description).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Metadata consistency", () => {
    it("generated metadata title should match source metadata title", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const sourceMeta = pageMetadata[pageKey];
            const generatedMeta = generateMetadata(pageKey);

            // Property: Generated title should match source
            expect(generatedMeta.title).toBe(sourceMeta.title);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("generated metadata description should match source metadata description", () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...pageKeys),
          (pageKey: keyof typeof pageMetadata) => {
            const sourceMeta = pageMetadata[pageKey];
            const generatedMeta = generateMetadata(pageKey);

            // Property: Generated description should match source
            expect(generatedMeta.description).toBe(sourceMeta.description);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
