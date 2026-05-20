import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.perpetualstack.co'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /* ── Static routes ─────────────────────────────────────────── */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/ai-agents`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/workflow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/integrations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  /* ── Dynamic blog posts ────────────────────────────────────── */
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const { getAllPosts } = await import('@/lib/mdx')
    const posts = await getAllPosts()
    blogRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // Content directory may not exist yet — skip gracefully
  }

  /* ── Dynamic work / case studies ──────────────────────────── */
  let workRoutes: MetadataRoute.Sitemap = []
  try {
    const { getAllWork } = await import('@/lib/mdx')
    const work = await getAllWork()
    workRoutes = work.map((item) => ({
      url: `${BASE_URL}/work/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // Content directory may not exist yet — skip gracefully
  }

  return [...staticRoutes, ...blogRoutes, ...workRoutes]
}
