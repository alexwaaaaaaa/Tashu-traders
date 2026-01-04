import { Container } from "../ui/Container";
import { highlightPoints } from "@/lib/constants";

interface HighlightsProps {
  className?: string;
}

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0 text-primary-green"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function Highlights({ className = "" }: HighlightsProps) {
  return (
    <section className={`bg-white py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            Why Choose TASHRA?
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlightPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-4 rounded-lg bg-gray-50 p-4"
              >
                <CheckIcon />
                <span className="text-base font-medium text-gray-800 sm:text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
