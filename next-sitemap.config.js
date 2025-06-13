/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://designuix.com', // your live domain
  generateRobotsTxt: true, // will generate robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/admin/*'], // optional
};
