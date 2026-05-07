import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

interface ServiceCard {
  number: string
  title: string
  body: string
  href: string
  featured?: boolean
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const SERVICES: ServiceCard[] = [
  {
    number: '01',
    title: 'AI agents',
    body: 'Custom agents that handle support tickets, qualify leads, and process documents — without human review.',
    href: '/services/ai-agents',
    featured: true,
  },
  {
    number: '02',
    title: 'Workflow automation',
    body: "End-to-end orchestration that replaces your team’s copy-paste workflows with reliable automation.",
    href: '/services/workflow',
  },
  {
    number: '03',
    title: 'Platform integrations',
    body: 'Connect your CRM, helpdesk, and internal tools to AI — without rebuilding anything.',
    href: '/services/integrations',
  },
]

/* ─────────────────────────────────────────────
   SERVICE CARD COMPONENT
   ───────────────────────────────────────────── */

function ServiceCardItem({ card }: { card: ServiceCard }) {
  if (card.featured) {
    return (
      <div
        className="
          relative border-2 border-ember rounded-lg p-8 shadow-md
          hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200
          overflow-hidden
        "
      >
        {/* Top accent bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-0.5 bg-ember"
        />

        <p className="font-mono text-xs text-subtle tracking-[0.12em] mb-4">
          {card.number}
        </p>
        <h3 className="font-body text-lg font-medium text-graphite leading-snug mb-3">
          {card.title}
        </h3>
        <p className="text-base text-muted leading-normal mb-6">
          {card.body}
        </p>
        <Button variant="link" href={card.href}>
          See details &rarr;
        </Button>
      </div>
    )
  }

  return (
    <div
      className="
        border border-[oklch(78%_0.008_75)] rounded-lg p-8 shadow-sm
        hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
      "
    >
      <p className="font-mono text-xs text-subtle tracking-[0.12em] mb-4">
        {card.number}
      </p>
      <h3 className="font-body text-lg font-medium text-graphite leading-snug mb-3">
        {card.title}
      </h3>
      <p className="text-base text-muted leading-normal mb-6">
        {card.body}
      </p>
      <Button variant="link" href={card.href}>
        See details &rarr;
      </Button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SERVICES GRID
   ───────────────────────────────────────────── */

export function ServicesGrid() {
  return (
    <Section variant="light" aria-labelledby="services-heading">
      <Container size="wide">
        <Reveal>
          <p className="overline text-ember">What we build</p>
          <h2
            id="services-heading"
            className="font-display text-2xl font-normal leading-tight text-graphite mt-4 mb-16"
          >
            Three ways we deploy AI into your stack
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((card) => (
            <RevealItem key={card.number}>
              <ServiceCardItem card={card} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  )
}
