"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="divide-y divide-cream-dark" role="region" aria-label="Frequently asked questions">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${id}-button-${i}`;
        const panelId = `${id}-panel-${i}`;

        return (
          <div key={i}>
            <h3>
              <button
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="text-base font-medium text-charcoal pr-4 font-sans">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              )}
            >
              <p className="text-sm text-muted leading-relaxed font-sans">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
