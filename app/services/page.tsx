import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { TechDiagram } from '@/components/blocks/tech-diagram'
import { CtaSection } from '@/components/blocks/cta-section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'Services — Perpetual Stack',
  description:
    'AI agents, workflow automation, and platform integrations deployed in your existing stack.',
  path: '/services',
})

/* ─────────────────────────────────────────────
   CAPABILITY ITEM
   ───────────────────────────────────────────── */

function CapabilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0"
        aria-hidden="true"
      />
      <span className="font-body text-base text-muted leading-normal">{text}</span>
    </li>
  )
}

/* ─────────────────────────────────────────────
   PROCESS FLOW VISUAL
   Simple dark card with boxes + arrows for
   the Workflow Automation section.
   ───────────────────────────────────────────── */

function ProcessFlowVisual() {
  const steps = [
    { label: 'TRIGGER', value: 'Form Submitted' },
    { label: 'STEP 1', value: 'Validate & Enrich' },
    { label: 'STEP 2', value: 'Conditional Route' },
    { label: 'STEP 3', value: 'Notify & Update CRM' },
    { label: 'RESULT', value: 'Audit Log Written' },
  ]

  return (
    <div
      className="bg-soot rounded-xl p-8 md:p-10"
      role="img"
      aria-label="Workflow automation process diagram"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted mb-6">
        Workflow Execution
      </p>

      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={step.label}>
            <div
              className="rounded-md px-4 py-2.5"
              style={{
                background: '#1e1e1e',
                border:
                  i === 0 || i === steps.length - 1
                    ? '1px solid #E0592A'
                    : '1px solid oklch(28% 0.005 75)',
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-0.5">
                {step.label}
              </p>
              <p className="font-mono text-xs text-on-dark font-medium mt-0.5">
                {step.value}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div
                className="text-ember text-sm pl-4 leading-none py-0.5"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-[oklch(22%_0.005_75)] mt-6 pt-4 flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-ember"
            aria-hidden="true"
            style={{ animation: 'pulse-ember 2s ease-in-out infinite' }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
            Running
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Runs: 24/7
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Errors: 0
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   INTEGRATIONS HUB VISUAL
   Hub-and-spoke diagram for Platform Integrations
   section.
   ───────────────────────────────────────────── */

function IntegrationsHubVisual() {
  const spokes = [
    { label: 'Salesforce', position: 'top' },
    { label: 'Zendesk', position: 'right' },
    { label: 'HubSpot', position: 'bottom' },
    { label: 'Slack', position: 'left' },
    { label: 'Postgres', position: 'top-right' },
    { label: 'Webhooks', position: 'bottom-left' },
  ]

  return (
    <div
      className="bg-soot rounded-xl p-8 md:p-10"
      role="img"
      aria-label="Platform integrations hub diagram"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted mb-6">
        Integration Layer
      </p>

      {/* Hub layout */}
      <div className="relative flex items-center justify-center" style={{ minHeight: '180px' }}>
        {/* Central hub */}
        <div
          className="relative z-10 rounded-lg px-4 py-3 text-center flex-shrink-0"
          style={{
            background: '#1e1e1e',
            border: '1px solid #E0592A',
            boxShadow: '0 0 0 1px #E0592A',
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember leading-none mb-0.5">
            Agent
          </p>
          <p className="font-mono text-xs text-on-dark font-medium mt-0.5">
            AI Engine
          </p>
        </div>

        {/* Spokes rendered as absolute positioned labels arranged around center */}
        <div className="absolute inset-0 pointer-events-none">
          {spokes.map((spoke, i) => {
            /* Distribute evenly around the circle */
            const angle = (i / spokes.length) * 360 - 90
            const rad = (angle * Math.PI) / 180
            const r = 42 /* % from center */
            const x = 50 + r * Math.cos(rad)
            const y = 50 + r * Math.sin(rad)

            return (
              <div
                key={spoke.label}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="rounded-md px-3 py-1.5"
                  style={{
                    background: '#1e1e1e',
                    border: '1px solid oklch(28% 0.005 75)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-dark-muted">
                    {spoke.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="border-t border-[oklch(22%_0.005_75)] mt-6 pt-4 flex flex-wrap gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Bidirectional sync
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Real-time events
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          OAuth secured
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-20" aria-labelledby="services-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">WHAT WE BUILD</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="services-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[20ch]"
            >
              Three ways we deploy AI into your stack
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-md text-muted max-w-[40rem] mt-6 leading-normal font-body">
              We don&rsquo;t build generic chatbots. We build specific agents for specific
              workflows &mdash; scoped to your tools, your data, and your edge cases.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. SERVICE SECTIONS ────────────────────── */}
      <Section variant="light" className="pt-0 pb-0">
        <Container size="wide">

          {/* ── SERVICE 1: AI AGENTS ─────────────────── */}
          <div className="border-t border-[oklch(85%_0.005_75)] py-24">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-start">
                {/* Text column */}
                <div>
                  <p className="overline text-ember mb-4">01 — AI AGENTS</p>
                  <h2 className="font-display text-2xl font-normal leading-snug text-graphite">
                    Agents that do the work, not just the chat
                  </h2>
                  <p className="font-body text-base text-muted leading-normal mt-4 max-w-[40rem]">
                    Custom autonomous agents that read inputs &mdash; emails, tickets, forms,
                    messages &mdash; understand context, make decisions, and take actions in your
                    existing tools. No human in the loop unless you need one.
                  </p>

                  <ul className="mt-6 space-y-3" aria-label="AI agent capabilities">
                    <CapabilityItem text="Ticket triage and auto-resolution" />
                    <CapabilityItem text="Lead qualification and CRM updates" />
                    <CapabilityItem text="Document processing and data extraction" />
                    <CapabilityItem text="Scheduled monitoring and alerting" />
                  </ul>

                  <div className="mt-8">
                    <Button variant="secondary" size="md" href="/contact">
                      Build an agent
                    </Button>
                  </div>
                </div>

                {/* Visual column */}
                <div className="lg:pt-2">
                  <TechDiagram variant="hero" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── SERVICE 2: WORKFLOW AUTOMATION ────────── */}
          <div className="border-t border-[oklch(85%_0.005_75)] py-24">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-20 items-start">
                {/* Visual column — first on desktop (reverse order) */}
                <div className="lg:order-first order-last lg:pt-2">
                  <ProcessFlowVisual />
                </div>

                {/* Text column */}
                <div className="lg:order-last order-first">
                  <p className="overline text-ember mb-4">02 — WORKFLOW AUTOMATION</p>
                  <h2 className="font-display text-2xl font-normal leading-snug text-graphite">
                    Replace copy-paste with code that runs
                  </h2>
                  <p className="font-body text-base text-muted leading-normal mt-4 max-w-[40rem]">
                    We map your manual workflows, identify the steps that can be automated, and
                    build the automation that runs them reliably. The result is a workflow that
                    runs 24/7 without your team touching it.
                  </p>

                  <ul className="mt-6 space-y-3" aria-label="Workflow automation capabilities">
                    <CapabilityItem text="Multi-step process orchestration" />
                    <CapabilityItem text="Conditional branching and error handling" />
                    <CapabilityItem text="Human-in-the-loop checkpoints" />
                    <CapabilityItem text="Audit trails and observability" />
                  </ul>

                  <div className="mt-8">
                    <Button variant="secondary" size="md" href="/contact">
                      Automate a workflow
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── SERVICE 3: PLATFORM INTEGRATIONS ─────── */}
          <div className="border-t border-[oklch(85%_0.005_75)] py-24">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-start">
                {/* Text column */}
                <div>
                  <p className="overline text-ember mb-4">03 — PLATFORM INTEGRATIONS</p>
                  <h2 className="font-display text-2xl font-normal leading-snug text-graphite">
                    Connect the tools you already use
                  </h2>
                  <p className="font-body text-base text-muted leading-normal mt-4 max-w-[40rem]">
                    We build the connectors between your CRM, helpdesk, databases, and AI
                    models. Your team keeps using the tools they know. The AI just gets access
                    to all of them.
                  </p>

                  <ul className="mt-6 space-y-3" aria-label="Platform integration capabilities">
                    <CapabilityItem text="Bidirectional sync with Salesforce, HubSpot, Zendesk" />
                    <CapabilityItem text="Custom webhook and event pipelines" />
                    <CapabilityItem text="OAuth integrations for any SaaS tool" />
                    <CapabilityItem text="Real-time and batch processing modes" />
                  </ul>

                  <div className="mt-8">
                    <Button variant="secondary" size="md" href="/contact">
                      Map your integrations
                    </Button>
                  </div>
                </div>

                {/* Visual column */}
                <div className="lg:pt-2">
                  <IntegrationsHubVisual />
                </div>
              </div>
            </Reveal>
          </div>

        </Container>
      </Section>

      {/* ── 3. CTA ─────────────────────────────────── */}
      <CtaSection />
    </>
  )
}
