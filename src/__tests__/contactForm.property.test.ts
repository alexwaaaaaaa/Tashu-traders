/**
 * Property Test: Contact Form Validation Completeness
 * Feature: tashra-website, Property 3: Contact Form Validation Completeness
 *
 * *For any* contact form input combination:
 * - If all required fields (name, organization, phone, email, requirements) contain valid data,
 *   the form SHALL submit successfully and display a success confirmation
 * - If any required field is empty or contains invalid data (e.g., malformed email),
 *   the form SHALL display an appropriate error message and prevent submission
 *
 * **Validates: Requirements 8.3, 8.4**
 */

import * as fc from "fast-check";
import {
  ContactFormData,
  validateContactForm,
  validateName,
  validateOrganization,
  validatePhone,
  validateEmail,
  validateRequirements,
} from "@/components/forms/ContactForm";

// Generators for valid data
const validNameArb = fc.string({ minLength: 2, maxLength: 100 }).filter((s) => s.trim().length >= 2);
const validOrgArb = fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length >= 1);
// Generate phone numbers with at least 10 digits (the validation requires 10+ digit characters)
const validPhoneArb = fc
  .tuple(
    fc.constantFrom("+", ""),
    fc.array(fc.integer({ min: 0, max: 9 }), { minLength: 10, maxLength: 15 })
  )
  .map(([prefix, digits]) => prefix + digits.join(""));
const validEmailArb = fc.emailAddress();
const validRequirementsArb = fc.string({ minLength: 10, maxLength: 1000 }).filter((s) => s.trim().length >= 10);

// Generators for invalid data
const emptyOrWhitespaceArb = fc.constantFrom("", "   ", "\t", "\n");
const shortNameArb = fc.string({ maxLength: 1 });
const invalidPhoneArb = fc.stringMatching(/^[a-zA-Z]{1,5}$/);
const invalidEmailArb = fc.string({ minLength: 1, maxLength: 50 }).filter(
  (s) => s.trim().length > 0 && (!s.includes("@") || !s.includes("."))
);
const shortRequirementsArb = fc.string({ maxLength: 9 }).filter((s) => s.trim().length < 10);

// Generator for valid form data
const validFormDataArb: fc.Arbitrary<ContactFormData> = fc.record({
  name: validNameArb,
  organization: validOrgArb,
  phone: validPhoneArb,
  email: validEmailArb,
  requirements: validRequirementsArb,
});

describe("Property 3: Contact Form Validation Completeness", () => {
  describe("Valid data acceptance", () => {
    it("should accept valid form data with all required fields filled correctly", () => {
      fc.assert(
        fc.property(validFormDataArb, (formData: ContactFormData) => {
          const result = validateContactForm(formData);
          
          // Property: Valid data should pass validation
          expect(result.isValid).toBe(true);
          expect(Object.keys(result.errors)).toHaveLength(0);
        }),
        { numRuns: 100 }
      );
    });
  });

  describe("Invalid name rejection", () => {
    it("should reject empty or whitespace-only names", () => {
      fc.assert(
        fc.property(emptyOrWhitespaceArb, (name: string) => {
          const error = validateName(name);
          
          // Property: Empty/whitespace names should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("required");
        }),
        { numRuns: 100 }
      );
    });

    it("should reject names shorter than 2 characters", () => {
      fc.assert(
        fc.property(
          shortNameArb.filter((s) => s.trim().length > 0 && s.trim().length < 2),
          (name: string) => {
            const error = validateName(name);
            
            // Property: Short names should produce a length error
            expect(error).not.toBeNull();
            expect(error).toContain("2 characters");
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Invalid organization rejection", () => {
    it("should reject empty or whitespace-only organization names", () => {
      fc.assert(
        fc.property(emptyOrWhitespaceArb, (org: string) => {
          const error = validateOrganization(org);
          
          // Property: Empty/whitespace organizations should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("required");
        }),
        { numRuns: 100 }
      );
    });
  });

  describe("Invalid phone rejection", () => {
    it("should reject empty phone numbers", () => {
      fc.assert(
        fc.property(emptyOrWhitespaceArb, (phone: string) => {
          const error = validatePhone(phone);
          
          // Property: Empty phone should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("required");
        }),
        { numRuns: 100 }
      );
    });

    it("should reject invalid phone formats", () => {
      fc.assert(
        fc.property(invalidPhoneArb, (phone: string) => {
          const error = validatePhone(phone);
          
          // Property: Invalid phone format should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("valid phone");
        }),
        { numRuns: 100 }
      );
    });
  });

  describe("Invalid email rejection", () => {
    it("should reject empty emails", () => {
      fc.assert(
        fc.property(emptyOrWhitespaceArb, (email: string) => {
          const error = validateEmail(email);
          
          // Property: Empty email should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("required");
        }),
        { numRuns: 100 }
      );
    });

    it("should reject invalid email formats", () => {
      fc.assert(
        fc.property(invalidEmailArb, (email: string) => {
          const error = validateEmail(email);
          
          // Property: Invalid email format should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("valid email");
        }),
        { numRuns: 100 }
      );
    });
  });

  describe("Invalid requirements rejection", () => {
    it("should reject empty requirements", () => {
      fc.assert(
        fc.property(emptyOrWhitespaceArb, (req: string) => {
          const error = validateRequirements(req);
          
          // Property: Empty requirements should produce an error
          expect(error).not.toBeNull();
          expect(error).toContain("describe");
        }),
        { numRuns: 100 }
      );
    });

    it("should reject requirements shorter than 10 characters", () => {
      fc.assert(
        fc.property(
          shortRequirementsArb.filter((s) => s.trim().length > 0 && s.trim().length < 10),
          (req: string) => {
            const error = validateRequirements(req);
            
            // Property: Short requirements should produce a length error
            expect(error).not.toBeNull();
            expect(error).toContain("10 characters");
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe("Form-level validation", () => {
    it("should reject form with any single invalid field", () => {
      // Test with invalid name
      fc.assert(
        fc.property(
          fc.record({
            name: emptyOrWhitespaceArb,
            organization: validOrgArb,
            phone: validPhoneArb,
            email: validEmailArb,
            requirements: validRequirementsArb,
          }),
          (formData: ContactFormData) => {
            const result = validateContactForm(formData);
            
            // Property: Form with invalid name should fail
            expect(result.isValid).toBe(false);
            expect(result.errors.name).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should collect all errors when multiple fields are invalid", () => {
      const allInvalidFormArb: fc.Arbitrary<ContactFormData> = fc.record({
        name: emptyOrWhitespaceArb,
        organization: emptyOrWhitespaceArb,
        phone: emptyOrWhitespaceArb,
        email: emptyOrWhitespaceArb,
        requirements: emptyOrWhitespaceArb,
      });

      fc.assert(
        fc.property(allInvalidFormArb, (formData: ContactFormData) => {
          const result = validateContactForm(formData);
          
          // Property: All invalid fields should produce errors
          expect(result.isValid).toBe(false);
          expect(Object.keys(result.errors).length).toBe(5);
          expect(result.errors.name).toBeDefined();
          expect(result.errors.organization).toBeDefined();
          expect(result.errors.phone).toBeDefined();
          expect(result.errors.email).toBeDefined();
          expect(result.errors.requirements).toBeDefined();
        }),
        { numRuns: 100 }
      );
    });
  });
});
