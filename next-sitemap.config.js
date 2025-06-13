/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://designuix.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/admin/*'],
};
