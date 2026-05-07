import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

interface CtaSectionProps {
  overline?: string
  headline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
  caption?: string
}

/* ─────────────────────────────────────────────
   CTA SECTION
   ───────────────────────────────────────────── */

export function CtaSection({
  overline = 'Ready to ship',
  headline = 'Your first agent could be live in 3 weeks',
  body = "We'll audit your stack, find the highest-ROI automation, and give you a deployment plan — on a 15-minute call.",
  ctaText = 'Book a 15-minute call',
  ctaHref = '/contact',
  caption = 'No pitch deck. No NDAs. Just a technical conversation.',
}: CtaSectionProps) {
  return (
    <Section variant="accent" aria-labelledby="cta-heading">
      <Container size="wide">
        <Reveal>
          <div className="max-w-[40rem] mx-auto text-center">
            {/* Overline */}
            <p className="overline text-ember mb-4">
              {overline}
            </p>

            {/* Headline */}
            <h2
              id="cta-heading"
              className="font-display text-2xl font-normal leading-tight text-graphite mb-6"
            >
              {headline}
            </h2>

            {/* Body */}
            <p className="font-body text-md text-muted leading-normal mb-8">
              {body}
            </p>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              href={ctaHref}
              className="px-8 py-4"
            >
              {ctaText}
            </Button>

            {/* Caption */}
            {caption && (
              <p className="font-body text-sm text-subtle mt-4">
                {caption}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
