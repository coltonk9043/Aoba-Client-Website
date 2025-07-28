import createMDX from '@next/mdx'
 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
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
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
