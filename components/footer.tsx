import { Logo, Sphere } from "./brand";
import { Parallax } from "./ui";
import {
  MailIcon,
  WhatsappIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./icons";
import { nav, footer, site } from "@/lib/content";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bg">
      {/* sphere filling the empty space */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-1/2 h-[34vw] w-[34vw] max-h-[440px] max-w-[440px] -translate-y-1/2 opacity-30"
      >
        <Parallax speed={0.04} className="h-full w-full">
          <Sphere className="h-full w-full" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-wide px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-11 w-auto lg:h-14" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-fg/50">
              {footer.description}
            </p>
          </div>

          <nav className="lg:col-span-3">
            <p className="kicker text-fg/35">{footer.navTitle}</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-line text-[15px] text-fg/70 hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="kicker text-fg/35">{footer.contactTitle}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-[15px] text-fg/70 hover:text-fg">
                  <MailIcon className="h-4 w-4 text-accent" />
                  <span className="link-line">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.whatsappCta} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[15px] text-fg/70 hover:text-fg">
                  <WhatsappIcon className="h-4 w-4 text-accent" />
                  <span className="link-line">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[15px] text-fg/70 hover:text-fg">
                  <InstagramIcon className="h-4 w-4 text-accent" />
                  <span className="link-line">Instagram</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[15px] text-fg/70 hover:text-fg">
                  <LinkedinIcon className="h-4 w-4 text-accent" />
                  <span className="link-line">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[13px] text-fg/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SPHERA. {footer.copyright}</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
