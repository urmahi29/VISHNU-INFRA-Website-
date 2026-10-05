import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-charcoal py-16 lg:min-h-[56vh]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        loading="eager"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,oklch(0.14_0.008_60/0.96),oklch(0.14_0.008_60/0.55))]"
      />
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl uppercase text-charcoal-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-charcoal-foreground/75 lg:text-lg">
          {description}
        </p>
        <nav aria-label="Breadcrumb" className="mt-6">
          <ol className="flex items-center gap-2 text-sm text-charcoal-foreground/60">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <li className="text-primary">{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
