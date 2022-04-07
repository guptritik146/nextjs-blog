module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const isProd = process.env.NODE_ENV === 'production';
  const path = require('path');
  const nextConfig = {
    assetPrefix: isProd ? 'https://vyaparwebfiles.vypcdn.in/js/next-pages' : '',
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      cssModules: true,
    },
  };

  return nextConfig;
};
