import { getAllWork } from '@/lib/mdx'
import { buildMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { CtaSection } from '@/components/blocks/cta-section'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { Work } from '@/lib/mdx'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'Work — Perpetual Stack',
  description:
    'Case studies: AI agents and automation deployed in production across fintech, healthcare, and logistics.',
  path: '/work',
})

/* ─────────────────────────────────────────────
   PLACEHOLDER DATA
   Shown when no MDX content files exist yet.
   ───────────────────────────────────────────── */

const PLACEHOLDER_WORK: Work[] = [
  {
    slug: 'fintech-support-agent',
    title: 'FinTech Support Agent',
    excerpt:
      'An autonomous agent that triages and resolves 73% of inbound support tickets without human review, cutting response time from 4 hours to under 12 minutes.',
    date: '2025-03-01',
    industry: 'FinTech',
    service: 'AI Support Agent',
    featured: true,
    metrics: [
      { label: 'Tickets resolved autonomously', value: '73', unit: '%' },
      { label: 'Avg. response time', value: '12', unit: 'min' },
      { label: 'Cost per ticket', value: '−61', unit: '%' },
    ],
    content: '',
  },
  {
    slug: 'healthcare-document-extraction',
    title: 'Healthcare Document Extraction',
    excerpt:
      'A document processing pipeline that extracts structured data from unstructured clinical notes at 99.2% accuracy, replacing a 5-person data entry team.',
    date: '2025-02-01',
    industry: 'HealthTech',
    service: 'Document Processing',
    featured: false,
    metrics: [
      { label: 'Accuracy', value: '99.2', unit: '%' },
    ],
    content: '',
  },
  {
    slug: 'logistics-lead-qualification',
    title: 'Logistics Lead Qualification',
    excerpt:
      'A lead qualification agent that scores, enriches, and routes inbound leads to the correct sales rep, increasing qualified pipeline by 38% in 60 days.',
    date: '2025-01-01',
    industry: 'Logistics',
    service: 'Lead Qualification',
    featured: false,
    metrics: [
      { label: 'Pipeline increase', value: '+38', unit: '%' },
    ],
    content: '',
  },
]

/* ─────────────────────────────────────────────
   FEATURED WORK CARD
   ───────────────────────────────────────────── */

function FeaturedWorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group relative block bg-chalk border-2 border-ember rounded-lg p-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-0.5 bg-ember"
      />

      {/* Industry · Service overline */}
      <p className="overline text-ember mb-4">
        {work.industry} &middot; {work.service}
      </p>

      {/* Headline */}
      <h2 className="font-display text-2xl font-normal leading-snug text-graphite max-w-[40rem]">
        {work.title}
      </h2>

      {/* Excerpt */}
      <p className="font-body text-base text-muted leading-normal mt-4 max-w-[40rem]">
        {work.excerpt}
      </p>

      {/* Key metrics */}
      {work.metrics.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-8">
          {work.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl text-ember leading-none">
                {m.value}
                {m.unit && (
                  <span className="font-mono text-sm text-muted ml-1">
                    {m.unit}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-subtle uppercase tracking-[0.1em] mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <span className="inline-block mt-8 text-sm font-medium text-ember underline underline-offset-[3px] decoration-[1px] group-hover:text-ember-dim transition-colors">
        Read case study &rarr;
      </span>
    </Link>
  )
}

/* ─────────────────────────────────────────────
   REGULAR WORK CARD
   ───────────────────────────────────────────── */

function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group relative block bg-chalk border border-[oklch(78%_0.008_75)] rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
    >
      {/* Industry tag */}
      <p className="overline text-ember mb-4">{work.industry}</p>

      {/* Key metric */}
      {work.metrics[0] && (
        <div className="mb-4">
          <span className="font-display text-3xl text-ember leading-none">
            {work.metrics[0].value}
          </span>
          {work.metrics[0].unit && (
            <span className="font-mono text-sm text-muted ml-1">
              {work.metrics[0].unit}
            </span>
          )}
          <p className="font-mono text-xs text-subtle uppercase tracking-[0.1em] mt-1">
            {work.metrics[0].label}
          </p>
        </div>
      )}

      {/* Title */}
      <h2 className="font-display text-xl font-normal leading-snug text-graphite mb-3">
        {work.title}
      </h2>

      {/* Excerpt */}
      <p className="font-body text-base text-muted leading-normal line-clamp-2 mb-6">
        {work.excerpt}
      </p>

      {/* Read link */}
      <span className="text-sm font-medium text-ember underline underline-offset-[3px] decoration-[1px] group-hover:text-ember-dim transition-colors">
        View case study &rarr;
      </span>
    </Link>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function WorkPage() {
  const workFromFiles = await getAllWork()

  /* Fall back to placeholder data when no MDX files exist yet */
  const allWork = workFromFiles.length > 0 ? workFromFiles : PLACEHOLDER_WORK

  const featuredWork = allWork.find((w) => w.featured)
  const regularWork = allWork.filter((w) => !w.featured)

  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-16" aria-labelledby="work-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">CLIENT WORK</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="work-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[16ch]"
            >
              What shipped last quarter
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-md text-muted max-w-[40rem] mt-6 leading-normal font-body">
              Real results from real deployments. Every case study here is a system running
              in production today.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. CASE STUDIES GRID ──────────────────── */}
      <Section variant="light" className="pt-0 pb-32">
        <Container size="wide">

          {/* Featured case study — full width */}
          {featuredWork && (
            <Reveal>
              <div className="mb-8">
                <FeaturedWorkCard work={featuredWork} />
              </div>
            </Reveal>
          )}

          {/* Regular case studies — 2-column grid */}
          {regularWork.length > 0 && (
            <RevealStagger>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularWork.map((work) => (
                  <RevealItem key={work.slug}>
                    <WorkCard work={work} />
                  </RevealItem>
                ))}
              </div>
            </RevealStagger>
          )}

        </Container>
      </Section>

      {/* ── 3. CTA ─────────────────────────────────── */}
      <CtaSection
        overline="Want results like these?"
        headline="Your first agent could be live in 3 weeks"
        body="We scope, build, and deploy production-grade agents in your existing stack. Book a 15-minute technical call to find out which workflow to automate first."
        ctaText="Book a 15-minute call"
        ctaHref="/contact"
        caption="No pitch deck. No NDAs. Just a technical conversation."
      />
    </>
  )
}
