/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['bflow.s3.us-east-2.amazonaws.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'example.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb',
        },
    },
};

export default nextConfig;
