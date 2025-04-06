// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://archanaclinic.vercel.app',
  generateRobotsTxt: true,
  outDir: './public', // 🔥 this is required for Vercel hosting
};
