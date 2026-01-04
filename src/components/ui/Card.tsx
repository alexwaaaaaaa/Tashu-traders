import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  items?: string[];
  className?: string;
}

export function Card({
  icon,
  title,
  description,
  items,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {icon && (
        <div className="mb-4 text-4xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-primary-navy">{title}</h3>
      <p className="mb-4 text-neutral-gray-600">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-sm text-neutral-gray-600"
            >
              <span className="mr-2 text-primary-green">✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
