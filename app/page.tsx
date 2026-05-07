import { Hero } from '@/components/blocks/hero'
import { LogoBar } from '@/components/blocks/logo-bar'
import { ServicesGrid } from '@/components/blocks/services-grid'
import { ProcessSteps } from '@/components/blocks/process-steps'
import { TechStackSection } from '@/components/blocks/tech-stack-section'
import { StatsBar } from '@/components/blocks/stats-bar'
import { Testimonials } from '@/components/blocks/testimonials'
import { CtaSection } from '@/components/blocks/cta-section'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Perpetual Stack — AI Automation That Ships to Production',
  description:
    'We build autonomous AI agents that handle support tickets, qualify leads, and process documents — deployed in your existing tools in 3 weeks.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesGrid />       {/* section-light, id="what-we-build" */}
      <ProcessSteps />       {/* section-tinted, id="how-it-works" */}
      <TechStackSection />   {/* section-light, id="the-stack" */}
      <StatsBar />           {/* section-dark */}
      <Testimonials />       {/* section-light */}
      <CtaSection />         {/* section-tinted */}
    </>
  )
}
