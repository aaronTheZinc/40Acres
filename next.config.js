/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
              pathname: '/**', // This allows any path from images.pexels.com
            },
          ],
    }
};

export default config;