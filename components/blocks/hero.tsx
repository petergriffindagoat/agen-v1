'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

/* ─────────────────────────────────────────────
   EASE
   ───────────────────────────────────────────── */

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/* ─────────────────────────────────────────────
   FLOW NODES
   ───────────────────────────────────────────── */

const FLOW_NODES = [
  { id: 'slack',  label: 'Input',      value: 'Slack Message', icon: 'MessageSquare', x: 10, active: false },
  { id: 'engine', label: 'Processing', value: 'Agent Engine',  icon: 'Cpu',           x: 37, active: true  },
  { id: 'logic',  label: 'Logic',      value: 'Decision',      icon: 'Layers',        x: 63, active: true  },
  { id: 'action', label: 'Output',     value: 'Action Taken',  icon: 'Zap',           x: 90, active: false },
]

const FLOW_CONNS = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
]

/* ─────────────────────────────────────────────
   INLINE ICON SET
   ───────────────────────────────────────────── */

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    MessageSquare: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    Cpu:           <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM10 8V4M14 8V4M10 16v4M14 16v4M20 10h4M20 14h4M0 10h4M0 14h4" />,
    Layers:        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    Zap:           <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[name]}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   AGENT FLOW DIAGRAM
   ───────────────────────────────────────────── */

function AgentFlowDiagram() {
  const reduced = useReducedMotion()
  const Y = 50

  return (
    <div className="bg-soot rounded-xl p-6 md:p-8 font-mono select-none">
      <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted mb-5">
        Agent Architecture
      </div>

      {/* Graph canvas */}
      <div className="relative w-full overflow-hidden rounded-lg mb-6" style={{ height: 140 }}>
        {/* Dot-grid */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(rgba(168,163,156,0.14) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        {/* Ember glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ember/[0.05] blur-[60px] pointer-events-none rounded-full" />

        {/* SVG connections + particles */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(224,89,42,0.12)" />
              <stop offset="50%"  stopColor="rgba(240,132,94,0.42)" />
              <stop offset="100%" stopColor="rgba(184,68,32,0.12)" />
            </linearGradient>
            <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {FLOW_CONNS.map((conn, idx) => {
            const from = FLOW_NODES[conn.from]
            const to   = FLOW_NODES[conn.to]
            const mx   = (from.x + to.x) / 2
            const path = `M ${from.x} ${Y} C ${mx} ${Y}, ${mx} ${Y}, ${to.x} ${Y}`
            const duration = 2.4 + idx * 0.55

            return (
              <g key={idx}>
                <motion.path
                  id={`hero-path-${idx}`}
                  d={path}
                  fill="none"
                  stroke="url(#heroGrad)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeInOut' }}
                />
                {!reduced && (
                  <circle r="0.75" fill="#E0592A" filter="url(#heroGlow)">
                    <animateMotion
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.4}s`}
                    >
                      <mpath href={`#hero-path-${idx}`} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            )
          })}
        </svg>

        {/* Nodes */}
        {FLOW_NODES.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
            style={{ left: `${node.x}%`, top: '50%' }}
            initial={reduced ? undefined : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: i * 0.08 }}
          >
            <div className="relative">
              <div
                className={[
                  'w-12 h-12 rounded-xl flex items-center justify-center',
                  node.active
                    ? 'bg-ember text-on-dark shadow-[0_0_20px_rgba(224,89,42,0.38)]'
                    : 'bg-[#1e1e1e] text-on-dark-muted border border-[oklch(30%_0.005_75)]',
                ].join(' ')}
              >
                <Icon name={node.icon} className="w-5 h-5" />
              </div>
              {node.active && (
                <span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-ember border-2 border-soot"
                  style={{ animation: reduced ? 'none' : 'pulse-ember 2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="text-center">
              <div className="text-[8px] uppercase tracking-[0.12em] text-on-dark-muted leading-none">
                {node.label}
              </div>
              <div className="text-[10px] text-on-dark mt-0.5 whitespace-nowrap">
                {node.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[oklch(22%_0.005_75)] my-4" aria-hidden="true" />

      {/* Status row */}
      <motion.div
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: reduced ? 0 : 0.45, ease: EASE_OUT }}
        className="flex items-center gap-6 flex-wrap mb-4"
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-ember"
            style={{ animation: reduced ? 'none' : 'pulse-ember 2s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">Running</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[oklch(44%_0.1_142)]" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">Deployed</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Latency: 340ms
        </span>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-[oklch(22%_0.005_75)] my-4" aria-hidden="true" />

      {/* Connected Tools */}
      <motion.div
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: reduced ? 0 : 0.55, ease: EASE_OUT }}
        className="flex flex-col gap-1.5"
      >
        <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted mb-1">
          Connected Tools
        </div>
        <div className="flex gap-2 flex-wrap">
          {['Slack', 'Zendesk', 'Salesforce', 'Notion'].map((tool) => (
            <span
              key={tool}
              className="bg-[#1e1e1e] border border-[oklch(28%_0.005_75)] rounded px-2 py-1 text-[10px] text-on-dark-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */

export function Hero() {
  const reduced = useReducedMotion()

  function fadeUp(delay: number) {
    if (reduced) return {}
    return {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: delay / 1000, ease: EASE_OUT },
    }
  }

  return (
    <Section
      variant="light"
      className="pt-40 pb-32"
      aria-labelledby="hero-heading"
    >
      <Container size="wide">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left column — text */}
          <div className="lg:w-[55%]">
            <motion.p
              className="overline text-ember mb-4"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              AI Automation Studio
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="font-display text-hero font-normal leading-[1.15] tracking-tight text-graphite max-w-[16ch]"
              {...fadeUp(80)}
            >
              We build the agents your team can&rsquo;t
            </motion.h1>

            <motion.p
              className="font-body text-md text-muted leading-[1.6] max-w-[40rem] mt-6"
              {...fadeUp(160)}
            >
              Your ops team writes prompts in Slack and hopes for the best. We
              deploy autonomous agents that read, decide, and act &mdash; in
              your existing tools.
            </motion.p>

            <motion.div
              className="mt-8 flex gap-4 flex-wrap"
              {...fadeUp(240)}
            >
              <Button variant="primary" size="lg" href="/contact">
                Book a 15-minute call
              </Button>
              <Button variant="secondary" size="lg" href="#how-it-works">
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Right column — diagram */}
          <motion.div className="lg:w-[45%]" {...fadeUp(320)}>
            <AgentFlowDiagram />
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
