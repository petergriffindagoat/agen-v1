import { getWork, getAllWork } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CtaSection } from '@/components/blocks/cta-section'
import { Container } from '@/components/layout/container'
import { buildMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { WorkMetric } from '@/lib/mdx'

/* ─────────────────────────────────────────────
   STATIC PARAMS
   ───────────────────────────────────────────── */

export async function generateStaticParams() {
  const work = await getAllWork()
  return work.map((w) => ({ slug: w.slug }))
}

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const work = await getWork(slug)
    return buildMetadata({
      title: work.title,
      description: work.excerpt,
      path: `work/${work.slug}`,
    })
  } catch {
    return {}
  }
}

/* ─────────────────────────────────────────────
   METRICS BAND — individual stat
   ───────────────────────────────────────────── */

function MetricStat({ metric }: { metric: WorkMetric }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-3xl text-ember leading-none tracking-tight">
          {metric.value}
        </span>
        {metric.unit && (
          <span className="font-mono text-sm text-on-dark-muted ml-1">
            {metric.unit}
          </span>
        )}
      </div>
      <p className="font-mono text-xs text-on-dark-muted uppercase tracking-[0.1em] mt-2 leading-snug">
        {metric.label}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let work
  try {
    work = await getWork(slug)
  } catch {
    notFound()
  }

  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <section
        className="section-light pt-40 pb-12"
        aria-labelledby="work-detail-heading"
      >
        <Container size="content">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center font-body text-sm text-muted hover:text-graphite transition-colors focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2 rounded-sm"
          >
            &larr; Back to work
          </Link>

          {/* Overline */}
          <p className="overline text-ember mt-8 mb-4">
            {work.industry} &middot; {work.service}
          </p>

          {/* Headline */}
          <h1
            id="work-detail-heading"
            className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[40rem]"
          >
            {work.title}
          </h1>

          {/* Excerpt */}
          <p className="font-body text-md text-muted leading-normal max-w-[40rem] mt-6">
            {work.excerpt}
          </p>

          {/* Divider */}
          <hr className="mt-10 mb-0 border-t border-[oklch(85%_0.005_75)]" />
        </Container>
      </section>

      {/* ── 2. METRICS BAND ───────────────────────── */}
      {work.metrics.length > 0 && (
        <section
          className="section-dark"
          aria-label={`Key results for ${work.title}`}
        >
          <Container size="content">
            <p className="overline text-ember mb-8">Key Results</p>
            <div
              className={`grid gap-8 ${
                work.metrics.length === 4
                  ? 'grid-cols-2 lg:grid-cols-4'
                  : work.metrics.length === 3
                  ? 'grid-cols-1 sm:grid-cols-3'
                  : 'grid-cols-2'
              }`}
            >
              {work.metrics.map((metric) => (
                <MetricStat key={metric.label} metric={metric} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 3. ARTICLE BODY ───────────────────────── */}
      {work.content.trim().length > 0 && (
        <section className="section-light pt-16 pb-24">
          <Container size="prose">
            <article className="prose-article">
              <MDXRemote source={work.content} />
            </article>
          </Container>
        </section>
      )}

      {/* Empty body state — show when MDX has no prose content */}
      {work.content.trim().length === 0 && (
        <section className="section-light pt-16 pb-24">
          <Container size="prose">
            <p className="font-body text-base text-muted">
              Full case study details available on request.{' '}
              <Link href="/contact" className="text-ember underline underline-offset-2">
                Get in touch
              </Link>
              .
            </p>
          </Container>
        </section>
      )}

      {/* ── 4. CTA ─────────────────────────────────── */}
      <CtaSection
        overline="Ready to get results like this?"
        headline="Your first agent could be live in 3 weeks"
        body="We scope, build, and deploy production-grade agents in your existing stack. Book a 15-minute call to find out which workflow to automate first."
        ctaText="Book a 15-minute call"
        ctaHref="/contact"
        caption="No pitch deck. No NDAs. Just a technical conversation."
      />
    </>
  )
}
