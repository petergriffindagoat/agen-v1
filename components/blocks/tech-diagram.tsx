'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export type TechDiagramVariant = 'hero' | 'full'

interface TechDiagramProps {
  variant?: TechDiagramVariant
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const ARCHITECTURE_DATA = {
  hero: [
    { id: 'input',  label: 'User Intent',      icon: 'User',    x: 10, y: 50, description: 'Raw natural language input captured from various sources and channels.' },
    { id: 'brain',  label: 'AI Agent Brain',   icon: 'Cpu',     x: 50, y: 50, description: 'The reasoning core utilizing LLMs to plan, decide, and orchestrate actions.' },
    { id: 'output', label: 'Actionable Result', icon: 'Zap',    x: 90, y: 50, description: 'The final synthesized response or executed system change delivered instantly.' },
  ],
  full: [
    { id: 'source',       label: 'Input Source',    icon: 'MessageSquare', x: 10, y: 30, description: 'Omni-channel inputs including API calls, chat, and webhooks.' },
    { id: 'parsing',      label: 'Semantic Parser', icon: 'Filter',        x: 30, y: 30, description: 'Extracts entities and intent using specialized embedding models.' },
    { id: 'orchestrator', label: 'Orchestrator',    icon: 'Layers',        x: 50, y: 50, description: 'Main controller managing state, history, and task decomposition.' },
    { id: 'memory',       label: 'Vector Memory',   icon: 'Database',      x: 50, y: 18, description: 'Long-term retrieval-augmented generation (RAG) storage.' },
    { id: 'tools',        label: 'Tool Registry',   icon: 'Wrench',        x: 70, y: 70, description: 'Dynamic execution of external APIs, functions, and scripts.' },
    { id: 'llm',          label: 'LLM Engine',      icon: 'Activity',      x: 70, y: 30, description: 'High-parameter reasoning models — GPT-4, Claude 3, Llama 3.' },
    { id: 'output',       label: 'Execution',       icon: 'CheckCircle',   x: 90, y: 50, description: 'The finalized output delivered back to the system or user.' },
  ],
}

const CONNECTIONS = {
  hero: [
    { from: 'input', to: 'brain'  },
    { from: 'brain', to: 'output' },
  ],
  full: [
    { from: 'source',       to: 'parsing'      },
    { from: 'parsing',      to: 'orchestrator' },
    { from: 'orchestrator', to: 'memory'       },
    { from: 'memory',       to: 'orchestrator' },
    { from: 'orchestrator', to: 'llm'          },
    { from: 'llm',          to: 'orchestrator' },
    { from: 'orchestrator', to: 'tools'        },
    { from: 'tools',        to: 'output'       },
    { from: 'llm',          to: 'output'       },
  ],
}

/* ─────────────────────────────────────────────
   INLINE ICON SET
   ───────────────────────────────────────────── */

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    User:          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
    Cpu:           <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM10 8V4M14 8V4M10 16v4M14 16v4M20 10h4M20 14h4M0 10h4M0 14h4" />,
    Zap:           <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    MessageSquare: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    Filter:        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
    Layers:        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    Database:      (<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>),
    Wrench:        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    Activity:      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    CheckCircle:   (<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>),
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[name] ?? icons.User}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   MOBILE PIPELINE FLOW
   Clean vertical timeline — tap a node to expand.
   ───────────────────────────────────────────── */

type NodeDef = (typeof ARCHITECTURE_DATA)['full'][number]

function MobileLayout({
  nodes,
  selectedNode,
  onSelect,
}: {
  nodes: NodeDef[]
  selectedNode: string | null
  onSelect: (id: string | null) => void
}) {
  return (
    <div className="font-mono select-none">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.14em] text-on-dark-muted">
          Agent Architecture
        </p>
        <span className="text-[9px] uppercase tracking-[0.12em] text-on-dark-muted opacity-50">
          tap to explore
        </span>
      </div>

      {/* Timeline */}
      <div className="px-5 pb-2">
        {nodes.map((node, i) => {
          const isSelected = selectedNode === node.id
          const isLast = i === nodes.length - 1

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3"
            >
              {/* Left: icon + connector line */}
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: 44 }}>
                <button
                  type="button"
                  onClick={() => onSelect(isSelected ? null : node.id)}
                  className={[
                    'w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember z-10',
                    isSelected
                      ? 'bg-ember text-on-dark shadow-[0_0_20px_rgba(79,70,229,0.45)]'
                      : 'bg-[#1a1a1a] text-on-dark-muted border border-[oklch(28%_0.005_75)] hover:border-ember/50 hover:text-on-dark',
                  ].join(' ')}
                  aria-pressed={isSelected}
                  aria-label={node.label}
                >
                  <Icon name={node.icon} className="w-4.5 h-4.5" />
                </button>
                {!isLast && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{
                      minHeight: 20,
                      background: isSelected
                        ? 'linear-gradient(to bottom, rgba(79,70,229,0.6), rgba(79,70,229,0.12))'
                        : 'oklch(25% 0.005 75)',
                    }}
                  />
                )}
              </div>

              {/* Right: label + expandable description */}
              <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-1'}`}>
                <button
                  type="button"
                  onClick={() => onSelect(isSelected ? null : node.id)}
                  className="w-full text-left py-2.5 focus:outline-none"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={[
                        'text-[10px] uppercase tracking-[0.1em] font-mono transition-colors duration-200',
                        isSelected ? 'text-ember' : 'text-on-dark',
                      ].join(' ')}
                    >
                      {node.label}
                    </span>
                    <span
                      className="text-[8px] text-on-dark-muted transition-transform duration-200 leading-none"
                      style={{ transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[10px] text-on-dark-muted leading-relaxed font-mono pb-3 pr-2">
                        {node.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Status footer */}
      <div
        className="mx-5 mt-3 mb-5 pt-4 flex items-center gap-3"
        style={{ borderTop: '1px solid oklch(22% 0.005 75)' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0"
          style={{ animation: 'pulse-ember 2s ease-in-out infinite' }}
          aria-hidden="true"
        />
        <span className="text-[9px] uppercase tracking-[0.12em] text-on-dark font-mono">Active Pipeline</span>
        <div className="h-3 w-px bg-[oklch(30%_0.005_75)]" />
        <span className="text-[9px] uppercase tracking-[0.12em] text-on-dark-muted font-mono">42ms avg</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TECH DIAGRAM
   ───────────────────────────────────────────── */

export function TechDiagram({ variant = 'full' }: TechDiagramProps) {
  const nodes = ARCHITECTURE_DATA[variant]
  const connections = CONNECTIONS[variant]
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedNode(null) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div
      className="w-full bg-soot rounded-xl border border-[oklch(28%_0.005_75)] overflow-hidden"
      role="region"
      aria-label="Interactive AI agent architecture diagram"
    >
      {/* ── Mobile: accordion list ── */}
      <div className="md:hidden">
        <MobileLayout nodes={nodes} selectedNode={selectedNode} onSelect={setSelectedNode} />
      </div>

      {/* ── Desktop: interactive graph ── */}
      <div
        className="relative hidden md:block h-[580px] select-none"
        onClick={() => setSelectedNode(null)}
      >
        {/* Dot-grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(168,163,156,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ember ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-ember/[0.06] blur-[110px] pointer-events-none" />

        {/* SVG connection layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="connGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(79,70,229,0.12)" />
              <stop offset="50%"  stopColor="rgba(129,140,248,0.42)" />
              <stop offset="100%" stopColor="rgba(55,48,163,0.12)" />
            </linearGradient>
            <filter id="emberGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.7" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {connections.map((conn, idx) => {
            const fromNode = nodes.find(n => n.id === conn.from)
            const toNode   = nodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const mx = (fromNode.x + toNode.x) / 2
            const path = `M ${fromNode.x} ${fromNode.y} C ${mx} ${fromNode.y}, ${mx} ${toNode.y}, ${toNode.x} ${toNode.y}`
            const duration = 2.8 + (idx % 4) * 0.6

            return (
              <g key={`conn-${idx}`}>
                <motion.path
                  id={`conn-path-${idx}`}
                  d={path}
                  fill="none"
                  stroke="url(#connGradient)"
                  strokeWidth="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: idx * 0.08, ease: 'easeInOut' }}
                />
                <circle r="0.65" fill="#4F46E5" filter="url(#emberGlow)">
                  <animateMotion
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    begin={`${idx * 0.45}s`}
                  >
                    <mpath href={`#conn-path-${idx}`} />
                  </animateMotion>
                </circle>
              </g>
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: i * 0.08 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {/* Popover */}
              <AnimatePresence>
                {selectedNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.94 }}
                    animate={{ opacity: 1, y: -84, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.94 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 z-50 w-56 p-4 rounded-lg bg-[#1e1e1e] border border-[oklch(32%_0.005_75)] shadow-[0_16px_40px_rgba(0,0,0,0.55)] pointer-events-auto"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-ember/10 text-ember flex-shrink-0">
                        <Icon name={node.icon} className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-on-dark font-mono leading-tight">
                        {node.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-on-dark-muted leading-relaxed font-mono">
                      {node.description}
                    </p>
                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e1e1e] border-r border-b border-[oklch(32%_0.005_75)] rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Node button */}
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation()
                  setSelectedNode(selectedNode === node.id ? null : node.id)
                }}
                className="relative flex flex-col items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-xl"
                aria-pressed={selectedNode === node.id}
                aria-label={node.label}
              >
                <div
                  className={[
                    'w-[60px] h-[60px] rounded-xl flex items-center justify-center transition-all duration-[250ms]',
                    selectedNode === node.id
                      ? 'bg-ember text-on-dark scale-110 shadow-[0_0_22px_rgba(79,70,229,0.45)]'
                      : 'bg-[#1e1e1e] text-on-dark-muted border border-[oklch(30%_0.005_75)] hover:border-ember/60 hover:text-on-dark hover:scale-105 hover:shadow-[0_0_14px_rgba(79,70,229,0.22)]',
                  ].join(' ')}
                >
                  <Icon name={node.icon} className="w-[26px] h-[26px]" />
                </div>
                <span
                  className={[
                    'text-[9px] uppercase tracking-[0.12em] whitespace-nowrap font-mono transition-colors duration-200',
                    selectedNode === node.id
                      ? 'text-ember'
                      : 'text-on-dark-muted group-hover:text-on-dark',
                  ].join(' ')}
                >
                  {node.label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end pointer-events-none">
          <div className="bg-[#191919]/90 backdrop-blur-sm border border-[oklch(28%_0.005_75)] px-3 py-2.5 rounded-lg pointer-events-auto">
            <p className="text-[9px] uppercase tracking-[0.12em] text-on-dark-muted mb-1.5 font-mono">
              System Status
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-ember"
                  style={{ animation: 'pulse-ember 2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                <span className="text-[11px] text-on-dark font-mono">Active Pipeline</span>
              </div>
              <div className="h-3 w-px bg-[oklch(30%_0.005_75)]" />
              <span className="text-[9px] uppercase tracking-[0.12em] text-on-dark-muted font-mono">
                42ms avg
              </span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-on-dark font-display text-lg font-semibold tracking-tight leading-tight">
              Agent Architecture
            </p>
            <p className="text-[9px] uppercase tracking-[0.12em] text-on-dark-muted font-mono">
              Cognitive Pipeline v4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
