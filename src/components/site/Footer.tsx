import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import {
  company,
  navLinks,
  telHref,
  telAltHref,
  mailHref,
  whatsappHref,
} from "@/data/site";
import logoImg from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Vishnu Infra Logo"
              className="h-12 w-auto max-w-[150px] object-contain rounded bg-white p-1"
            />
            <div>
              <p className="font-display text-2xl font-bold tracking-wide text-white">
                VISHNU <span className="text-primary">INFRA</span>
              </p>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-charcoal-foreground/60">
                {company.tagline}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-foreground/70">
            Established in {company.established}, Vishnu Infra undertakes road and
            highway construction and government tender projects from Pali, Rajasthan.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Infra on Instagram"
              className="grid h-10 w-10 place-items-center border border-charcoal-foreground/20 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Infra on LinkedIn"
              className="grid h-10 w-10 place-items-center border border-charcoal-foreground/20 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Infra on WhatsApp"
              className="grid h-10 w-10 place-items-center border border-charcoal-foreground/20 transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold uppercase tracking-[0.18em]">
            Quick Links
          </h2>
          <span className="mt-3 block h-0.5 w-10 bg-primary" aria-hidden />
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-charcoal-foreground/75 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold uppercase tracking-[0.18em]">
            Contact
          </h2>
          <span className="mt-3 block h-0.5 w-10 bg-primary" aria-hidden />
          <ul className="mt-5 space-y-4 text-sm text-charcoal-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span className="flex flex-col">
                <a href={telHref} className="hover:text-primary">
                  {company.phone}
                </a>
                <a href={telAltHref} className="hover:text-primary">
                  {company.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={mailHref} className="break-all hover:text-primary">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold uppercase tracking-[0.18em]">
            Start a Project
          </h2>
          <span className="mt-3 block h-0.5 w-10 bg-primary" aria-hidden />
          <p className="mt-5 text-sm text-charcoal-foreground/70">
            Discuss your construction and infrastructure requirements with our team.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex h-12 items-center bg-primary px-6 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold"
          >
            Send Enquiry
          </Link>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-charcoal-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vishnu Infra. All Rights Reserved.</p>
          <p>Road & Highway Construction | Pali, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
