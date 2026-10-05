import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border border-border bg-card">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-semibold uppercase tracking-[0.04em] transition-colors hover:text-primary"
              >
                {faq.q}
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center border transition-colors",
                    isOpen
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-primary",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" aria-hidden />
                  ) : (
                    <Plus className="h-4 w-4" aria-hidden />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="px-6 pb-6 text-muted-foreground"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
