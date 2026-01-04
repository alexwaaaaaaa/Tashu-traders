interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <HeadingTag className="text-3xl font-bold text-primary-navy sm:text-4xl">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
