/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ['image/webp'], // Disable AVIF support by removing 'image/avif'
    },
};

module.exports = nextConfig;
