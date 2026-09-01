import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const agentDiscoveryPlugin = (): Plugin => ({
  name: 'agent-discovery-middleware',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const linkHeaders = [
        '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
        '</.well-known/ai-catalog.json>; rel="ai-catalog"',
        '</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
        '</.well-known/agent-skills/index.json>; rel="agent-skills"',
        '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"',
        '</.well-known/oauth-authorization-server>; rel="oauth-authorization-server"',
        '</auth.md>; rel="auth-metadata"',
        '</llms.txt>; rel="llms-txt"',
        '</llms-full.txt>; rel="llms-full-txt"',
        '</api/openapi.json>; rel="service-desc"',
        '</technology>; rel="service-doc"'
      ].join(', ');

      res.setHeader('Link', linkHeaders);
      res.setHeader('Content-Signal', 'search=yes, ai-input=yes, ai-train=no');
      res.setHeader('Access-Control-Allow-Origin', '*');

      const url = req.url ? req.url.split('?')[0] : '/';
      const accept = req.headers['accept'] || '';

      // 1. Markdown Content Negotiation for AI Agents (Accept: text/markdown)
      if (accept.includes('text/markdown') && !url.includes('/@') && !url.includes('/node_modules') && !url.includes('/src')) {
        const llmsPath = path.resolve(process.cwd(), 'public/llms-full.txt');
        if (fs.existsSync(llmsPath)) {
          const content = fs.readFileSync(llmsPath, 'utf-8');
          const wordCount = content.split(/\s+/).length;
          const estimatedTokens = Math.round(wordCount * 1.33);

          res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
          res.setHeader('x-markdown-tokens', String(estimatedTokens));
          res.setHeader('Vary', 'Accept');
          res.end(content);
          return;
        }
      }

      // 2. RFC 9727 API Catalog with application/linkset+json
      if (url === '/.well-known/api-catalog') {
        const catalogPath = path.resolve(process.cwd(), 'public/.well-known/api-catalog.json');
        if (fs.existsSync(catalogPath)) {
          const content = fs.readFileSync(catalogPath, 'utf-8');
          res.setHeader('Content-Type', 'application/linkset+json; charset=utf-8');
          res.end(content);
          return;
        }
      }

      // 3. Auth.md endpoint
      if (url === '/auth.md') {
        const authPath = path.resolve(process.cwd(), 'public/auth.md');
        if (fs.existsSync(authPath)) {
          const content = fs.readFileSync(authPath, 'utf-8');
          res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
          res.end(content);
          return;
        }
      }

      // 4. OAuth & OpenID Discovery metadata endpoints
      if (
        url === '/.well-known/oauth-authorization-server' ||
        url === '/.well-known/openid-configuration' ||
        url === '/.well-known/oauth-protected-resource'
      ) {
        const metaPath = path.resolve(process.cwd(), `public${url}`);
        if (fs.existsSync(metaPath)) {
          const content = fs.readFileSync(metaPath, 'utf-8');
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(content);
          return;
        }
      }

      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), agentDiscoveryPlugin()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons-vendor';
          }
        }
      }
    }
  }
})
