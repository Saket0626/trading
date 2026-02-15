/**
 * Static file server for Chartwise (Railway deployment).
 * Serves static files (sitemap.xml, robots.txt, assets) first,
 * then falls back to index.html for SPA routes.
 * Uses Express for reliable static file handling.
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = path.resolve(__dirname, "dist");
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";

const app = express();

// Explicit routes for SEO files FIRST (must run before static/SPA fallback)
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.join(DIST, "sitemap.xml"), (err) => {
    if (err) res.status(404).send("Not Found");
  });
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.sendFile(path.join(DIST, "robots.txt"), (err) => {
    if (err) res.status(404).send("Not Found");
  });
});

// Serve static files (assets, favicons, etc.) - does NOT serve index for /
app.use(express.static(DIST, { index: false, etag: true, lastModified: true }));

// SPA fallback: serve index.html for all other routes
app.use((req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, HOST, () => {
  const sitemapExists = existsSync(path.join(DIST, "sitemap.xml"));
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`Serving from: ${DIST}`);
  console.log(`sitemap.xml exists: ${sitemapExists}`);
});
