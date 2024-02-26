/** @type {import('next').NextConfig} */

module.exports = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: ['i.imgur.com'],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ptzt',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/tomasmillandev',
        permanent: true,
      }
    ]
  },

}