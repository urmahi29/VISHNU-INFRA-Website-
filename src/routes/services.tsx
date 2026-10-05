import { createFileRoute } from "@tanstack/react-router";
import { images, workProcess } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const title = "Services | Road, Highway & C.C. Road Construction — Vishnu Infra";
const description =
  "Vishnu Infra provides highway construction, C.C. road construction, bridges and culverts, earthwork, machinery rental and road infrastructure services in Rajasthan.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Construction Services"
        description="Road, highway and infrastructure construction services for government and infrastructure projects."
        image={images.projectNight}
        imageAlt="Night-time asphalt paving with a hot mix paver under floodlights"
      />

      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="What We Do"
            title="Services In Detail"
            description="Each service is delivered with experienced project teams and construction equipment."
          />
          <div className="mt-12">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>

      <section className="surface-dark">
        <div className="container-x section-y">
          <SectionHeading
            invert
            align="center"
            eyebrow="How We Work"
            title="Plan. Execute. Deliver."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 110}>
                <div className="h-full border border-charcoal-foreground/15 bg-charcoal-foreground/5 p-8">
                  <span className="font-display text-5xl font-bold text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-2xl uppercase text-charcoal-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-charcoal-foreground/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
