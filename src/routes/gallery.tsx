import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CTASection } from "@/components/site/CTASection";

const title = "Gallery | Road Construction & Machinery Photos — Vishnu Infra";
const description =
  "Photo gallery of road construction, project sites, machinery and infrastructure work from Vishnu Infra, Pali, Rajasthan.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gallery"
        description="Project sites, machinery, road construction and infrastructure work."
        image={images.projectEarthwork}
        imageAlt="Excavator carrying out earthwork for a road embankment"
      />

      <section className="bg-background">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Photographs"
            title="Site & Machinery Gallery"
            description="Browse by category and click any image to view it larger."
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
