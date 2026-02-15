/**
 * Generates sitemap.xml for Chartwise.
 * Run: npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync } from "fs";
import { LEVELS, MODULES } from "../src/data/curriculum";
import { getLessonById } from "../src/data/lessons";

const BASE_URL = "https://www.chartwise.info";

const esc: Record<string, string> = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" };
const escapeXml = (s: string) => s.replace(/[<>&'"]/g, (c) => esc[c] ?? c);

const urls: string[] = [
  ...["", "/learn", "/warnings", "/simulator", "/tools", "/progress", "/trade", "/glossary", "/search", "/donations"].map((p) => BASE_URL + (p || "/")),
];
for (const level of LEVELS) urls.push(`${BASE_URL}/learn/${level.id}`);
for (const m of MODULES) {
  urls.push(`${BASE_URL}/learn/${m.level}/${m.slug}`);
  for (const id of m.lessonIds) {
    const lesson = getLessonById(id);
    if (lesson) urls.push(`${BASE_URL}/learn/${m.level}/${m.slug}/${lesson.slug}`);
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
