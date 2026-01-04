"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "../ui/Button";

export interface ContactFormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  requirements: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

const initialFormData: ContactFormData = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  requirements: "",
};

// Validation functions exported for testing
export function validateName(name: string): string | null {
  if (!name.trim()) return "Name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  return null;
}

export function validateOrganization(organization: string): string | null {
  if (!organization.trim()) return "Organization name is required";
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return "Phone number is required";
  const phoneRegex = /^[+]?[\d\s-]{10,}$/;
  if (!phoneRegex.test(phone.trim())) return "Please enter a valid phone number";
  return null;
}

export function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
  return null;
}

export function validateRequirements(requirements: string): string | null {
  if (!requirements.trim()) return "Please describe your tender requirements";
  if (requirements.trim().length < 10) return "Requirements must be at least 10 characters";
  return null;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const orgError = validateOrganization(data.organization);
  if (orgError) errors.organization = orgError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const reqError = validateRequirements(data.requirements);
  if (reqError) errors.requirements = reqError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

export function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`} noValidate>
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 font-medium">
            Thank you for your inquiry! We will get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
          Organization <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy ${
            errors.organization ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Government department / Organization name"
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="+91 XXXXX XXXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
          Tender / Requirement Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy resize-vertical ${
            errors.requirements ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Please describe your tender requirements, quantities, and delivery timeline..."
        />
        {errors.requirements && (
          <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting || hasErrors}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Tender Inquiry"}
      </Button>
    </form>
  );
}
