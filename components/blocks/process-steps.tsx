import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

interface Step {
  week: string
  title: string
  body: string
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const STEPS: Step[] = [
  {
    week: 'Week 1',
    title: 'Audit & scope',
    body: 'We map your tools, your data flows, and the 3 highest-ROI automations. You get a written spec before we write a line of code.',
  },
  {
    week: 'Week 2',
    title: 'Build & test',
    body: 'We build the agent against real data in a sandboxed copy of your environment. You review, test, and break it before we deploy.',
  },
  {
    week: 'Week 3',
    title: 'Deploy & monitor',
    body: 'We deploy to your production environment with monitoring and alerts from day 1.',
  },
]

/* ─────────────────────────────────────────────
   STEP COMPONENT
   ───────────────────────────────────────────── */

function StepItem({ step }: { step: Step }) {
  return (
    <div className="flex flex-col">
      {/* Week label */}
      <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-3">
        {step.week}
      </p>

      {/* Timeline dot — visible on all sizes */}
      <div
        aria-hidden="true"
        className="w-3 h-3 rounded-full bg-ember mb-2 mt-0.5 flex-shrink-0"
      />

      {/* Title */}
      <h3 className="font-body text-lg font-medium text-graphite leading-snug mt-2 mb-3">
        {step.title}
      </h3>

      {/* Body */}
      <p className="text-base text-muted leading-normal">
        {step.body}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PROCESS STEPS
   ───────────────────────────────────────────── */

export function ProcessSteps() {
  return (
    <Section
      variant="accent"
      id="how-it-works"
      aria-labelledby="process-heading"
    >
      <Container size="wide">
        {/* Section header */}
        <Reveal>
          <p className="overline text-ember">Our process</p>
          <h2
            id="process-heading"
            className="font-display text-2xl font-normal leading-tight text-graphite mt-4"
          >
            From call to production in 3 weeks
          </h2>
        </Reveal>

        {/* Steps grid with timeline connector */}
        <div className="relative mt-16">
          {/*
            Desktop timeline connector:
            Horizontally spans beneath the step dots.
            Positioned absolutely so it sits behind the dots.
            We use top-[calc(3.75rem+0.375rem)] which aligns roughly
            with the dot row (week label height ~3.75rem, dot h-3 = 0.75rem).
          */}
          <div
            aria-hidden="true"
            className="
              hidden md:block
              absolute left-0 right-0
              top-[3.875rem]
              border-t-2 border-dashed border-[oklch(78%_0.008_75)]
              pointer-events-none z-0
            "
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0}>
              <StepItem step={STEPS[0]} />
            </Reveal>
            <Reveal delay={120}>
              <StepItem step={STEPS[1]} />
            </Reveal>
            <Reveal delay={240}>
              <StepItem step={STEPS[2]} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
