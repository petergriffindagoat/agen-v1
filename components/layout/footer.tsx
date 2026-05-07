import Link from 'next/link'
import { Container } from '@/components/layout/container'

/* ─────────────────────────────────────────────
   LOGO MARK (chalk color for dark bg)
   ───────────────────────────────────────────── */

function LogoMark() {
  return (
    <svg
      viewBox="0 0 28 20"
      fill="currentColor"
      aria-hidden="true"
      width="24"
      height="17"
      className="text-on-dark shrink-0"
    >
      <rect x="0" y="0" width="20" height="3.5" />
      <rect x="0" y="8.25" width="20" height="3.5" />
      <rect x="0" y="16.5" width="20" height="3.5" />
      <path d="M20 0h5a3 3 0 013 3v14a3 3 0 01-3 3h-5v-3.5h5V3.5h-5V0z" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   EXTERNAL LINK ICON
   ───────────────────────────────────────────── */

function ExternalArrow() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="inline-block ml-1 opacity-60"
    >
      <path
        d="M2 8L8 2M8 2H4M8 2v4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   NEWSLETTER FORM
   (Static form — no client JS needed for base UX)
   ───────────────────────────────────────────── */

function NewsletterForm() {
  return (
    <form
      action="/api/newsletter"
      method="POST"
      aria-label="Newsletter signup"
      className="mt-4"
    >
      <div className="flex gap-2">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="flex-1 min-w-0 bg-soot/50 border border-[oklch(25%_0.005_75)] rounded-md px-3 py-2 text-sm text-on-dark placeholder:text-on-dark-muted focus:border-ember focus:outline-none transition-colors duration-100"
        />
        <button
          type="submit"
          className="shrink-0 bg-volt text-graphite text-sm font-semibold px-3 py-2 rounded-md hover:bg-volt-hover transition-colors duration-100"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

/* ─────────────────────────────────────────────
   SECTION HEADING (overline style for dark bg)
   ───────────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.12em] text-on-dark-muted mb-4">
      {children}
    </p>
  )
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

const companyLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const connectLinks = [
  { label: 'GitHub', href: 'https://github.com/perpetualstack' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/perpetualstack' },
  { label: 'Twitter/X', href: 'https://twitter.com/perpetualstack' },
]

export function Footer() {
  return (
    <footer className="bg-soot" aria-label="Site footer">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 pb-12">

          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-4"
              aria-label="Perpetual Stack home"
            >
              <LogoMark />
              <span className="font-display text-on-dark text-base font-normal tracking-wide">
                Perpetual Stack
              </span>
            </Link>
            <p className="text-sm text-on-dark-muted mt-2 leading-relaxed">
              AI automation that ships to production.
            </p>
          </div>

          {/* Column 2 — Company */}
          <div>
            <FooterHeading>COMPANY</FooterHeading>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-dark-muted hover:text-on-dark transition-colors duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <FooterHeading>CONNECT</FooterHeading>
            <ul className="space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-dark-muted hover:text-on-dark transition-colors duration-100"
                  >
                    {link.label}
                    <ExternalArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <FooterHeading>DISPATCH</FooterHeading>
            <p className="text-sm text-on-dark-muted leading-relaxed">
              Occasional notes on AI automation. No pitch, no spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(25%_0.005_75)] mt-0 pt-8 pb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-on-dark-muted">
            &copy; 2026 Perpetual Stack
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-on-dark-muted hover:text-on-dark transition-colors duration-100"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-on-dark-muted hover:text-on-dark transition-colors duration-100"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
