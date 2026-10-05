import { CalendarRange, Route, ShieldCheck, Truck } from "lucide-react";
import { whyChooseUs, images } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const iconMap = {
  calendar: CalendarRange,
  road: Route,
  shield: ShieldCheck,
  truck: Truck,
} as const;

export function WhyChoose() {
  return (
    <section className="surface-dark">
      <div className="container-x section-y grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img
            src={images.whyChoose}
            alt="SANY Excavator loading earth into TATA tipper truck at Vishnu Infra construction site"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-full w-full object-cover"
          />
          <span
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-32 w-32 border-4 border-primary lg:block"
          />
        </Reveal>

        <div>
          <SectionHeading
            invert
            eyebrow="Why Vishnu Infra"
            title="Why Choose Vishnu Infra?"
            description="Experience, infrastructure focus and construction resources brought together on every project."
          />
          <ul className="mt-10 space-y-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal as="li" key={item.title} delay={i * 90} className="flex gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl uppercase text-charcoal-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-charcoal-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
