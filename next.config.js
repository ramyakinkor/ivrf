// rewrite rules should be removed on publishing
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ivrfootage.com/api/:path*',
      },
    ];
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  
}
