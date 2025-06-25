module.exports = {
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://www.twitch.tv/eohillinois",
        permanent: true,
      },
      {
        source: '/guide',
        destination: '/guide.pdf',
        permanent: true,
      }
    ]
  },
}
