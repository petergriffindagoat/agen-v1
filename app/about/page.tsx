import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { CtaSection } from '@/components/blocks/cta-section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'About — Perpetual Stack',
  description:
    'We are a small team of engineers who build autonomous AI agents that ship to production. We started Perpetual Stack because we kept being called in to fix failed AI pilots.',
  path: '/about',
})

/* ─────────────────────────────────────────────
   TEAM DATA
   ───────────────────────────────────────────── */

const TEAM = [
  {
    initials: 'ZN',
    name: 'Zaid Nadaf',
    role: 'Founder & Lead Engineer',
    bio: 'Previously built ML pipelines at scale. Obsessed with making AI systems reliable enough to trust with production workloads.',
  },
  {
    initials: 'SR',
    name: 'Sara Reyes',
    role: 'AI Systems Engineer',
    bio: '10 years in backend systems, last 3 years deploying LLM-based agents in fintech and healthcare environments.',
  },
  {
    initials: 'MC',
    name: 'Marcus Chen',
    role: 'Integration Specialist',
    bio: 'Built API integrations for 50+ enterprise systems. If it has a REST endpoint, he\'s connected it to an AI agent.',
  },
]

/* ─────────────────────────────────────────────
   VALUES DATA
   ───────────────────────────────────────────── */

const VALUES = [
  {
    title: 'Ship to production, not to a demo',
    body: 'Every engagement ends with agents running in your infrastructure, processing real data. Not a Loom recording, not a staging environment — production.',
  },
  {
    title: 'Your stack, not ours',
    body: "We write code that talks to your existing APIs, stores data in your existing databases, and shows up in your existing dashboards. No new login to manage.",
  },
  {
    title: 'Measure in hours saved, not features built',
    body: "We track one metric per engagement: how much time did the agent save versus the manual process? If we can't show that number, we haven't succeeded.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────── */}
      <Section variant="light" className="pt-40 pb-20" aria-labelledby="about-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">About Us</p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="about-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[16ch]"
            >
              We&rsquo;re the engineering team companies call after the AI pilot fails
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="max-w-[40rem] mt-8 space-y-4 font-body text-base text-muted leading-normal">
              <p>
                Most AI pilots fail not because the technology is immature, but because the
                integration is shallow. A demo that impresses in a sandbox rarely survives contact
                with production data, legacy APIs, and the edge cases your real customers generate
                every day.
              </p>
              <p>
                We started Perpetual Stack because we kept getting called in to fix those pilots.
                Now we skip the pilot phase entirely: we scope, build, and deploy production agents
                in 3 weeks.
              </p>
              <p>
                We&rsquo;re a small team of engineers who have shipped AI systems at scale. We
                don&rsquo;t sell platforms, retainers, or roadmaps. We deploy agents that do the
                work.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 2. VALUES ──────────────────────────────── */}
      <Section variant="accent" aria-labelledby="values-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">How We Work</p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {VALUES.map((value) => (
              <RevealItem key={value.title}>
                <h2 className="font-display text-xl font-normal text-graphite leading-snug">
                  {value.title}
                </h2>
                <p className="font-body text-base text-muted mt-3 leading-normal">
                  {value.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ── 3. TEAM ────────────────────────────────── */}
      <Section variant="light" aria-labelledby="team-heading">
        <Container size="wide">
          <Reveal>
            <p className="overline text-ember mb-4">The Team</p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TEAM.map((member) => (
              <RevealItem key={member.name}>
                <div className="group">
                  {/* Avatar placeholder — grayscale default, color on hover */}
                  <div
                    className="bg-paper rounded-lg w-full aspect-square flex items-center justify-center text-subtle font-display text-3xl select-none overflow-hidden"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>

                  {/* Name */}
                  <p className="font-body text-base font-semibold text-graphite mt-4">
                    {member.name}
                  </p>

                  {/* Role */}
                  <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mt-1">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="font-body text-sm text-muted mt-2 leading-normal">
                    {member.bio}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ── 4. CTA ─────────────────────────────────── */}
      <CtaSection
        overline="Join the Stack"
        headline="Work with engineers who ship"
        body="We're occasionally looking for engineers who want to work on real AI systems — not demos."
        ctaText="Get in touch"
        ctaHref="/contact"
        caption="Full-time and project-based roles."
      />
    </>
  )
}
