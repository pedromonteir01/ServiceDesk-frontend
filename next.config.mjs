const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'bflow.s3.us-east-2.amazonaws.com',
              port: '',
              pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '15mb',
        },
    },
};

export default nextConfig;