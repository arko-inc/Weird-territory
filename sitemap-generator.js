import fs from 'fs';
import path from 'path';

// Define all the routes manually or dynamically
const routes = [
  '/',
  '/blogs',
  '/blogs/mars-colonization',
  '/blogs/:pageLink', // Use dynamic parameters like ":pageLink" if necessary
];

// Function to generate XML sitemap
const generateSitemap = (routes) => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://weird-territory.vercel.app${route}</loc>\n`;  // Replace with your actual domain
    sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`; // You can adjust frequency if needed
    sitemap += `    <priority>0.8</priority>\n`; // You can adjust priority if needed
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>\n`;

  return sitemap;
};

// Generate the sitemap
const sitemap = generateSitemap(routes);

// Write the sitemap to a file
fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemap, 'utf8');

console.log('Sitemap has been generated!');
