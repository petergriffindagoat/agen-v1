'use client'

import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'
import { TechDiagram } from './tech-diagram'

/* ─────────────────────────────────────────────
   TECH LIST ITEM
   ───────────────────────────────────────────── */

function TechItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 mb-3">
      <span
        className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0"
        aria-hidden="true"
      />
      <span className="font-mono text-sm text-muted">
        {text}
      </span>
    </li>
  )
}

/* ─────────────────────────────────────────────
   TECH STACK SECTION
   ───────────────────────────────────────────── */

const TECH_ITEMS = [
  'GPT-4, Claude, Gemini',
  'LangChain, LlamaIndex',
  'Pinecone, Weaviate',
  'Your infra: AWS, GCP, Azure',
]

export function TechStackSection() {
  return (
    <Section
      variant="light"
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
    >
      <Container size="wide">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Diagram (55%) */}
          <Reveal className="w-full lg:w-[55%]">
            <TechDiagram variant="full" />
          </Reveal>

          {/* Right: Text (45%) — appears first on mobile */}
          <div className="w-full lg:w-[45%]">
            <Reveal>
              <p className="overline text-ember">The stack</p>
              <h2
                id="tech-stack-heading"
                className="font-display text-2xl font-normal leading-tight text-graphite mt-4"
              >
                Under the hood, not under a dashboard
              </h2>
              <p className="text-base text-muted leading-normal mt-4 mb-8">
                We don&rsquo;t sell you a login to a platform. We write
                production code that runs in your infrastructure, speaks your
                APIs, and reports to your existing dashboards.
              </p>

              <ul className="list-none m-0 p-0" aria-label="Technology stack">
                {TECH_ITEMS.map((item) => (
                  <TechItem key={item} text={item} />
                ))}
              </ul>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  )
}
