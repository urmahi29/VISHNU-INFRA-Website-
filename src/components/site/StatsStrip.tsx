import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

type StatItem = { label: string; value?: number; suffix?: string; text?: string };

const items: StatItem[] = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 2006, suffix: "", label: "Established" },
  { text: "Government & PWD", label: "Project Experience" },
];

export function StatsStrip() {
  return (
    <section aria-label="Company statistics" className="surface-dark">
      <div className="container-x grid grid-cols-2 gap-px bg-charcoal-foreground/10 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 90}
            className="bg-charcoal px-5 py-10 text-center lg:px-8 lg:py-14"
          >
            <p className="font-display text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              {item.text ? (
                <span className="text-2xl sm:text-3xl lg:text-4xl">{item.text}</span>
              ) : (
                <Counter value={item.value ?? 0} suffix={item.suffix ?? ""} />
              )}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-foreground/65 sm:text-sm">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
