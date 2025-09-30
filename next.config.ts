import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    additionalData: '@use "variables" as *;',
    sassOptions: {
        includePaths: [path.join(__dirname, '/public/styles')],
        additionalData: `
        @use "variables" as *;
        @use "mixins" as *;
        `,
    },
};

export default nextConfig;
