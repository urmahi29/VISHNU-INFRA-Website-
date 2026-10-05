import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, capabilities, company } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { StatsStrip } from "@/components/site/StatsStrip";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Leadership } from "@/components/site/Leadership";
import { CTASection } from "@/components/site/CTASection";

const title = "About Vishnu Infra | Infrastructure Company in Pali, Rajasthan";
const description =
  `Established in ${company.established} and based in Pali, Rajasthan, Vishnu Infra undertakes road and highway construction and government tender projects with ${company.experienceYears} years of experience.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Vishnu Infra"
        description={`A construction and infrastructure company established in ${company.established}, based in Pali, Rajasthan.`}
        image={images.projectExpressway}
        imageAlt="Aerial view of a multi-lane expressway with a bridge flyover"
      />

      <section className="bg-background">
        <div className="container-x section-y grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Company Introduction"
              title="Building Infrastructure with Experience and Commitment"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Established in {company.established}, Vishnu Infra is a construction and infrastructure
              company based in Pali, Rajasthan. The company undertakes road and highway
              construction and works on government tender projects.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With more than {company.experienceYears} years of experience and {company.completedProjects} completed projects, Vishnu
              Infra continues to contribute to infrastructure development through
              practical execution, construction resources and experienced project teams.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold"
            >
              View Our Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.aboutRoad}
              alt="Concrete road construction with paver machine and site crew"
              loading="lazy"
              width={1200}
              height={1408}
              className="max-h-[34rem] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-secondary">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="What We Undertake"
            description="Core areas of construction work carried out by Vishnu Infra."
          />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <Reveal key={item.no} delay={(i % 3) * 90}>
                <div className="h-full bg-card p-8">
                  <span className="font-display text-sm font-bold tracking-[0.24em] text-primary">
                    {item.no}
                  </span>
                  <h3 className="mt-4 text-xl uppercase">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Leadership />
      <WhyChoose />
      <CTASection />
    </>
  );
}
