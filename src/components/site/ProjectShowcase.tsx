import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectStatus;
const filters: Filter[] = ["All", "Completed", "Ongoing"];

export function ProjectShowcase({ limit }: { limit?: number | undefined }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    const list =
      filter === "All" ? projects : projects.filter((p) => p.status === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by status"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            type="button"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "h-11 border px-6 font-display text-sm font-bold uppercase tracking-[0.16em] transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 90} as="article">
            <div className="card-industrial group h-full overflow-hidden">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category} project reference image`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={cn(
                    "absolute left-0 top-0 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em]",
                    project.status === "Completed"
                      ? "bg-primary text-primary-foreground"
                      : "bg-charcoal text-charcoal-foreground",
                  )}
                >
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl uppercase transition-colors group-hover:text-primary">
                  {project.name}
                </h3>
                {project.location ? (
                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" aria-hidden />
                    {project.location}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
