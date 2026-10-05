import {
  Truck,
  Shovel,
  SlidersHorizontal,
  Disc,
  CircleDot,
  Construction,
  Boxes,
  Factory,
  Flame,
  HardHat,
  Droplet,
  LucideIcon,
} from "lucide-react";
import { machinery } from "@/data/site";
import { Reveal } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  "Tippers": Truck,
  "Excavator": Shovel,
  "Grader": SlidersHorizontal,
  "Road Roller": Disc,
  "Tandem Roller": CircleDot,
  "Backhoe Loader": Construction,
  "Stone Crusher": Boxes,
  "Batching Plant": Factory,
  "Hot Mix Plant": Flame,
  "Paver": HardHat,
  "Water Tanker": Droplet,
};

export function MachineryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {machinery.map((machine, i) => {
        const IconComponent = iconMap[machine.name] || Truck;
        return (
          <Reveal key={machine.name} delay={(i % 4) * 70} as="article">
            <div className="card-industrial group h-full">
              {machine.image ? (
                <img
                  src={machine.image}
                  alt={machine.name}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
              ) : null}
              <div className="flex items-start gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <IconComponent className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg uppercase">{machine.name}</h3>
                  <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {machine.quantity ? (
                      <div className="flex gap-2">
                        <dt className="font-semibold">Quantity:</dt>
                        <dd>{machine.quantity}</dd>
                      </div>
                    ) : null}
                    {machine.model ? (
                      <div className="flex gap-2">
                        <dt className="font-semibold">Model:</dt>
                        <dd>{machine.model}</dd>
                      </div>
                    ) : null}
                    {machine.capacity ? (
                      <div className="flex gap-2">
                        <dt className="font-semibold">Capacity:</dt>
                        <dd>{machine.capacity}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
