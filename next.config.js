/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'public155826-maxdev.s3.eu-west-1.amazonaws.com',
            port: '',
            pathname: '/public/**',
          },
        ],
    },
}

module.exports = nextConfig
