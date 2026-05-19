'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   LOGO SVG
   ───────────────────────────────────────────── */

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width="24"
      height="24"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19"
            stroke="currentColor" strokeWidth="1.58" strokeLinejoin="miter" strokeLinecap="square"/>
      <rect x="9.15" y="6.11" width="8.74" height="8.74"
            stroke="currentColor" strokeWidth="1.58" strokeLinejoin="miter" strokeLinecap="square"/>
      <line x1="2.5" y1="2.5" x2="9.15" y2="6.11"
            stroke="currentColor" strokeWidth="1.58" strokeLinecap="butt"/>
      <line x1="21.5" y1="2.5" x2="17.89" y2="6.11"
            stroke="currentColor" strokeWidth="1.58" strokeLinecap="butt"/>
      <line x1="21.5" y1="21.5" x2="17.89" y2="14.85"
            stroke="currentColor" strokeWidth="1.58" strokeLinecap="butt"/>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   SERVICES DROPDOWN DATA
   ───────────────────────────────────────────── */

const serviceItems = [
  {
    title: 'AI agents',
    description: 'Custom agents that handle real work autonomously',
    href: '/services/ai-agents',
  },
  {
    title: 'Workflow automation',
    description: 'End-to-end process orchestration',
    href: '/services/workflow',
  },
  {
    title: 'Platform integrations',
    description: 'Connect your existing tools to AI',
    href: '/services/integrations',
  },
]

/* ─────────────────────────────────────────────
   SERVICES DROPDOWN PANEL
   ───────────────────────────────────────────── */

interface ServicesDropdownProps {
  open: boolean
  onClose: () => void
}

function ServicesDropdown({ open, onClose }: ServicesDropdownProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, onClose])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[calc(100%+8px)] left-0 z-[110] min-w-[280px] bg-chalk rounded-lg shadow-lg border border-[oklch(78%_0.008_75)] p-6"
          role="menu"
          aria-label="Services menu"
        >
          <p className="overline mb-4">WHAT WE BUILD</p>
          <ul className="space-y-4">
            {serviceItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block"
                  role="menuitem"
                  onClick={onClose}
                >
                  <span className="block text-sm font-semibold text-graphite group-hover:text-ember transition-colors duration-100">
                    {item.title}
                  </span>
                  <span className="block text-xs text-subtle mt-0.5">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-[oklch(78%_0.008_75)]">
            <Link
              href="/services"
              className="text-sm font-medium text-ember hover:text-ember-dim transition-colors duration-100"
              onClick={onClose}
            >
              View all services →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   MOBILE PANEL
   ───────────────────────────────────────────── */

interface MobilePanelProps {
  open: boolean
  onClose: () => void
  pathname: string
}

function MobilePanel({ open, onClose, pathname }: MobilePanelProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[98] bg-graphite/40"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[99] w-[75vw] max-w-[320px] bg-chalk shadow-lg flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[oklch(78%_0.008_75)]">
              <Link href="/" onClick={onClose} className="flex items-center gap-3" aria-label="Perpetual Stack home">
                <LogoMark className="text-ember" />
                <span className="font-display text-sm font-normal tracking-wide text-graphite">
                  Perpetual Stack
                </span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-11 h-11 flex items-center justify-center rounded-md hover:bg-paper/60 transition-colors duration-100 -mr-2"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-8 space-y-1" aria-label="Mobile navigation links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'block py-3 text-base font-medium transition-colors duration-100 border-b border-[oklch(78%_0.008_75)]',
                      isActive ? 'text-ember' : 'text-graphite hover:text-ember',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="px-6 pb-8">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-volt text-graphite font-semibold text-sm tracking-wide px-4 py-3 rounded-md hover:bg-volt-hover transition-colors duration-100"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   HAMBURGER ICON
   ───────────────────────────────────────────── */

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="transition-all duration-200"
    >
      {open ? (
        <>
          <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      ) : (
        <>
          <rect x="1" y="4" width="18" height="1.75" rx="0.875" fill="currentColor" />
          <rect x="1" y="9.125" width="18" height="1.75" rx="0.875" fill="currentColor" />
          <rect x="1" y="14.25" width="18" height="1.75" rx="0.875" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   MAIN NAVBAR
   ───────────────────────────────────────────── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  // Track scroll position
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const closeServices = useCallback(() => setServicesOpen(false), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <header role="banner">
      <nav
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-6 transition-all duration-200 ease-out',
          scrolled
            ? 'py-3 bg-chalk/95 backdrop-blur-md border-b border-subtle'
            : 'py-4 bg-chalk/85 backdrop-blur-md',
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Perpetual Stack home"
        >
          <LogoMark className="text-ember" />
          <span className="hidden lg:block font-display text-sm font-normal tracking-wide text-graphite">
            Perpetual Stack
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {/* Services dropdown trigger */}
          <li className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={(e) => {
                // Only close if not moving into dropdown
                const related = e.relatedTarget as Node | null
                if (servicesRef.current && !servicesRef.current.contains(related)) {
                  setServicesOpen(false)
                }
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors duration-100',
                pathname.startsWith('/services') ? 'text-ember' : 'text-graphite hover:text-ember',
              )}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={cn('transition-transform duration-150', servicesOpen && 'rotate-180')}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Keep dropdown interactive on hover */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <ServicesDropdown open={servicesOpen} onClose={closeServices} />
            </div>
          </li>

          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-100',
                    isActive ? 'text-ember' : 'text-graphite hover:text-ember',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-volt text-graphite font-semibold text-sm tracking-wide px-4 py-2 rounded-md hover:bg-volt-hover hover:-translate-y-px active:translate-y-0 transition-all duration-100"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-md hover:bg-paper/60 transition-colors duration-100 -mr-2 text-graphite"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile panel */}
      <div id="mobile-nav-panel">
        <MobilePanel open={mobileOpen} onClose={closeMobile} pathname={pathname} />
      </div>
    </header>
  )
}
