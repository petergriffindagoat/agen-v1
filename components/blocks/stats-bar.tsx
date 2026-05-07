import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   STANDARD STAT
   ───────────────────────────────────────────── */

interface StatStandardProps {
  number: string
  unit: string
  label: string
  description: string
}

function StatStandard({ number, unit, label, description }: StatStandardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-3xl text-ember leading-none tracking-tight">
          {number}
        </span>
        <span className="font-mono text-sm text-on-dark-muted ml-1">
          {unit}
        </span>
      </div>
      {label && (
        <span className="font-mono text-sm text-on-dark-muted block mt-1">
          {label}
        </span>
      )}
      <p className="font-body text-sm text-on-dark-muted mt-2 leading-normal">
        {description}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   BEFORE / AFTER STAT (Stat 3)
   ───────────────────────────────────────────── */

interface StatBeforeAfterProps {
  before: string
  after: string
  label: string
  description: string
}

function StatBeforeAfter({ before, after, label, description }: StatBeforeAfterProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-xl text-on-dark-muted leading-none">
          {before}
        </span>
        <span className="text-ember text-lg leading-none" aria-hidden="true">
          &rarr;
        </span>
        <span className="font-display text-3xl text-ember leading-none tracking-tight">
          {after}
        </span>
      </div>
      <span className="font-mono text-sm text-on-dark-muted block mt-1">
        {label}
      </span>
      <p className="font-body text-sm text-on-dark-muted mt-2 leading-normal">
        {description}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   STATS BAR
   ───────────────────────────────────────────── */

export function StatsBar() {
  return (
    <section
      className="
        bg-soot
        border-t border-b border-[oklch(25%_0.005_75)]
        py-32
      "
      aria-labelledby="stats-heading"
    >
      <Container size="wide">
        {/* Header */}
        <Reveal>
          <p className="overline text-ember">Results</p>
          <h2
            id="stats-heading"
            className="font-display text-2xl font-normal leading-tight text-on-dark mt-4"
          >
            Numbers from production
          </h2>
        </Reveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Reveal delay={0}>
            <StatStandard
              number="50+"
              unit="agents"
              label="deployed"
              description="Across client organizations in 2025"
            />
          </Reveal>

          <Reveal delay={80}>
            <StatStandard
              number="12"
              unit="industries"
              label="served"
              description="From fintech to healthcare to logistics"
            />
          </Reveal>

          <Reveal delay={160}>
            <StatBeforeAfter
              before="4 hrs"
              after="12 min"
              label="avg ticket response"
              description="Median improvement across support automations"
            />
          </Reveal>

          <Reveal delay={240}>
            <StatStandard
              number="98.7%"
              unit="uptime"
              label=""
              description="Across all deployed agents, trailing 90 days"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
