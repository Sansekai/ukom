/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'otakudesu.cloud',
      },
      {
        hostname: 'animekita.org',
      },
      {
        hostname: 'image.tmdb.org',
      }
    ],
  },
};

export default nextConfig;
