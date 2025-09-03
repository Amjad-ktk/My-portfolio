/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages and other static hosts
  output: 'export',
  trailingSlash: true,
  
  // Image optimization settings for static export
  images: {
    unoptimized: true
  },
  
  // Build optimizations
  swcMinify: true,
  
  // Disable experimental features for stability
  experimental: {
    // optimizeCss: true, // Commented out due to build issues
  }
}

module.exports = nextConfig
