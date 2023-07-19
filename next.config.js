/** @type {import('next').NextConfig} */

module.exports = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  reactStrictMode: true,
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
        source: '/twitter',
        destination: 'https://twitter.com/millantomas_',
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