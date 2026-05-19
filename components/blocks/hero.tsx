'use client'

import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/* ─────────────────────────────────────────────
   AGENT TERMINAL
   ───────────────────────────────────────────── */

const LOG_STEPS = [
  { text: 'Support ticket #4821 received via Slack',   color: 'text-[#A8A39C]' },
  { text: 'Fetching customer history from Salesforce…', color: 'text-[#A8A39C]' },
  { text: 'Sentiment: HIGH urgency · churn risk',       color: 'text-[#818CF8]' },
  { text: 'Drafting resolution with GPT-4o…',           color: 'text-[#A8A39C]' },
  { text: 'Sending reply via Zendesk API',              color: 'text-[#A8A39C]' },
  { text: '✓ Resolved — 1.2s  ·  cost: $0.004',        color: 'text-[#4ade80]' },
] as const

function AgentTerminal() {
  const reduced = useReducedMotion()
  const [step, setStep] = useState(reduced ? LOG_STEPS.length : 0)

  useEffect(() => {
    if (reduced) return
    if (step >= LOG_STEPS.length) {
      const t = setTimeout(() => setStep(0), 3200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStep(s => s + 1), step === 0 ? 500 : 820)
    return () => clearTimeout(t)
  }, [step, reduced])

  return (
    <div
      className="rounded-xl overflow-hidden font-mono"
      style={{
        background: '#0A0A14',
        border: '1px solid rgba(79,70,229,0.18)',
        boxShadow: '0 28px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2.5 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#07070F' }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="flex-1 text-center text-[9px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.2)]">
          perpetual-agent — bash
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-ember"
            style={{ animation: reduced ? 'none' : 'pulse-ember 2s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <span className="text-[9px] text-ember uppercase tracking-widest">Live</span>
        </span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-5" style={{ minHeight: 210 }}>
        <div className="text-[10px] text-[rgba(255,255,255,0.18)] mb-4 select-none">
          $ agent run --ticket=4821 --auto-resolve
        </div>

        <div className="space-y-2.5">
          {LOG_STEPS.slice(0, step).map((entry, i) => (
            <motion.div
              key={`${step > LOG_STEPS.length ? 'done' : step}-${i}`}
              initial={reduced ? undefined : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22 }}
              className="flex items-start gap-2"
            >
              <span className="text-[rgba(255,255,255,0.18)] text-[11px] select-none flex-shrink-0 mt-[1px]">›</span>
              <span className={`text-[11px] leading-relaxed ${entry.color}`}>{entry.text}</span>
            </motion.div>
          ))}

          {!reduced && step > 0 && step < LOG_STEPS.length && (
            <div className="flex items-center pl-4 mt-1">
              <span
                className="inline-block w-[7px] h-[14px] rounded-sm bg-ember/60"
                style={{ animation: 'pulse-ember 0.85s ease-in-out infinite' }}
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.22)]">
          <span>6 steps</span>
          <span className="text-[rgba(255,255,255,0.1)]">|</span>
          <span>340ms avg</span>
          <span className="text-[rgba(255,255,255,0.1)]">|</span>
          <span className="text-[#4ade80]">✓ deployed</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['Slack', 'Zendesk', 'Salesforce', 'Notion'].map(tool => (
            <span
              key={tool}
              className="rounded px-2 py-0.5 text-[8px] uppercase tracking-wider text-[rgba(255,255,255,0.3)]"
              style={{ background: '#111120', border: '1px solid rgba(79,70,229,0.16)' }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
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
    <section
      className="relative overflow-hidden pt-40 pb-32"
      aria-labelledby="hero-heading"
      style={{ backgroundColor: '#070710' }}
    >
      {/* Indigo ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 90% 55% at 50% -8%, rgba(79,70,229,0.22) 0%, transparent 68%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Noise grain layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.032]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <Container size="wide">
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

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
              className="font-display text-hero font-normal leading-[1.15] tracking-tight text-on-dark max-w-[16ch]"
              {...fadeUp(80)}
            >
              We build the agents your team can&rsquo;t
            </motion.h1>

            <motion.p
              className="font-body text-md text-on-dark-muted leading-[1.6] max-w-[40rem] mt-6"
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
              <Button
                variant="ghost"
                size="lg"
                href="#how-it-works"
                className="!text-on-dark/60 hover:!text-on-dark hover:!bg-white/[0.06] !border !border-white/10"
              >
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Right column — terminal */}
          <motion.div className="lg:w-[45%]" {...fadeUp(320)}>
            <AgentTerminal />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
