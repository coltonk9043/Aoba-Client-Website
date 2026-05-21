import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
