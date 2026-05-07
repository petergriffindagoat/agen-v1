'use client'

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

/* ─────────────────────────────────────────────
   EASE
   ───────────────────────────────────────────── */

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/* ─────────────────────────────────────────────
   GRAPH CONSTANTS
   ───────────────────────────────────────────── */

const NODE_W = 130
const NODE_H = 54

const INIT = {
  slack:  { x: 20,  y: 56 },
  engine: { x: 190, y: 56 },
  logic:  { x: 360, y: 56 },
  action: { x: 530, y: 56 },
}

/* ─────────────────────────────────────────────
   BEZIER PATH HELPER
   ───────────────────────────────────────────── */

function buildPath(fx: number, fy: number, tx: number, ty: number): string {
  const dx = tx - fx
  const dy = ty - fy
  let sx: number, sy: number, ex: number, ey: number
  let c1x: number, c1y: number, c2x: number, c2y: number

  if (Math.abs(dx) >= Math.abs(dy) * 0.6) {
    sx = fx + NODE_W;    sy = fy + NODE_H / 2
    ex = tx;             ey = ty + NODE_H / 2
    const off = Math.max(Math.abs(ex - sx) * 0.5, 50)
    c1x = sx + off; c1y = sy
    c2x = ex - off; c2y = ey
  } else {
    sx = fx + NODE_W / 2; sy = fy + NODE_H
    ex = tx + NODE_W / 2; ey = ty
    const off = Math.max(Math.abs(ey - sy) * 0.5, 50)
    c1x = sx; c1y = sy + off
    c2x = ex; c2y = ey - off
  }

  return `M ${sx} ${sy} C ${c1x} ${c1y} ${c2x} ${c2y} ${ex} ${ey}`
}

/* ─────────────────────────────────────────────
   CONNECTION LINE
   ───────────────────────────────────────────── */

interface NodeMV { x: MotionValue<number>; y: MotionValue<number> }

function ConnectionLine({ fromMV, toMV }: { fromMV: NodeMV; toMV: NodeMV }) {
  const pathRef = useRef<SVGPathElement>(null)

  const getPath = () =>
    buildPath(fromMV.x.get(), fromMV.y.get(), toMV.x.get(), toMV.y.get())

  const sync = () => pathRef.current?.setAttribute('d', getPath())

  useMotionValueEvent(fromMV.x, 'change', sync)
  useMotionValueEvent(fromMV.y, 'change', sync)
  useMotionValueEvent(toMV.x,  'change', sync)
  useMotionValueEvent(toMV.y,  'change', sync)

  return (
    <path
      ref={pathRef}
      d={getPath()}
      fill="none"
      stroke="#E0592A"
      strokeWidth={1.5}
      strokeOpacity={0.4}
      strokeLinecap="round"
    />
  )
}

/* ─────────────────────────────────────────────
   AGENT FLOW DIAGRAM
   ───────────────────────────────────────────── */

function AgentFlowDiagram() {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement | null>(null)

  /* motion values — one pair per node */
  const slackX = useMotionValue(INIT.slack.x)
  const slackY = useMotionValue(INIT.slack.y)
  const engX   = useMotionValue(INIT.engine.x)
  const engY   = useMotionValue(INIT.engine.y)
  const logX   = useMotionValue(INIT.logic.x)
  const logY   = useMotionValue(INIT.logic.y)
  const actX   = useMotionValue(INIT.action.x)
  const actY   = useMotionValue(INIT.action.y)

  const mv = {
    slack:  { x: slackX, y: slackY },
    engine: { x: engX,   y: engY   },
    logic:  { x: logX,   y: logY   },
    action: { x: actX,   y: actY   },
  }

  const conns: Array<[NodeMV, NodeMV]> = [
    [mv.slack, mv.engine],
    [mv.engine, mv.logic],
    [mv.logic, mv.action],
  ]

  function node(
    pos: NodeMV,
    entryDelay: number,
    children: ReactNode,
  ) {
    return (
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={containerRef}
        dragElastic={0}
        style={{
          x:          pos.x,
          y:          pos.y,
          position:   'absolute',
          top:        0,
          left:       0,
          width:      NODE_W,
          touchAction: 'none',
        }}
        initial={reduced ? undefined : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: reduced ? 0 : entryDelay, ease: EASE_OUT }}
        whileHover={{ scale: 1.04 }}
        whileDrag={{ scale: 1.06 }}
        className="cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="bg-soot rounded-xl p-8 md:p-10 font-mono select-none">
      {/* Header label */}
      <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted mb-6">
        Agent Architecture
      </div>

      {/* Graph canvas */}
      <div className="overflow-x-auto mb-6">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: 680, height: 165 }}
        >
          <svg
            className="absolute inset-0 pointer-events-none"
            width="100%"
            height="100%"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            {conns.map(([from, to], i) => (
              <ConnectionLine key={i} fromMV={from} toMV={to} />
            ))}
          </svg>

          {/* Slack Message */}
          {node(mv.slack, 0, (
            <div className="bg-[#1e1e1e] border border-[oklch(30%_0.005_75)] rounded-md px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-1">
                Input
              </div>
              <div className="text-xs text-on-dark font-medium">Slack Message</div>
            </div>
          ))}

          {/* Agent Engine — active, pulsing */}
          {node(mv.engine, 0.1, (
            <div
              className="bg-[#1e1e1e] border border-ember rounded-md px-4 py-3 relative"
              style={{ boxShadow: '0 0 0 1px #E0592A' }}
            >
              <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-1 flex items-center gap-1.5">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0"
                  style={{ animation: reduced ? 'none' : 'pulse-ember 2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                Processing...
              </div>
              <div className="text-xs text-on-dark font-medium">Agent Engine</div>
            </div>
          ))}

          {/* Decision */}
          {node(mv.logic, 0.2, (
            <div
              className="bg-[#1e1e1e] border border-ember rounded-md px-4 py-3"
              style={{ boxShadow: '0 0 0 1px #E0592A' }}
            >
              <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-1">
                Logic
              </div>
              <div className="text-xs text-on-dark font-medium">Decision</div>
            </div>
          ))}

          {/* Action Taken */}
          {node(mv.action, 0.3, (
            <div className="bg-[#1e1e1e] border border-[oklch(30%_0.005_75)] rounded-md px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-1">
                Output
              </div>
              <div className="text-xs text-on-dark font-medium">Action Taken</div>
            </div>
          ))}
        </div>
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
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
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
