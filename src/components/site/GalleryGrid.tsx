import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length]);

  const active = index === null ? null : items[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "h-11 border px-5 font-display text-sm font-bold uppercase tracking-[0.14em] transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:border-primary hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.src + i} delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden border border-border"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-[linear-gradient(to_top,oklch(0.14_0.008_60/0.9),transparent)] px-4 py-3 text-left">
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-charcoal-foreground">
                  {item.category}
                </span>
                {item.placeholder ? (
                  <span className="bg-charcoal/70 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-charcoal-foreground/80">
                    Reference image
                  </span>
                ) : null}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Images marked “Reference image” are illustrative construction photographs, not
        photographs of Vishnu Infra project sites. They are placed so real site
        photographs can replace them.
      </p>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-charcoal-foreground/30 text-charcoal-foreground hover:border-primary hover:text-primary"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center border border-charcoal-foreground/30 text-charcoal-foreground hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[75vh] w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-charcoal-foreground/75">
              {active.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) + 1) % items.length);
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center border border-charcoal-foreground/30 text-charcoal-foreground hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}
