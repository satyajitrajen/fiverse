// Vercel Edge Middleware for Markdown Content Negotiation (RFC / Cloudflare Markdown for Agents)

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - assets/ (Vite hashed bundles)
     * - files with static extensions (.png, .webp, .ico, .svg, .css, .js)
     */
    '/((?!assets/|_next/|.*\\.(?:png|webp|ico|svg|css|js|woff2|xml)$).*)',
  ],
};

const routeMarkdownMap: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'AI Development Company & Custom Software Engineering | Fiverse Systems',
    desc: 'Fiverse Systems is an AI-first software development company building Agentic AI, Generative AI, custom software, SaaS platforms, AI agents, enterprise solutions, web and mobile applications.'
  },
  '/about': {
    title: 'About Fiverse Systems | AI-First Software Development Company',
    desc: 'Fiverse Systems is an AI-first software development and digital product engineering company. We build production AI agents, enterprise software, and scalable SaaS platforms.'
  },
  '/agentic-ai-development': {
    title: 'Agentic AI Development Company | AI Agent Systems | Fiverse Systems',
    desc: 'Fiverse Systems builds Agentic AI systems and autonomous multi-agent workflows that plan, reason, use tools, call APIs, and execute complex multi-step enterprise workflows.'
  },
  '/ai-development-company': {
    title: 'AI Development Company | Custom AI Solutions | Fiverse Systems',
    desc: 'Fiverse Systems is an AI development company building custom AI applications, AI agents, Generative AI, machine learning, RAG, enterprise AI and intelligent automation solutions.'
  },
  '/custom-software-development': {
    title: 'Custom Software Development Company | Enterprise Engineering | Fiverse',
    desc: 'Custom software development company building secure, scalable web applications, mobile apps, enterprise cloud systems, backend APIs, and modern digital platforms.'
  },
  '/saas-development': {
    title: 'SaaS Product Development Company | Cloud SaaS Engineering | Fiverse',
    desc: 'SaaS product development company building scalable multi-tenant SaaS platforms, cloud architectures, billing systems, user management, and enterprise software.'
  },
  '/contact': {
    title: 'Contact Fiverse Systems | Start an AI or Software Engineering Project',
    desc: 'Get in touch with Fiverse Systems to discuss your AI development, custom software engineering, or SaaS platform requirements. Receive a fast response from senior engineers.'
  }
};

export default function middleware(request: Request) {
  const accept = request.headers.get('accept') || '';

  // Check if agent requested Markdown
  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, '') || '/';
    const route = routeMarkdownMap[pathname] || routeMarkdownMap['/'];

    const markdown = `# ${route.title}

> Canonical URL: https://fiversesystems.com${pathname === '/' ? '' : pathname}
> Publisher: Fiverse Systems Inc. (https://fiversesystems.com)
> Content-Signal: search=yes, ai-input=yes, ai-train=no

## Summary
${route.desc}

## Core Capabilities & Services
- **Agentic AI & Multi-Agent Workflows**: Autonomous agents with deterministic tool validation, API orchestration, and human-in-the-loop guardrails.
- **Enterprise RAG Platforms**: Hybrid vector search across Pinecone and pgvector, automated document chunking, and knowledge graphs.
- **Custom LLM Fine-Tuning**: LoRA/QLoRA domain fine-tuning and private vLLM deployments.
- **Full-Stack SaaS & Cloud Products**: Multi-tenant architectures, real-time React frontends, high-throughput microservices.

## Machine Discovery Resources
- **API Catalog (RFC 9727)**: https://fiversesystems.com/.well-known/api-catalog
- **MCP Server Card (SEP-1649)**: https://fiversesystems.com/.well-known/mcp/server-card.json
- **Agent Skills (RFC v0.2.0)**: https://fiversesystems.com/.well-known/agent-skills/index.json
- **Auth.md Agent Authentication**: https://fiversesystems.com/auth.md
- **LLM Full Context**: https://fiversesystems.com/llms-full.txt
- **Inquiries & Consultation**: hi@fiversesystems.com | https://fiversesystems.com/contact
`;

    const wordCount = markdown.split(/\s+/).length;
    const tokens = Math.round(wordCount * 1.33);

    return new Response(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': String(tokens),
        'Vary': 'Accept',
        'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
        'Link': '</.well-known/api-catalog>; rel="api-catalog", </api/openapi.json>; rel="service-desc", </technology>; rel="service-doc", </.well-known/ai-catalog.json>; rel="describedby"',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  // Allow standard request processing
  return;
}
