/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Keep existing static files accessible
      {
        source: '/admin.html',
        destination: '/admin',
      },
      {
        source: '/dashboard.html', 
        destination: '/dashboard',
      },
      {
        source: '/login.html',
        destination: '/login',
      },
      {
        source: '/register.html',
        destination: '/register',
      },
      {
        source: '/marketplace.html',
        destination: '/marketplace',
      },
      {
        source: '/pricing.html',
        destination: '/pricing',
      },
    ]
  },
}

module.exports = nextConfig