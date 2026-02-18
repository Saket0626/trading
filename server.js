/**
 * Static file server for Chartwise (Railway deployment).
 * Serves static files (sitemap-index.xml, robots.txt, assets) first,
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

// FIRST: Handle sitemap and robots by raw path (catches any proxy/routing quirks)
app.use((req, res, next) => {
  const pathname = req.path || (req.url && req.url.split("?")[0]) || "";
  if (pathname === "/sitemap-index.xml" || pathname.endsWith("/sitemap-index.xml")) {
    res.type("application/xml");
    return res.sendFile(path.join(DIST, "sitemap-index.xml"), (err) => {
      if (err) res.status(404).send("Not Found");
    });
  }
  if (pathname === "/robots.txt" || pathname.endsWith("/robots.txt")) {
    res.type("text/plain");
    return res.sendFile(path.join(DIST, "robots.txt"), (err) => {
      if (err) res.status(404).send("Not Found");
    });
  }
  next();
});

// Serve static files (assets, favicons, etc.) - does NOT serve index for /
app.use(express.static(DIST, { index: false, etag: true, lastModified: true }));

// SPA fallback: serve index.html for all other routes
app.use((req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, HOST, () => {
  const sitemapExists = existsSync(path.join(DIST, "sitemap-index.xml"));
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`Serving from: ${DIST}`);
  console.log(`sitemap-index.xml exists: ${sitemapExists}`);
});
