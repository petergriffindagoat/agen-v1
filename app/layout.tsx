import type { Metadata } from 'next'
import { instrumentSerif, jetbrainsMono, generalSans } from '@/lib/fonts'
import { buildMetadata, getOrganizationSchema } from '@/lib/metadata'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

export const metadata: Metadata = buildMetadata({})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${generalSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
      </head>
      <body className="bg-chalk text-graphite font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[200] focus-visible:px-4 focus-visible:py-2 focus-visible:bg-volt focus-visible:text-graphite focus-visible:rounded-md focus-visible:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
