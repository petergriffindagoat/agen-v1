import { getAllPosts, getFeaturedPost } from '@/lib/mdx'
import { PostCard } from '@/components/blog/post-card'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/layout/container'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Perpetual Stack',
  description:
    'Dispatches on AI automation, agent architecture, and shipping AI to production.',
  path: '/blog',
})

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

/** Convert a numeric reading-time (minutes) to a display string. */
function formatReadingTime(minutes: number): string {
  const rounded = Math.max(1, Math.ceil(minutes))
  return `${rounded} min read`
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([getAllPosts(), getFeaturedPost()])
  const regularPosts = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="section-light pt-40 pb-16" aria-labelledby="blog-heading">
        <Container>
          <Reveal>
            <p className="overline text-ember">BLOG</p>
            <h1
              id="blog-heading"
              className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite mt-4 max-w-[16ch]"
            >
              Dispatches from the stack
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* ── FEATURED POST ─────────────────────────── */}
      {featured && (
        <section className="section-light pt-0 pb-8">
          <Container>
            <Reveal>
              <PostCard
                title={featured.title}
                excerpt={featured.excerpt}
                date={featured.date}
                tag={featured.tag}
                slug={featured.slug}
                readingTime={formatReadingTime(featured.readingTime)}
                featured={true}
              />
            </Reveal>
          </Container>
        </section>
      )}

      {/* ── POST GRID ─────────────────────────────── */}
      {regularPosts.length > 0 && (
        <section className="section-light pt-8 pb-32">
          <Container>
            <RevealStagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <RevealItem key={post.slug}>
                    <PostCard
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      tag={post.tag}
                      slug={post.slug}
                      readingTime={formatReadingTime(post.readingTime)}
                    />
                  </RevealItem>
                ))}
              </div>
            </RevealStagger>
          </Container>
        </section>
      )}

      {/* Empty state when no posts exist yet */}
      {posts.length === 0 && (
        <section className="section-light pt-8 pb-32">
          <Container>
            <p className="font-body text-base text-muted">
              Posts coming soon.
            </p>
          </Container>
        </section>
      )}
    </>
  )
}
