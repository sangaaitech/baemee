// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

// const withPWA = require('next-pwa')({
//   dest: 'public',
// });
// const prod = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig = {
  images: {
    domains: ['https://unsplash.com', 'source.unsplash.com', 'https://images.unsplash.com'],
    formats: ['image/webp'],
  },
  // pwa: {
  //   dest: 'public',
  // },
};

module.exports = nextConfig;
// module.exports = withPWA(
//       {
//         pwa: {
//           dest: 'public',
//           disable: prod ? false : true,
//         },
//       },
//       nextConfig,
//     )
