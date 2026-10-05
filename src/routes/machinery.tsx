import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MachineryGrid } from "@/components/site/MachineryGrid";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const title = "Plant & Machinery | Construction Equipment — Vishnu Infra";
const description =
  "Construction equipment and machinery used by Vishnu Infra for road and highway projects, including tippers, excavators, graders, rollers, pavers, hot mix plant and batching plant.";

export const Route = createFileRoute("/machinery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/machinery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/machinery" }],
  }),
  component: Machinery,
});

function Machinery() {
  return (
    <>
      <PageHero
        eyebrow="Plant & Machinery"
        title="Construction Equipment & Machinery"
        description="Machinery resources supporting execution across road and highway project sites."
        image={images.machineryFleet}
        imageAlt="Fleet of excavators, grader, roller and tipper trucks at a construction yard"
      />

      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Equipment"
            title="Our Machinery"
            description="Machine details such as quantity, model and capacity are shown only where supplied by the company."
          />
          <div className="mt-12">
            <MachineryGrid />
          </div>
        </div>
      </section>

      <section className="surface-dark">
        <div className="container-x grid items-center gap-10 section-y lg:grid-cols-2">
          <Reveal>
            <img
              src={images.machineryFleet}
              alt="Construction machinery fleet parked at a project yard"
              loading="lazy"
              width={1600}
              height={912}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              invert
              eyebrow="Machinery Rental"
              title="Equipment Available for Project Requirements"
              description="Construction machinery is available to support project execution. For availability and requirements, please contact our team."
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
