import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

/* =========================================================
   DIRECTORY CONSTANTS
   ========================================================= */

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const WORK_DIR = path.join(process.cwd(), 'content', 'work')

/* =========================================================
   TYPES
   ========================================================= */

/** Front-matter shape for blog posts */
export interface PostFrontmatter {
  /** Post title */
  title: string
  /** Short summary shown in cards and meta description */
  excerpt: string
  /** ISO 8601 date string, e.g. "2025-03-15" */
  date: string
  /** Author display name */
  author: string
  /** Optional path or URL to author avatar image */
  authorAvatar?: string
  /** Topic tag shown as a pill/badge */
  tag: string
  /** URL slug — inferred from filename if omitted */
  slug: string
  /** If true, surfaced in featured positions */
  featured?: boolean
}

/** Full blog post object including computed fields */
export interface Post extends PostFrontmatter {
  /** Estimated reading time in minutes (from reading-time package) */
  readingTime: number
  /** Raw MDX string, ready to be passed to next-mdx-remote */
  content: string
}

/** Metric entry for a case study */
export interface WorkMetric {
  label: string
  value: string
  unit?: string
}

/** Front-matter shape for case study / work entries */
export interface WorkFrontmatter {
  /** Project / client title */
  title: string
  /** Short description shown in cards */
  excerpt: string
  /** ISO 8601 completion/publish date */
  date: string
  /** Industry vertical, e.g. "FinTech", "HealthTech" */
  industry: string
  /** Service delivered, e.g. "AI Support Agent", "Lead Qualification" */
  service: string
  /** Headline metrics to display in the case study header */
  metrics: WorkMetric[]
  /** If true, shown in featured positions on the homepage */
  featured?: boolean
}

/** Full case study object */
export interface Work extends WorkFrontmatter {
  /** URL slug derived from filename */
  slug: string
  /** Raw MDX string */
  content: string
}

/* =========================================================
   INTERNAL HELPERS
   ========================================================= */

/** Ensure a directory exists; return an empty array if not. */
function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir)
  } catch {
    return []
  }
}

/** Read an MDX file and parse front-matter + content. */
function readMdxFile(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { data: data as Record<string, unknown>, content }
}

/** Derive slug from filename (strip .mdx extension). */
function slugFromFile(filename: string): string {
  return filename.replace(/\.mdx?$/, '')
}

/* =========================================================
   BLOG POST FUNCTIONS
   ========================================================= */

/**
 * Read and return a single blog post by slug.
 *
 * @throws If the file does not exist.
 */
export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const { data, content } = readMdxFile(filePath)

  const stats = readingTime(content)

  return {
    title: (data.title as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    date: (data.date as string) ?? '',
    author: (data.author as string) ?? 'Perpetual Stack',
    authorAvatar: (data.authorAvatar as string | undefined),
    tag: (data.tag as string) ?? 'General',
    slug: (data.slug as string) ?? slug,
    featured: (data.featured as boolean | undefined) ?? false,
    readingTime: stats.minutes,
    content,
  }
}

/**
 * Return all blog posts sorted newest-first.
 */
export async function getAllPosts(): Promise<Post[]> {
  const files = safeReadDir(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))

  const posts = await Promise.all(
    files.map((file) => getPost(slugFromFile(file))),
  )

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

/**
 * Return the first post marked as featured, or null if none exist.
 */
export async function getFeaturedPost(): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.find((p) => p.featured) ?? null
}

/* =========================================================
   CASE STUDY / WORK FUNCTIONS
   ========================================================= */

/**
 * Read and return a single case study by slug.
 *
 * @throws If the file does not exist.
 */
export async function getWork(slug: string): Promise<Work> {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`)
  const { data, content } = readMdxFile(filePath)

  return {
    title: (data.title as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    date: (data.date as string) ?? '',
    industry: (data.industry as string) ?? '',
    service: (data.service as string) ?? '',
    metrics: (data.metrics as WorkMetric[]) ?? [],
    featured: (data.featured as boolean | undefined) ?? false,
    slug,
    content,
  }
}

/**
 * Return all case studies sorted newest-first.
 */
export async function getAllWork(): Promise<Work[]> {
  const files = safeReadDir(WORK_DIR).filter((f) => /\.mdx?$/.test(f))

  const work = await Promise.all(
    files.map((file) => getWork(slugFromFile(file))),
  )

  return work.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

/**
 * Return all case studies marked as featured.
 */
export async function getFeaturedWork(): Promise<Work[]> {
  const work = await getAllWork()
  return work.filter((w) => w.featured)
}
