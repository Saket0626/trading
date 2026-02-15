/**
 * Generates sitemap.xml for Chartwise.
 * Run: npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync } from "fs";
import { LEVELS, MODULES } from "../src/data/curriculum";
import { getLessonById } from "../src/data/lessons";

const BASE_URL = "https://www.chartwise.info";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

const urls: string[] = [];

// Static routes
urls.push(`${BASE_URL}/`);
urls.push(`${BASE_URL}/learn`);
urls.push(`${BASE_URL}/warnings`);
urls.push(`${BASE_URL}/simulator`);
urls.push(`${BASE_URL}/tools`);
urls.push(`${BASE_URL}/progress`);
urls.push(`${BASE_URL}/trade`);
urls.push(`${BASE_URL}/glossary`);
urls.push(`${BASE_URL}/search`);
urls.push(`${BASE_URL}/donations`);

// Level index pages
for (const level of LEVELS) {
  urls.push(`${BASE_URL}/learn/${level.id}`);
}

// Module and lesson pages
for (const module of MODULES) {
  urls.push(`${BASE_URL}/learn/${module.level}/${module.slug}`);
  for (const lessonId of module.lessonIds) {
    const lesson = getLessonById(lessonId);
    if (lesson) {
      urls.push(`${BASE_URL}/learn/${module.level}/${module.slug}/${lesson.slug}`);
    }
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === BASE_URL + "/" ? "1.0" : url.includes("/learn/") && url.split("/").length === 6 ? "0.8" : "0.9"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
