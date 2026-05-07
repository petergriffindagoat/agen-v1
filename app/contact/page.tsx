import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'
import { ContactForm } from '@/components/blocks/contact-form'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Perpetual Stack',
  description:
    '15 minutes. No pitch deck. We\'ll look at your tools, find the bottleneck, and tell you if we can help.',
  path: '/contact',
})

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <Section variant="light" className="pt-40 pb-32" aria-labelledby="contact-heading">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ── Left column — copy ─────────────────── */}
          <div className="lg:w-[45%]">
            <Reveal>
              <p className="overline text-ember mb-4">Book a Call</p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="contact-heading"
                className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite"
              >
                Let&rsquo;s talk about your stack
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="font-body text-md text-muted mt-4 leading-normal max-w-[28rem]">
                15 minutes. No pitch deck. We&rsquo;ll look at your tools, find the bottleneck,
                and tell you if we can help.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <hr className="mt-8 mb-6 border-t border-[oklch(85%_0.005_75)]" />

              <p className="font-body text-sm text-subtle mb-1">
                Or email us directly:
              </p>
              <a
                href="mailto:hello@perpetualstack.com"
                className="font-body text-base text-ember hover:text-ember-dim underline underline-offset-2 transition-colors"
              >
                hello@perpetualstack.com
              </a>
            </Reveal>
          </div>

          {/* ── Right column — form ────────────────── */}
          <div className="lg:w-[55%]">
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  )
}
