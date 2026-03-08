import { writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = (process.env.SITE_URL ?? "https://moritzreis.dev").replace(
  /\/+$/,
  "",
);

const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];

const distPath = path.resolve(process.cwd(), "dist");
const lastmod = new Date().toISOString().split("T")[0];

const toAbsoluteUrl = (routePath) =>
  routePath === "/" ? SITE_URL : `${SITE_URL}${routePath}`;

const sitemapBody = ROUTES.map(
  ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${toAbsoluteUrl(routePath)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapBody}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await Promise.all([
  writeFile(path.join(distPath, "sitemap.xml"), sitemapXml, "utf8"),
  writeFile(path.join(distPath, "robots.txt"), robotsTxt, "utf8"),
]);
