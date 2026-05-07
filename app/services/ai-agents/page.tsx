import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/components/blocks/cta-section'
import { TechDiagram } from '@/components/blocks/tech-diagram'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'AI Agents — Perpetual Stack',
  description:
    'Custom autonomous AI agents that handle support tickets, qualify leads, and process documents — without human review.',
  path: '/services/ai-agents',
})

/* ─────────────────────────────────────────────
   STEP CARD
   ───────────────────────────────────────────── */

interface StepCardProps {
  number: string
  title: string
  body: string
}

function StepCard({ number, title, body }: StepCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-xs text-on-dark-muted">{number}</p>
      <p className="font-display text-lg text-on-dark leading-snug">{title}</p>
      <p className="text-sm text-on-dark-muted leading-normal font-body">{body}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CAPABILITY CARD
   ───────────────────────────────────────────── */

interface CapabilityCardProps {
  title: string
  body: string
}

function CapabilityCard({ title, body }: CapabilityCardProps) {
  return (
    <div className="bg-chalk rounded-xl p-6 flex flex-col gap-3">
      <p className="font-display text-base text-graphite leading-snug">{title}</p>
      <p className="font-body text-sm text-muted leading-normal">{body}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AIAgentsPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-20" aria-labelledby="ai-agents-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">AI AGENTS</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="ai-agents-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[20ch]"
            >
              Agents that do the work, not just the chat
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-md text-muted max-w-[40rem] mt-6 leading-normal font-body">
              We build agents that read, decide, and act &mdash; in your existing tools, against
              your real data. No sandbox. No demo environment. Production from day one.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/contact">
                Build an agent
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. HOW IT WORKS ────────────────────────── */}
      <Section variant="light" className="pb-20" aria-labelledby="how-it-works-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">HOW IT WORKS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="how-it-works-heading"
              className="font-display text-2xl font-normal leading-snug text-graphite mb-10"
            >
              An agent is just code that reads, reasons, and acts
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="bg-soot rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                <StepCard
                  number="01"
                  title="Read"
                  body="The agent receives input from your systems: a Zendesk ticket, a Slack message, an email, a form submission, a database event."
                />
                <StepCard
                  number="02"
                  title="Reason"
                  body="Using an LLM and your context (knowledge base, customer history, business rules), the agent decides what to do."
                />
                <StepCard
                  number="03"
                  title="Act"
                  body="The agent calls your APIs, updates records, sends responses, escalates to humans, or logs the decision &mdash; in your systems."
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12">
              <TechDiagram variant="full" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 3. CAPABILITIES ────────────────────────── */}
      <Section variant="accent" aria-labelledby="capabilities-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">CAPABILITIES</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="capabilities-heading"
              className="font-display text-2xl font-normal leading-snug text-graphite mb-10"
            >
              What our agents handle
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CapabilityCard
                title="Support triage"
                body="Read incoming tickets, classify by type and urgency, auto-resolve known issues, escalate edge cases with a pre-written summary."
              />
              <CapabilityCard
                title="Lead qualification"
                body="Monitor form submissions, score leads against your criteria, enrich with company data, update your CRM, and book calls for qualified leads."
              />
              <CapabilityCard
                title="Document processing"
                body="Extract structured data from PDFs, contracts, and forms. Validate against business rules. Route to the right system."
              />
              <CapabilityCard
                title="Monitoring &amp; alerting"
                body="Watch your dashboards and data feeds. Detect anomalies against your thresholds. Send targeted Slack alerts to the right person."
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 4. CTA ─────────────────────────────────── */}
      <CtaSection
        ctaText="Build your first agent"
        headline="Your first agent could be live in 3 weeks"
      />
    </>
  )
}
