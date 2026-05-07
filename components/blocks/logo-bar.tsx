import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/motion/reveal'

/* ─────────────────────────────────────────────
   LOGO DATA
   ───────────────────────────────────────────── */

const LOGOS: { name: string; detail?: string }[] = [
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'AWS' },
  { name: 'Vercel' },
  { name: 'LangChain' },
  { name: 'Pinecone' },
]

/* ─────────────────────────────────────────────
   LOGO ITEM
   A text-based logo placeholder styled to look
   like a company wordmark.
   ───────────────────────────────────────────── */

function LogoItem({ name, detail }: { name: string; detail?: string }) {
  return (
    <div
      className="
        flex items-center justify-center h-6
        opacity-50 grayscale
        hover:opacity-80 hover:grayscale-0
        transition-all duration-200
      "
    >
      <span className="font-semibold text-sm text-graphite tracking-tight leading-none">
        {name}
        {detail && (
          <span className="font-normal text-xs ml-0.5 opacity-70">{detail}</span>
        )}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   LOGO BAR
   ───────────────────────────────────────────── */

export function LogoBar() {
  return (
    <section
      className="
        section-light
        border-t border-b border-[oklch(85%_0.005_75)]
        py-12
      "
      aria-label="Technologies we build with"
    >
      <Container size="wide">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-subtle text-center mb-8">
            Built with &amp; deployed on
          </p>
          <div className="flex flex-row items-center justify-center gap-10 flex-wrap">
            {LOGOS.map((logo) => (
              <LogoItem key={logo.name} name={logo.name} detail={logo.detail} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
