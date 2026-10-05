import { Building2, Landmark } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const entries = [
  { label: "PWD", icon: Landmark },
  { label: "Government Departments", icon: Building2 },
];

export function ClientsSection() {
  return (
    <section className="bg-background">
      <div className="container-x section-y">
        <SectionHeading
          align="center"
          eyebrow="Project Experience"
          title="Serving Infrastructure & Government Projects"
          description="Vishnu Infra undertakes work associated with government tender and public infrastructure projects."
        />
        <div className="mx-auto mt-11 grid max-w-2xl gap-5 sm:grid-cols-2">
          {entries.map((entry, i) => (
            <Reveal key={entry.label} delay={i * 110}>
              <div className="flex h-full items-center gap-4 border border-border bg-secondary px-7 py-7">
                <entry.icon className="h-8 w-8 shrink-0 text-primary" aria-hidden />
                <p className="font-display text-lg font-semibold uppercase tracking-[0.14em]">
                  {entry.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
