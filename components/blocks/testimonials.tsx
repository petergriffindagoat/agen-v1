import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   FEATURED CASE STUDY CARD
   ───────────────────────────────────────────── */

function FeaturedCard() {
  return (
    <Reveal delay={0} className="flex">
      <article
        className="
          relative border-2 border-ember rounded-lg p-10 shadow-md
          flex flex-col
          overflow-hidden
          w-full
        "
      >
        {/* Ember top bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-0.5 bg-ember"
        />

        {/* Tag */}
        <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-4">
          Fintech &middot; Support Automation
        </p>

        {/* Quote */}
        <blockquote className="font-display text-xl italic leading-snug text-graphite mb-4 flex-1">
          &ldquo;We replaced 3 full-time support agents with one AI agent that
          resolves 73% of tickets autonomously.&rdquo;
        </blockquote>

        {/* Attribution */}
        <p className="font-body text-sm text-muted">
          &mdash; VP of Operations, Series B fintech startup
        </p>

        {/* Link */}
        <div className="mt-6">
          <Button variant="link" href="/work/fintech-support-automation">
            Read the full study &rarr;
          </Button>
        </div>
      </article>
    </Reveal>
  )
}

/* ─────────────────────────────────────────────
   SMALL CASE STUDY CARD
   ───────────────────────────────────────────── */

interface SmallCardProps {
  tag: string
  stat: string
  summary: string
  href: string
  delay: number
}

function SmallCard({ tag, stat, summary, href, delay }: SmallCardProps) {
  return (
    <Reveal delay={delay} className="flex">
      <article
        className="
          border border-[oklch(78%_0.008_75)] rounded-lg p-6 shadow-sm
          flex flex-col
          hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
          w-full
        "
      >
        <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-3">
          {tag}
        </p>
        <p className="font-display text-2xl text-ember leading-tight mb-1">
          {stat}
        </p>
        <p className="text-sm text-muted leading-normal flex-1 mb-4">
          {summary}
        </p>
        <Button variant="link" href={href}>
          Read study &rarr;
        </Button>
      </article>
    </Reveal>
  )
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────── */

export function Testimonials() {
  return (
    <Section variant="light" aria-labelledby="testimonials-heading">
      <Container size="wide">
        {/* Section header */}
        <Reveal>
          <p className="overline text-ember">Client work</p>
          <h2
            id="testimonials-heading"
            className="font-display text-2xl font-normal leading-tight text-graphite mt-4 mb-16"
          >
            What shipped last quarter
          </h2>
        </Reveal>

        {/* Bento grid: 60/40 split on desktop */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Featured card — 60% */}
          <div className="md:w-[60%] flex">
            <FeaturedCard />
          </div>

          {/* Right column — 40% with 2 stacked cards */}
          <div className="md:w-[40%] flex flex-col gap-6">
            <SmallCard
              tag="Healthtech"
              stat="22 min → 90 sec"
              summary="Intake form processing time"
              href="/work/healthtech-intake"
              delay={80}
            />
            <SmallCard
              tag="Logistics"
              stat="99.2%"
              summary="Invoice matching accuracy"
              href="/work/logistics-invoice"
              delay={160}
            />
          </div>

        </div>
      </Container>
    </Section>
  )
}
