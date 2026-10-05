import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company, images } from "@/data/site";
import { StatsStrip } from "@/components/site/StatsStrip";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { MachineryGrid } from "@/components/site/MachineryGrid";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Leadership } from "@/components/site/Leadership";
import { ClientsSection } from "@/components/site/ClientsSection";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CTASection } from "@/components/site/CTASection";
import { workProcess } from "@/data/site";

const title = "Vishnu Infra | Road & Highway Construction Company in Rajasthan";
const description =
  "Vishnu Infra is a construction and infrastructure company established in 2000 and based in Pali, Rajasthan, specializing in road, highway and related infrastructure projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Vishnu Infra, Vishnu Infra Pali, construction company in Pali Rajasthan, road construction company Rajasthan, highway construction Rajasthan, infrastructure company Rajasthan, government road contractor Rajasthan, highway contractor Pali",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-charcoal">
        <img
          src={images.heroHighway}
          alt="Highway construction site with paver and road roller laying a new expressway at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.13_0.008_60/0.94),oklch(0.13_0.008_60/0.62)_55%,oklch(0.13_0.008_60/0.35))]"
        />
        <div className="container-x py-24">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-gold">Building Roads. Connecting Progress.</p>
            <h1 className="mt-6 text-4xl uppercase text-charcoal-foreground sm:text-6xl lg:text-7xl">
              Vishnu Infra —{" "}
              <span className="text-gradient-gold">
                Building the Infrastructure of Tomorrow
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/80 lg:text-lg">
              Established in {company.established}, Vishnu Infra is an infrastructure and construction
              company based in Pali, Rajasthan, delivering road and highway construction
              solutions for government and infrastructure projects.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex h-14 items-center justify-center gap-2 bg-primary px-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold"
              >
                Explore Our Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center border border-charcoal-foreground/40 px-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-charcoal-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-10 border-l-2 border-primary pl-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-charcoal-foreground/70">
              {company.experienceYears} Years of Experience &nbsp;|&nbsp;{" "}
              {company.completedProjects} Completed Projects
            </p>
          </Reveal>
        </div>
        <ChevronDown
          aria-hidden
          className="absolute bottom-6 left-1/2 hidden h-6 w-6 -translate-x-1/2 animate-bounce text-charcoal-foreground/50 lg:block"
        />
      </section>

      <StatsStrip />

      {/* WORK PROCESS */}
      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Work Process"
            description="A straightforward execution approach applied across road and highway projects."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 110}>
                <div className="card-industrial group h-full p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-5xl font-bold text-primary/25 transition-colors group-hover:text-primary">
                      {step.step}
                    </span>
                    <h3 className="text-2xl uppercase">{step.title}</h3>
                  </div>
                  <span className="mt-6 block h-0.5 w-12 bg-primary" aria-hidden />
                  <p className="mt-5 text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary">
        <div className="container-x section-y grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={images.aboutRoad}
              alt="Concrete road construction in progress with paver machine and site crew"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-full max-h-[34rem] w-full object-cover"
            />
            <div className="absolute -bottom-6 left-6 hidden bg-primary px-7 py-5 text-primary-foreground lg:block">
              <p className="font-display text-4xl font-bold leading-none">{company.established}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]">
                Established
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Vishnu Infra"
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
              to="/about"
              className="mt-8 inline-flex h-13 items-center gap-2 bg-charcoal px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-charcoal-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Know More About Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="Construction services delivered for infrastructure, highway and government tender projects."
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <WhyChoose />

      {/* FEATURED PROJECTS */}
      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects That Define Our Experience"
            description="Completed and ongoing road, highway and expressway projects."
          />
          <div className="mt-12">
            <ProjectShowcase />
          </div>
          <Link
            to="/projects"
            className="mt-12 inline-flex h-13 items-center gap-2 border border-charcoal px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] transition-colors hover:bg-charcoal hover:text-charcoal-foreground"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* MACHINERY */}
      <section className="bg-secondary">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Plant & Machinery"
            title="Construction Equipment & Machinery"
            description="Construction machinery supporting execution across project sites."
          />
          <div className="mt-12">
            <MachineryGrid />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Gallery"
            title="Site & Machinery Gallery"
            description="A visual look at road construction, machinery and infrastructure work."
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <Leadership />
      <ClientsSection />

      {/* FAQ */}
      <section className="bg-secondary">
        <div className="container-x section-y grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers based on information provided by the company."
          />
          <FaqAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
