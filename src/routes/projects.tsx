import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const title = "Projects | Expressway & Highway Construction — Vishnu Infra";
const description =
  "Completed and ongoing expressway, highway and bypass projects undertaken by Vishnu Infra, a road construction company based in Pali, Rajasthan.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our Projects"
        description="Expressway, highway and bypass projects — completed and ongoing."
        image={images.heroHighway}
        imageAlt="Highway construction site with heavy machinery at sunset"
      />

      <section className="bg-background">
        <div className="container-x pt-14">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {[
              { value: 18, label: "Completed Projects" },
              { value: 20, label: "Years Experience" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="bg-card px-8 py-10 text-center">
                  <p className="font-display text-5xl font-bold text-primary lg:text-6xl">
                    <Counter value={s.value} suffix="+" />
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Project Portfolio"
            title="Projects That Define Our Experience"
            description="Filter by project status to browse completed and ongoing work."
          />
          <div className="mt-12">
            <ProjectShowcase />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
