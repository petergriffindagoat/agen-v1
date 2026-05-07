import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: '/Users/mrnadaf/Desktop/agen/site-v2',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'perpetualstack.com',
      },
    ],
  },

  // next-mdx-remote handles MDX at runtime; no experimental.mdxRs needed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

export default nextConfig
