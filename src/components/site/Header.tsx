import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { navLinks, company, telHref, whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

import logoImg from "@/assets/logo.jpg";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Vishnu Infra home">
      <img
        src={logoImg}
        alt="Vishnu Infra Logo"
        className="h-11 w-auto max-w-[140px] object-contain rounded"
      />
      <span className="leading-none">
        <span className="block font-display text-2xl font-bold tracking-wide text-foreground">
          VISHNU <span className="text-primary">INFRA</span>
        </span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {company.tagline}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-charcoal text-charcoal-foreground lg:block">
        <div className="container-x flex h-10 items-center justify-between text-sm">
          <p className="text-charcoal-foreground/70">
            {company.address} &nbsp;|&nbsp; Established {company.established}
          </p>
          <div className="flex items-center gap-6">
            <a href={telHref} className="hover-underline flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hover-underline text-charcoal-foreground/80"
            >
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_10px_30px_-24px_oklch(0.2_0.01_60/0.6)]",
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="hover-underline font-display text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center border border-border text-whatsapp transition-colors hover:border-whatsapp hover:bg-whatsapp/10"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center bg-primary px-6 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-gold hover:shadow-[var(--shadow-lift)]"
            >
              Get In Touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center border border-border text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-border bg-background xl:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 font-display text-lg font-semibold uppercase tracking-[0.12em]"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 py-4">
              <a
                href={telHref}
                className="inline-flex h-12 items-center justify-center gap-2 bg-charcoal font-display text-sm font-bold uppercase tracking-[0.14em] text-charcoal-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 bg-primary font-display text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
