'use client'

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionValueEvent,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export type TechDiagramVariant = 'hero' | 'full'

interface TechDiagramProps {
  variant?: TechDiagramVariant
}

/* ─────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────── */

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const NODE_W = 130
const NODE_H = 54

const NODE_DATA: Record<string, { title: string; description: string }> = {
  slack:    { title: 'Slack Input',     description: 'Receives and normalizes events from your Slack workspace in real time.' },
  engine:   { title: 'Agent Engine',    description: 'Core AI reasoning layer — orchestrates tool calls, memory lookups, and the agent loop.' },
  logic:    { title: 'Decision Logic',  description: 'Evaluates intent, business rules, and available actions to determine the optimal response.' },
  vectordb: { title: 'Vector DB',       description: 'Semantic memory store — retrieves relevant past interactions for context-aware responses.' },
  crm:      { title: 'CRM Integration', description: 'Reads and writes customer records to keep your CRM synchronized automatically.' },
  action:   { title: 'Action Taken',    description: 'The completed output — a reply sent, ticket filed, record updated, or workflow triggered.' },
}

/* ─────────────────────────────────────────────
   LAYOUT DATA
   ───────────────────────────────────────────── */

interface NodeDef { id: string; label: string; value: string; active?: boolean }
interface Conn    { from: string; to: string }

const FULL_NODES: NodeDef[] = [
  { id: 'slack',    label: 'Input',  value: 'Your Slack' },
  { id: 'engine',   label: 'Engine', value: 'Agent Engine', active: true },
  { id: 'logic',    label: 'Logic',  value: 'Decision Logic', active: true },
  { id: 'vectordb', label: 'Memory', value: 'Vector DB' },
  { id: 'crm',      label: 'CRM',    value: 'Your CRM' },
  { id: 'action',   label: 'Result', value: 'Action Taken' },
]
const FULL_INIT: Record<string, { x: number; y: number }> = {
  slack:    { x: 20,  y: 60  },
  engine:   { x: 230, y: 60  },
  logic:    { x: 440, y: 60  },
  vectordb: { x: 230, y: 185 },
  crm:      { x: 440, y: 185 },
  action:   { x: 440, y: 310 },
}
const FULL_CONNS: Conn[] = [
  { from: 'slack',    to: 'engine'   },
  { from: 'engine',   to: 'logic'    },
  { from: 'engine',   to: 'vectordb' },
  { from: 'vectordb', to: 'action'   },
  { from: 'crm',      to: 'action'   },
]
const FULL_FLOW = ['slack', 'engine', 'logic', 'vectordb', 'crm', 'action'] as const

const HERO_NODES: NodeDef[] = [
  { id: 'slack',  label: 'Input',  value: 'Slack Message' },
  { id: 'engine', label: 'Engine', value: 'Agent Engine', active: true },
  { id: 'action', label: 'Output', value: 'Action Taken' },
]
const HERO_INIT: Record<string, { x: number; y: number }> = {
  slack:  { x: 20,  y: 43 },
  engine: { x: 230, y: 43 },
  action: { x: 440, y: 43 },
}
const HERO_CONNS: Conn[] = [
  { from: 'slack',  to: 'engine' },
  { from: 'engine', to: 'action' },
]
const HERO_FLOW = ['slack', 'engine', 'action'] as const

/* ─────────────────────────────────────────────
   BEZIER PATH HELPER
   Horizontal routing (right→left port) when mostly
   horizontal; vertical routing (bottom→top port) otherwise.
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
   Updates the SVG path directly via DOM on every
   drag frame — no React re-render needed.
   ───────────────────────────────────────────── */

interface NodeMV { x: MotionValue<number>; y: MotionValue<number> }

function ConnectionLine({
  fromMV,
  toMV,
  lit,
}: {
  fromMV: NodeMV
  toMV:   NodeMV
  lit:    boolean
}) {
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
      strokeOpacity={lit ? 0.7 : 0.3}
      strokeLinecap="round"
      style={{ transition: 'stroke-opacity 0.25s' }}
    />
  )
}

/* ─────────────────────────────────────────────
   DRAGGABLE NODE
   ───────────────────────────────────────────── */

interface DraggableNodeProps {
  id:           string
  label:        string
  value:        string
  active?:      boolean
  entryIndex:   number
  reduced:      boolean
  isSelected:   boolean
  isFlowStep:   boolean
  onSelect:     (id: string | null) => void
  pos:          NodeMV
  containerRef: React.RefObject<HTMLDivElement | null>
}

function DraggableNode({
  id, label, value, active, entryIndex, reduced,
  isSelected, isFlowStep, onSelect, pos, containerRef,
}: DraggableNodeProps) {
  const highlighted = isSelected || isFlowStep || active

  return (
    <motion.button
      type="button"
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
        border:      highlighted ? '1px solid #E0592A' : '1px solid oklch(28% 0.005 75)',
        boxShadow:   isSelected
          ? '0 0 0 2px #E0592A, 0 0 14px rgba(224,89,42,0.28)'
          : isFlowStep
          ? '0 0 8px rgba(224,89,42,0.22)'
          : active
          ? '0 0 0 1px #E0592A'
          : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      initial={reduced ? undefined : { opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: reduced ? 0 : entryIndex * 0.08, ease: EASE_OUT }}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.06 }}
      className="bg-[#1e1e1e] rounded-md px-4 py-2.5 text-left cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0592A]"
      onClick={() => onSelect(isSelected ? null : id)}
      aria-pressed={isSelected}
    >
      <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted leading-none mb-0.5 pointer-events-none">
        {label}
      </div>
      <div className="text-xs text-on-dark font-medium mt-0.5 pointer-events-none">
        {value}
      </div>
    </motion.button>
  )
}

/* ─────────────────────────────────────────────
   NODE DETAIL CARD
   ───────────────────────────────────────────── */

function NodeDetail({ nodeId, onClose }: { nodeId: string; onClose: () => void }) {
  const data = NODE_DATA[nodeId]
  if (!data) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: EASE_OUT }}
      className="mt-4 px-3 py-2.5 rounded-md bg-[#252525] border border-[oklch(30%_0.005_75)] flex items-start justify-between gap-3"
    >
      <div>
        <div className="text-[10px] uppercase tracking-[0.12em] text-ember mb-1">{data.title}</div>
        <div className="text-xs text-on-dark-muted leading-relaxed">{data.description}</div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-on-dark-muted hover:text-on-dark text-xs flex-shrink-0 mt-0.5 leading-none transition-colors"
        aria-label="Close detail"
      >
        ✕
      </button>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   SHARED GRAPH PROPS
   ───────────────────────────────────────────── */

interface GraphProps {
  reduced:      boolean
  selectedNode: string | null
  flowStep:     string | null
  onSelect:     (id: string | null) => void
}

/* ─────────────────────────────────────────────
   FULL DIAGRAM GRAPH
   Separate component so all 12 motion value hooks
   are always called unconditionally.
   ───────────────────────────────────────────── */

function FullDiagramGraph({ reduced, selectedNode, flowStep, onSelect }: GraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const slackX  = useMotionValue(FULL_INIT.slack.x)
  const slackY  = useMotionValue(FULL_INIT.slack.y)
  const engX    = useMotionValue(FULL_INIT.engine.x)
  const engY    = useMotionValue(FULL_INIT.engine.y)
  const logX    = useMotionValue(FULL_INIT.logic.x)
  const logY    = useMotionValue(FULL_INIT.logic.y)
  const vdbX    = useMotionValue(FULL_INIT.vectordb.x)
  const vdbY    = useMotionValue(FULL_INIT.vectordb.y)
  const crmX    = useMotionValue(FULL_INIT.crm.x)
  const crmY    = useMotionValue(FULL_INIT.crm.y)
  const actX    = useMotionValue(FULL_INIT.action.x)
  const actY    = useMotionValue(FULL_INIT.action.y)

  const mv: Record<string, NodeMV> = {
    slack:    { x: slackX, y: slackY },
    engine:   { x: engX,   y: engY   },
    logic:    { x: logX,   y: logY   },
    vectordb: { x: vdbX,   y: vdbY   },
    crm:      { x: crmX,   y: crmY   },
    action:   { x: actX,   y: actY   },
  }

  const highlight = selectedNode ?? flowStep

  return (
    <div className="font-mono text-xs flex flex-col gap-4">
      <div className="overflow-x-auto">
        <div ref={containerRef} className="relative" style={{ width: 600, height: 410 }}>
          <svg
            className="absolute inset-0 pointer-events-none"
            width="100%"
            height="100%"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            {FULL_CONNS.map(({ from, to }) => (
              <ConnectionLine
                key={`${from}-${to}`}
                fromMV={mv[from]}
                toMV={mv[to]}
                lit={highlight === from || highlight === to}
              />
            ))}
          </svg>

          {FULL_NODES.map((node, i) => (
            <DraggableNode
              key={node.id}
              {...node}
              entryIndex={i}
              reduced={reduced}
              isSelected={selectedNode === node.id}
              isFlowStep={flowStep === node.id}
              onSelect={onSelect}
              pos={mv[node.id]}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: reduced ? 0 : 0.6, ease: EASE_OUT }}
        className="flex items-center gap-5 flex-wrap border-t border-[oklch(22%_0.005_75)] pt-4"
      >
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-ember"
            aria-hidden="true"
            style={{ animation: reduced ? 'none' : 'pulse-ember 2s ease-in-out infinite' }}
          />
          <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">Active</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">Uptime: 99.7%</span>
        <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">Latency: 380ms avg</span>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HERO DIAGRAM GRAPH
   ───────────────────────────────────────────── */

function HeroDiagramGraph({ reduced, selectedNode, flowStep, onSelect }: GraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const slackX = useMotionValue(HERO_INIT.slack.x)
  const slackY = useMotionValue(HERO_INIT.slack.y)
  const engX   = useMotionValue(HERO_INIT.engine.x)
  const engY   = useMotionValue(HERO_INIT.engine.y)
  const actX   = useMotionValue(HERO_INIT.action.x)
  const actY   = useMotionValue(HERO_INIT.action.y)

  const mv: Record<string, NodeMV> = {
    slack:  { x: slackX, y: slackY },
    engine: { x: engX,   y: engY   },
    action: { x: actX,   y: actY   },
  }

  const highlight = selectedNode ?? flowStep

  return (
    <div className="overflow-x-auto font-mono text-xs">
      <div ref={containerRef} className="relative" style={{ width: 600, height: 140 }}>
        <svg
          className="absolute inset-0 pointer-events-none"
          width="100%"
          height="100%"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          {HERO_CONNS.map(({ from, to }) => (
            <ConnectionLine
              key={`${from}-${to}`}
              fromMV={mv[from]}
              toMV={mv[to]}
              lit={highlight === from || highlight === to}
            />
          ))}
        </svg>

        {HERO_NODES.map((node, i) => (
          <DraggableNode
            key={node.id}
            {...node}
            entryIndex={i}
            reduced={reduced}
            isSelected={selectedNode === node.id}
            isFlowStep={flowStep === node.id}
            onSelect={onSelect}
            pos={mv[node.id]}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TECH DIAGRAM (exported component)
   ───────────────────────────────────────────── */

export function TechDiagram({ variant = 'full' }: TechDiagramProps) {
  const reduced = useReducedMotion() ?? false
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [flowStep,     setFlowStep]     = useState<string | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(!reduced)
  const stepRef = useRef(0)

  useEffect(() => {
    const flow = variant === 'full' ? FULL_FLOW : HERO_FLOW
    if (!isAutoPlaying || reduced) { setFlowStep(null); return }

    stepRef.current = 0
    setFlowStep(flow[0])
    const id = setInterval(() => {
      stepRef.current = (stepRef.current + 1) % flow.length
      setFlowStep(flow[stepRef.current])
    }, 950)
    return () => clearInterval(id)
  }, [isAutoPlaying, reduced, variant])

  const handleSelect = useCallback((id: string | null) => {
    setSelectedNode(id)
    if (id !== null) setIsAutoPlaying(false)
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => {
      if (!prev) setSelectedNode(null)
      return !prev
    })
  }, [])

  return (
    <div
      className="bg-soot rounded-xl p-8 md:p-10"
      role="region"
      aria-label="Interactive AI agent architecture diagram"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-[10px] uppercase tracking-[0.12em] text-on-dark-muted">
          Agent Architecture
        </div>
        {!reduced && (
          <button
            type="button"
            onClick={toggleAutoPlay}
            className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-on-dark-muted hover:text-on-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0592A] rounded"
            aria-label={isAutoPlaying ? 'Pause flow animation' : 'Play flow animation'}
          >
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ background: isAutoPlaying ? '#E0592A' : 'oklch(40% 0.005 75)' }}
              aria-hidden="true"
            />
            {isAutoPlaying ? 'Pause' : 'Play flow'}
          </button>
        )}
      </div>

      {variant === 'full' ? (
        <FullDiagramGraph
          reduced={reduced}
          selectedNode={selectedNode}
          flowStep={flowStep}
          onSelect={handleSelect}
        />
      ) : (
        <HeroDiagramGraph
          reduced={reduced}
          selectedNode={selectedNode}
          flowStep={flowStep}
          onSelect={handleSelect}
        />
      )}

      <AnimatePresence>
        {selectedNode && (
          <NodeDetail
            key={selectedNode}
            nodeId={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
