const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'bflow.s3.us-east-2.amazonaws.com',
              port: '',
              pathname: '/**',
            },
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