import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME type map
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.linkset': 'application/linkset+json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.woff2': 'font/woff2'
};

const LINK_HEADERS = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</api/openapi.json>; rel="service-desc"',
  '</technology>; rel="service-doc"',
  '</.well-known/ai-catalog.json>; rel="describedby"',
  '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"'
].join(', ');

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(urlObj.pathname);
  const accept = req.headers['accept'] || '';

  // 1. Standard AI Agent Discovery & Security Headers
  res.setHeader('Link', LINK_HEADERS);
  res.setHeader('Content-Signal', 'search=yes, ai-input=yes, ai-train=no');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(204);
    res.end();
    return;
  }

  // 2. Markdown Negotiation (Accept: text/markdown)
  if (accept.includes('text/markdown') && !pathname.startsWith('/assets/')) {
    const cleanRoute = pathname === '/' ? 'index' : pathname.replace(/^\/|\/$/g, '');
    const mdFileInDist = path.join(DIST_DIR, `${cleanRoute}.md`);
    const fallbackLlms = path.join(DIST_DIR, 'llms-full.txt');

    let mdPath = fs.existsSync(mdFileInDist) ? mdFileInDist : (fs.existsSync(fallbackLlms) ? fallbackLlms : null);

    if (mdPath && fs.existsSync(mdPath)) {
      const content = fs.readFileSync(mdPath, 'utf-8');
      const tokens = Math.round(content.split(/\s+/).length * 1.33);

      res.writeHead(200, {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': String(tokens),
        'Vary': 'Accept'
      });
      res.end(content);
      return;
    }
  }

  // 3. API Catalog without extension
  if (pathname === '/.well-known/api-catalog') {
    const catalogPath = path.join(DIST_DIR, '.well-known', 'api-catalog.json');
    if (fs.existsSync(catalogPath)) {
      res.writeHead(200, { 'Content-Type': 'application/linkset+json; charset=utf-8' });
      res.end(fs.readFileSync(catalogPath));
      return;
    }
  }

  // 4. OAuth & OpenID endpoints without extension
  if (
    pathname === '/.well-known/oauth-authorization-server' ||
    pathname === '/.well-known/oauth-protected-resource' ||
    pathname === '/.well-known/openid-configuration'
  ) {
    const jsonPath = path.join(DIST_DIR, `${pathname}.json`);
    const directPath = path.join(DIST_DIR, pathname);
    const target = fs.existsSync(jsonPath) ? jsonPath : (fs.existsSync(directPath) ? directPath : null);

    if (target && fs.existsSync(target)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(fs.readFileSync(target));
      return;
    }
  }

  // 5. Check static file in dist
  let filePath = path.join(DIST_DIR, pathname);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
    return;
  }

  // 6. SPA fallback to dist/index.html
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(indexPath));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`[Fiverse Production Server] Running on http://localhost:${PORT}`);
});
