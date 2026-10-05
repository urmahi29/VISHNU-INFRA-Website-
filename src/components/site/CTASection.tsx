import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Send } from "lucide-react";
import { company, telHref, whatsappHref, images } from "@/data/site";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={images.projectNight}
        alt=""
        aria-hidden
        loading="lazy"
        width={1408}
        height={912}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="container-x section-y text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl uppercase text-charcoal-foreground sm:text-4xl lg:text-5xl">
            Have an Infrastructure Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-foreground/75 lg:text-lg">
            Let's discuss your construction and infrastructure requirements.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={telHref}
              className="inline-flex h-14 items-center justify-center gap-2 bg-primary px-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 border border-whatsapp px-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-whatsapp transition-colors hover:bg-whatsapp/15"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 border border-charcoal-foreground/30 px-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-charcoal-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Send className="h-4 w-4" aria-hidden /> Send Enquiry
            </Link>
          </div>
          <p className="mt-7 text-sm text-charcoal-foreground/60">
            {company.phone} &nbsp;|&nbsp; {company.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
