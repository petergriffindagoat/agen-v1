import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/components/blocks/cta-section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'Workflow Automation — Perpetual Stack',
  description:
    'End-to-end process orchestration that replaces your team\'s copy-paste workflows with reliable automation.',
  path: '/services/workflow',
})

/* ─────────────────────────────────────────────
   PHASE STEP
   ───────────────────────────────────────────── */

interface PhaseStepProps {
  phase: string
  title: string
  body: string
  isLast?: boolean
}

function PhaseStep({ phase, title, body, isLast = false }: PhaseStepProps) {
  return (
    <div className="flex gap-6">
      {/* Left: ember dot + connector line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <span
          className="w-2.5 h-2.5 rounded-full bg-ember flex-shrink-0 mt-1"
          aria-hidden="true"
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: 'oklch(75% 0.12 38 / 0.3)' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-10">
        <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-1">{phase}</p>
        <p className="font-display text-lg text-graphite leading-snug mb-3">{title}</p>
        <p className="font-body text-sm text-muted leading-normal">{body}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function WorkflowPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-20" aria-labelledby="workflow-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">WORKFLOW AUTOMATION</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="workflow-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[20ch]"
            >
              Replace copy-paste with code that runs
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-md text-muted max-w-[40rem] mt-6 leading-normal font-body">
              Your team is the automation right now &mdash; they copy data between systems, check
              inboxes, move files, update spreadsheets. We replace that with code that runs 24/7
              without error.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/contact">
                Automate a workflow
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. THE PROBLEM ─────────────────────────── */}
      <Section variant="light" className="pb-20" aria-labelledby="problem-heading">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
            <div>
              <Reveal>
                <p className="overline text-ember mb-4">THE PROBLEM</p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="problem-heading"
                  className="font-display text-2xl font-normal leading-snug text-graphite mb-6"
                >
                  Manual workflows have a reliability ceiling
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-body text-base text-muted leading-normal mb-5">
                  People are good at handling exceptions. They&rsquo;re bad at running reliable
                  repetitive processes thousands of times without mistakes. That&rsquo;s not a
                  criticism &mdash; it&rsquo;s just the wrong tool for the job.
                </p>
                <p className="font-body text-base text-muted leading-normal">
                  The workflows we automate most often: invoice processing, data entry between
                  systems, report generation, scheduled data exports, email routing, form
                  submissions.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. THE SOLUTION ────────────────────────── */}
      <Section variant="accent" aria-labelledby="solution-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">HOW WE BUILD IT</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="solution-heading"
              className="font-display text-2xl font-normal leading-snug text-graphite mb-10"
            >
              Three phases: map, build, deploy
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="max-w-[42rem]">
              <PhaseStep
                phase="Phase 1"
                title="Map the workflow"
                body="We spend the first week documenting every step of the manual process: who does what, which systems are involved, where errors typically occur, and what the edge cases are."
              />
              <PhaseStep
                phase="Phase 2"
                title="Build the automation"
                body="We write the automation against your real data in a sandboxed copy of your environment. You can see it running and break it before it goes to production."
              />
              <PhaseStep
                phase="Phase 3"
                title="Deploy with observability"
                body="We deploy to your infrastructure with logging, alerting, and a dashboard showing what ran, when, and what it did. No black boxes."
                isLast
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 4. CTA ─────────────────────────────────── */}
      <CtaSection
        ctaText="Map your first workflow"
        headline="Your first automation could run this month"
      />
    </>
  )
}
