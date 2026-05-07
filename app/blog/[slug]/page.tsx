import { getPost, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { PostHeader } from '@/components/blog/post-header'
import { AuthorBio } from '@/components/blog/author-bio'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { PostCard } from '@/components/blog/post-card'
import { CtaSection } from '@/components/blocks/cta-section'
import { Container } from '@/components/layout/container'
import { buildArticleMetadata, getArticleSchema } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

/** Convert a numeric reading-time (minutes) to a display string. */
function formatReadingTime(minutes: number): string {
  const rounded = Math.max(1, Math.ceil(minutes))
  return `${rounded} min read`
}

/**
 * Extract ## and ### headings from a raw MDX string.
 * Returns { id, text, level } objects suitable for TableOfContents.
 */
function extractHeadings(
  content: string,
): Array<{ id: string; text: string; level: 2 | 3 }> {
  const lines = content.split('\n')
  return lines
    .filter((l) => l.startsWith('## ') || l.startsWith('### '))
    .map((l) => {
      const level = l.startsWith('### ') ? 3 : 2
      const text = l.replace(/^#{2,3}\s/, '')
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      return { id, text, level: level as 2 | 3 }
    })
}

/* ─────────────────────────────────────────────
   STATIC PARAMS
   ───────────────────────────────────────────── */

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    return buildArticleMetadata(post)
  } catch {
    return {}
  }
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  const allPosts = await getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)
  const headings = extractHeadings(post.content)

  return (
    <>
      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleSchema(post)),
        }}
      />

      {/* ── ARTICLE HEADER ────────────────────────── */}
      <section className="section-light pt-40 pb-12">
        <Container size="content">
          <PostHeader
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            tag={post.tag}
            readingTime={formatReadingTime(post.readingTime)}
            author={post.author}
            authorAvatar={post.authorAvatar}
          />
        </Container>
      </section>

      {/* ── ARTICLE BODY + TOC SIDEBAR ─────────────── */}
      <section className="section-light pt-0 pb-24">
        <Container size="wide">
          <div className="flex gap-16">
            {/* Main article */}
            <article className="min-w-0 flex-1 max-w-[40rem] prose-article">
              <MDXRemote source={post.content} />
              <AuthorBio
                name={post.author}
                bio="Engineer at Perpetual Stack. Building AI systems that survive contact with production."
              />
            </article>

            {/* TOC Sidebar */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents headings={headings} />
              </aside>
            )}
          </div>
        </Container>
      </section>

      {/* ── RELATED POSTS ─────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="section-light pt-0 pb-16 border-t border-[oklch(85%_0.005_75)]">
          <Container>
            <p className="overline text-ember mb-8">KEEP READING</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <PostCard
                  key={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  tag={p.tag}
                  slug={p.slug}
                  readingTime={formatReadingTime(p.readingTime)}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  )
}
