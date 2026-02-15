/**
 * Static file server for Chartwise (Railway deployment).
 * Serves static files (sitemap.xml, robots.txt, assets) first,
 * then falls back to index.html for SPA routes.
 */
import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { join, resolve, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "dist");
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";

const MIME = {
  ".html": "text/html",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".json": "application/json",
  ".css": "text/css",
  ".js": "application/javascript",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

async function serveFile(req, res, filePath) {
  try {
    const data = await readFile(filePath);
    const ext = extname(filePath);
    const mime = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    res.end(data);
  } catch (err) {
    if (err.code === "ENOENT") return false;
    res.writeHead(500);
    res.end("Internal Server Error");
    return true;
  }
  return true;
}

const server = createServer(async (req, res) => {
  const url = req.url?.split("?")[0] || "/";
  const safePath = url === "/" ? "index.html" : url.replace(/^\//, "").replace(/\.\./g, "");
  const filePath = resolve(join(DIST, safePath));
  const distResolved = resolve(DIST);
  if (!filePath.startsWith(distResolved)) {
    res.writeHead(400);
    res.end("Bad Request");
    return;
  }

  try {
    const st = await stat(filePath);
    if (st.isFile()) {
      const served = await serveFile(req, res, filePath);
      if (served) return;
    }
  } catch {
    // Fall through to SPA
  }

  // SPA fallback
  const indexPath = join(DIST, "index.html");
  const served = await serveFile(req, res, indexPath);
  if (!served) {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
