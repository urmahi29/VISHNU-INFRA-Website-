import { UserRound } from "lucide-react";
import { leadership } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section className="bg-secondary">
      <div className="container-x section-y">
        <SectionHeading
          align="center"
          eyebrow="Leadership"
          title="Leadership"
          description="Vishnu Infra is led by its directors, guiding project execution and company operations."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-7 sm:grid-cols-2">
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 120}>
              <div className="card-industrial flex h-full flex-col items-center px-8 py-10 text-center">
                {/* Photo slot — replace with a real portrait when supplied. */}
                <span className="grid h-24 w-24 place-items-center border border-border bg-muted text-muted-foreground">
                  <UserRound className="h-10 w-10" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl uppercase">{person.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {person.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
