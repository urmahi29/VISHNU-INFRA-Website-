import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import {
  company,
  images,
  telHref,
  telAltHref,
  telThirdHref,
  mailHref,
  whatsappHref,
} from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const title = "Contact Vishnu Infra | Highway Contractor in Pali, Rajasthan";
const description =
  "Contact Vishnu Infra in Pali, Rajasthan for road, highway and infrastructure construction requirements. Call +91 9829933255 or send an enquiry.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Discuss your construction and infrastructure requirements with the Vishnu Infra team."
        image={images.projectBridge}
        imageAlt="Bridge construction site with concrete piers and crane"
      />

      <section className="bg-background">
        <div className="container-x section-y grid gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHeading eyebrow="Contact Details" title="Reach Vishnu Infra" />
            <ul className="mt-9 space-y-6">
              <li className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg uppercase">Office Address</h3>
                  <p className="mt-1 text-muted-foreground">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg uppercase">Phone</h3>
                  <p className="mt-1 flex flex-col text-muted-foreground">
                    <a href={telHref} className="hover:text-primary">
                      {company.phone}
                    </a>
                    <a href={telAltHref} className="hover:text-primary">
                      {company.phoneAlt}
                    </a>
                    <a href={telThirdHref} className="hover:text-primary">
                      {company.phoneThird}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg uppercase">Email</h3>
                  <a
                    href={mailHref}
                    className="mt-1 block break-all text-muted-foreground hover:text-primary"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-whatsapp">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg uppercase">WhatsApp</h3>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-muted-foreground hover:text-primary"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex gap-3">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vishnu Infra on Instagram"
                className="grid h-12 w-12 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vishnu Infra on LinkedIn"
                className="grid h-12 w-12 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Enquiry" title="Send Us Your Requirement" />
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-x section-y">
          <SectionHeading
            eyebrow="Location"
            title="Pali, Rajasthan"
            description="Map placeholder — an embedded map of the office location can be added here."
          />
          <Reveal className="mt-10">
            <div className="flex min-h-64 flex-col items-center justify-center border border-dashed border-input bg-background px-6 py-16 text-center">
              <MapPin className="h-10 w-10 text-primary" aria-hidden />
              <p className="mt-4 font-display text-xl uppercase">{company.address}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Map embed placeholder — ready to be connected.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
