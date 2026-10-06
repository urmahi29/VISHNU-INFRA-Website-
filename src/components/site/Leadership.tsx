import { Crown, HardHat } from "lucide-react";
import { leadership } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section className="bg-secondary">
      <div className="container-x section-y">
        <SectionHeading
          align="center"
          eyebrow="Leadership & Management"
          title="LEADERSHIP & MANAGEMENT"
          description="Vishnu Infra is guided by experienced leadership and dedicated site execution teams."
        />

        {/* Upper Box — Owner / Director */}
        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal delay={100}>
            <div className="card-industrial relative overflow-hidden p-8 sm:p-10 text-center border-2 border-primary/40 bg-background shadow-lg">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-primary" />
              
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Crown className="h-4 w-4" />
                <span>{leadership.owner.role}</span>
              </div>

              <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-wide text-foreground sm:text-4xl">
                {leadership.owner.name}
              </h3>
              
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">
                Vishnu Infra Construction & Infrastructure
              </p>
            </div>
          </Reveal>
        </div>

        {/* Lower Section — Managers & Site Handlers */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-primary/40" />
              <h4 className="font-display text-xl font-bold uppercase tracking-[0.18em] text-foreground text-center flex items-center gap-2">
                <HardHat className="h-5 w-5 text-primary inline-block" />
                <span>{leadership.teamTitle}</span>
              </h4>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.team.map((person, i) => (
              <Reveal key={person.name} delay={250 + i * 80}>
                <div className="card-industrial flex flex-col justify-between p-6 border border-border bg-background transition-all hover:border-primary/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-extrabold tracking-widest text-primary/80">
                        {person.no}
                      </span>
                      <HardHat className="h-4 w-4 text-muted-foreground/60" />
                    </div>
                    <h5 className="mt-3 font-display text-xl font-bold uppercase text-foreground">
                      {person.name}
                    </h5>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground border-t border-border/60 pt-3">
                    {person.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
