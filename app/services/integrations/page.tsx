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
  title: 'Platform Integrations — Perpetual Stack',
  description:
    'Connect your CRM, helpdesk, and internal tools to AI without rebuilding anything.',
  path: '/services/integrations',
})

/* ─────────────────────────────────────────────
   INTEGRATION CATEGORY CARD
   ───────────────────────────────────────────── */

interface IntegrationCardProps {
  title: string
  body: string
}

function IntegrationCard({ title, body }: IntegrationCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-base text-graphite leading-snug">{title}</p>
      <p className="font-body text-sm text-muted leading-normal">{body}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TECH POINT
   ───────────────────────────────────────────── */

interface TechPointProps {
  text: string
}

function TechPoint({ text }: TechPointProps) {
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
   PAGE
   ───────────────────────────────────────────── */

export default function IntegrationsPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-20" aria-labelledby="integrations-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">PLATFORM INTEGRATIONS</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="integrations-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[20ch]"
            >
              Connect the tools you already use
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-md text-muted max-w-[40rem] mt-6 leading-normal font-body">
              Your stack didn&rsquo;t break. You just need to connect the pieces. We build the
              integrations between your existing tools and AI &mdash; bidirectional, reliable,
              and observable.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/contact">
                Map your integrations
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. WHAT WE CONNECT ─────────────────────── */}
      <Section variant="light" className="pb-20" aria-labelledby="common-integrations-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">COMMON INTEGRATIONS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="common-integrations-heading"
              className="font-display text-2xl font-normal leading-snug text-graphite mb-10"
            >
              The connectors we build most
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-[oklch(85%_0.005_75)] pt-10">
              <IntegrationCard
                title="CRMs"
                body="Salesforce, HubSpot, Pipedrive. Read leads, write updates, trigger workflows. Bidirectional sync with your AI agents."
              />
              <IntegrationCard
                title="Helpdesks"
                body="Zendesk, Intercom, Freshdesk. Receive tickets, send responses, update status, route escalations."
              />
              <IntegrationCard
                title="Internal tools"
                body="Notion, Slack, Google Workspace, custom databases. Pull context, send notifications, write logs."
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 3. HOW INTEGRATIONS WORK ───────────────── */}
      <Section variant="accent" aria-labelledby="under-hood-heading">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal>
                <p className="overline text-ember mb-4">UNDER THE HOOD</p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="under-hood-heading"
                  className="font-display text-2xl font-normal leading-snug text-graphite mb-6"
                >
                  Webhooks, OAuth, and REST all the way down
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-body text-base text-muted leading-normal mb-8">
                  We don&rsquo;t use no-code platforms or Zapier under the hood. We write code
                  that calls your APIs directly &mdash; which means it&rsquo;s faster, more
                  reliable, and easier to debug when something breaks.
                </p>
                <ul className="space-y-4" aria-label="Technical implementation details">
                  <TechPoint text="Webhook receivers that handle retries and idempotency" />
                  <TechPoint text="OAuth flows for any SaaS tool that supports it" />
                  <TechPoint text="Rate limiting and backoff built into every integration" />
                  <TechPoint text="Structured logging for every API call in and out" />
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. CTA ─────────────────────────────────── */}
      <CtaSection
        ctaText="Map your integrations"
        headline="Know which tools need to talk to each other"
      />
    </>
  )
}
