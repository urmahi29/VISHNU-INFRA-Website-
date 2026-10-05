import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Construction,
  Layers,
  Mountain,
  Route,
  Truck,
  Waypoints,
} from "lucide-react";
import { services, type ServiceIcon } from "@/data/site";
import { Reveal } from "./Reveal";

const iconMap: Record<ServiceIcon, typeof Route> = {
  highway: Route,
  concrete: Layers,
  bridge: Waypoints,
  earthwork: Mountain,
  machinery: Truck,
  infrastructure: Construction,
};

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        return (
          <Reveal key={service.slug} delay={(i % 3) * 90} as="article">
            <div className="card-industrial group flex h-full flex-col overflow-hidden">
              {detailed ? (
                <img
                  src={service.image}
                  alt={`${service.title} reference image`}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-7">
                <span className="grid h-14 w-14 place-items-center bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl uppercase transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-muted-foreground">
                  {detailed ? service.detail : service.short}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
