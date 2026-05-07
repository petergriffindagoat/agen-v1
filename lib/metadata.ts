import type { Metadata } from 'next'
import type { Post, Work } from '@/lib/mdx'

/* =========================================================
   SITE CONFIG
   Single source of truth for all SEO / social metadata.
   ========================================================= */

export const siteConfig = {
  name: 'Perpetual Stack',
  url: 'https://perpetualstack.com',
  description:
    'We build autonomous AI agents that handle support tickets, qualify leads, and process documents — deployed in your existing tools in 3 weeks.',
  tagline: 'AI automation that ships to production',
  ogImage: 'https://perpetualstack.com/og-default.png',
  twitterHandle: '@perpetualstack',
  locale: 'en_US',
} as const

/* =========================================================
   METADATA BUILDER
   Returns a Next.js Metadata object with sensible defaults.
   Pass overrides to customise per-page.
   ========================================================= */

export function buildMetadata(
  overrides: Partial<Metadata> & {
    /** Relative or absolute URL for this page's canonical URL */
    path?: string
    /** Override the OG image URL */
    image?: string
    /** Whether to prevent search-engine indexing */
    noIndex?: boolean
  } = {},
): Metadata {
  const { path = '', image, noIndex, ...rest } = overrides

  const canonicalUrl = path
    ? `${siteConfig.url}/${path.replace(/^\//, '')}`
    : siteConfig.url

  const ogImage = image ?? siteConfig.ogImage

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    ...rest,
  }
}

/* =========================================================
   ARTICLE (BLOG POST) METADATA
   ========================================================= */

export function buildArticleMetadata(post: Post): Metadata {
  const image = `${siteConfig.url}/og/blog/${post.slug}.png`

  return buildMetadata({
    path: `blog/${post.slug}`,
    image,
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
  } as Partial<Metadata> & { path?: string; image?: string })
}

/* =========================================================
   JSON-LD STRUCTURED DATA HELPERS
   Import and render in a <script type="application/ld+json">
   tag inside page components for rich search results.
   ========================================================= */

/** Organization schema — used in the site root and about page. */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      `https://twitter.com/${siteConfig.twitterHandle.replace('@', '')}`,
      `https://linkedin.com/company/perpetual-stack`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@perpetualstack.com',
    },
  }
}

/** Article schema — used on individual blog post pages. */
export function getArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    image: `${siteConfig.url}/og/blog/${post.slug}.png`,
    wordCount: Math.round(post.readingTime * 200), // ~200 wpm
    timeRequired: `PT${Math.ceil(post.readingTime)}M`,
  }
}

/** Service schema — used on service/offering pages. */
export function getServiceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Automation',
  }
}

/** BreadcrumbList schema — useful for nested pages. */
export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}/${item.path.replace(/^\//, '')}`,
    })),
  }
}
