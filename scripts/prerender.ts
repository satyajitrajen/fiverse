import fs from 'node:fs';
import path from 'node:path';

// Define the static page metadata dictionary
interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  schema?: Record<string, unknown>[];
}

const routes: RouteMetadata[] = [
  {
    path: '/',
    title: 'AI Development Company & Custom Software Engineering | Fiverse Systems',
    description: 'Fiverse Systems is an AI-first software development company building Agentic AI, Generative AI, custom software, SaaS platforms, AI agents, enterprise solutions, web and mobile applications.',
    keywords: 'AI development company, agentic AI, AI agents, generative AI development, custom software development, LLM engineering, SaaS product development',
    schema: [
      {
        '@type': 'Organization',
        '@id': 'https://fiversesystems.com/#organization',
        'name': 'Fiverse Systems Inc.',
        'url': 'https://fiversesystems.com/',
        'logo': 'https://fiversesystems.com/logo.png',
        'email': 'hi@fiversesystems.com',
        'founder': {
          '@type': 'Person',
          'name': 'Satyajit Nikam',
          'jobTitle': 'Founder & Principal AI Architect'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://fiversesystems.com/#website',
        'url': 'https://fiversesystems.com/',
        'name': 'Fiverse Systems',
        'publisher': {
          '@id': 'https://fiversesystems.com/#organization'
        }
      }
    ]
  },
  {
    path: '/about',
    title: 'About Fiverse Systems | AI-First Software Development Company',
    description: 'Fiverse Systems is an AI-first software development and digital product engineering company. We build production AI agents, enterprise software, and scalable SaaS platforms.',
    keywords: 'about Fiverse, AI software company, AI engineering team, custom software team'
  },
  {
    path: '/ai-development-company',
    title: 'AI Development Company | Custom AI Solutions | Fiverse Systems',
    description: 'Fiverse Systems is an AI development company building custom AI applications, AI agents, Generative AI, machine learning, RAG, enterprise AI and intelligent automation solutions.',
    keywords: 'AI development company, custom AI development, artificial intelligence company, enterprise AI solutions'
  },
  {
    path: '/agentic-ai-development',
    title: 'Agentic AI Development Company | AI Agent Systems | Fiverse Systems',
    description: 'Fiverse Systems builds Agentic AI systems and autonomous multi-agent workflows that plan, reason, use tools, call APIs, and execute complex multi-step enterprise workflows.',
    keywords: 'Agentic AI development, AI agent development, multi-agent systems, autonomous AI agents'
  },
  {
    path: '/ai-agent-development',
    title: 'AI Agent Development Company | Custom Autonomous Agents | Fiverse',
    description: 'Custom AI agent development company building autonomous agents for research, sales outreach, customer operations, data extraction, and internal workflows.',
    keywords: 'AI agent development company, custom AI agents, autonomous agents, AI workflow automation'
  },
  {
    path: '/generative-ai-development',
    title: 'Generative AI Development Company | Custom GenAI | Fiverse Systems',
    description: 'Generative AI development company building custom GenAI applications, enterprise RAG systems, LLM fine-tuning, automated content pipelines, and AI copilot software.',
    keywords: 'Generative AI development, GenAI company, custom LLM solutions, RAG development'
  },
  {
    path: '/llm-development',
    title: 'LLM Development Company | Fine-Tuning & Custom LLMs | Fiverse Systems',
    description: 'LLM development company providing custom LLM fine-tuning, private open-source model deployment, vector retrieval, prompt engineering, and LLM application development.',
    keywords: 'LLM development company, custom LLM, LLM fine-tuning, private LLM hosting'
  },
  {
    path: '/custom-software-development',
    title: 'Custom Software Development Company | Enterprise Engineering | Fiverse',
    description: 'Custom software development company building secure, scalable web applications, mobile apps, enterprise cloud systems, backend APIs, and modern digital platforms.',
    keywords: 'custom software development company, bespoke software development, enterprise software development'
  },
  {
    path: '/product-development',
    title: 'Digital Product Development Company | End-to-End Product Engineering | Fiverse',
    description: 'End-to-end digital product development company turning ambitious concepts into scalable software products, SaaS platforms, and revenue-generating digital experiences.',
    keywords: 'digital product development, product engineering, MVP development, software product design'
  },
  {
    path: '/saas-development',
    title: 'SaaS Product Development Company | Cloud SaaS Engineering | Fiverse',
    description: 'SaaS product development company building scalable multi-tenant SaaS platforms, cloud architectures, billing systems, user management, and enterprise software.',
    keywords: 'SaaS development company, SaaS product development, multi-tenant SaaS architecture'
  },
  {
    path: '/workplace-platform',
    title: 'Hybrid Workplace Management Platform & Desk Booking | Fiverse',
    description: 'Optimize office space, desk booking, custom attendance schedules, and team workload analytics for hybrid companies with Fiverse Workplace Platform.',
    keywords: 'workplace management platform, desk booking software, hybrid office management'
  },
  {
    path: '/why-fiverse',
    title: 'Why Fiverse Systems | AI-First Software Engineering Partner',
    description: 'Discover why ambitious startups and forward-thinking enterprises choose Fiverse Systems as their AI development and custom software engineering partner.',
    keywords: 'why choose Fiverse, AI development partner, software engineering partner'
  },
  {
    path: '/our-process',
    title: 'Our Development Process | 9-Step AI & Software Delivery Framework | Fiverse',
    description: 'Learn about Fiverse Systems systematic 9-step development journey from business discovery, architecture, and prototyping to production deployment and AI monitoring.',
    keywords: 'software development process, agile AI engineering, 9-step delivery process'
  },
  {
    path: '/technology',
    title: 'Our Technology Stack & AI Architecture | Fiverse Systems',
    description: 'Explore the modern AI models, frontend frameworks, cloud infrastructure, vector databases, and DevOps tools we use to engineer production software.',
    keywords: 'AI technology stack, React, TypeScript, Python, PyTorch, LangChain, AWS'
  },
  {
    path: '/careers',
    title: 'Careers at Fiverse Systems | Join Our AI Engineering Team',
    description: 'Explore open engineering, AI research, and product roles at Fiverse Systems. Build next-generation software products with an AI-first engineering team.',
    keywords: 'AI engineering jobs, software engineer careers, remote AI developer'
  },
  {
    path: '/contact',
    title: 'Contact Fiverse Systems | Start an AI or Software Engineering Project',
    description: 'Get in touch with Fiverse Systems to discuss your AI development, custom software engineering, or SaaS platform requirements. Receive a fast response from senior engineers.',
    keywords: 'contact Fiverse, hire AI developers, software consultation'
  },
  {
    path: '/case-studies',
    title: 'Client Case Studies & Engineering Outcomes | Fiverse Systems',
    description: 'Explore verified production case studies and real-world outcomes engineered by Fiverse Systems across healthcare, fintech, SaaS, and enterprise automation.',
    keywords: 'AI case studies, software development case studies, client success'
  },
  {
    path: '/our-products',
    title: 'Digital Products & Software Solutions | Fiverse Systems',
    description: 'Discover software products, proprietary platforms, and AI accelerators engineered by Fiverse Systems.',
    keywords: 'Fiverse products, AI platforms, software solutions'
  },
  {
    path: '/client-success-stories',
    title: 'Client Success Stories & Testimonials | Fiverse Systems',
    description: 'Read how leading companies scaled throughput, reduced operational overhead, and launched AI software products with Fiverse Systems.',
    keywords: 'software client testimonials, AI success stories'
  },
  {
    path: '/blog',
    title: 'Fiverse Engineering Blog | AI & Software Insights',
    description: 'Technical articles, engineering insights, architectural patterns, and AI implementation teardowns from the Fiverse Systems engineering team.',
    keywords: 'AI blog, software engineering blog, tech insights'
  },
  {
    path: '/ai-insights',
    title: 'AI Insights & Architecture Research | Fiverse Systems',
    description: 'Deep technical research into agentic orchestration, deterministic tool validation, vector search optimizations, and LLM inference scaling.',
    keywords: 'AI architecture research, agentic AI papers, RAG benchmarks'
  },
  {
    path: '/guides',
    title: 'Downloadable AI Architecture Blueprints & Implementation Guides | Fiverse',
    description: 'Access practical engineering guides, RAG system diagrams, agentic state machine templates, and enterprise AI roadmaps.',
    keywords: 'AI blueprints, software guides, architecture diagrams'
  },
  {
    path: '/resources',
    title: 'Developer Resources & System Templates | Fiverse Systems',
    description: 'Free engineering checklists, evaluation rubrics, RFP templates, and architecture guides for engineering teams building with AI.',
    keywords: 'AI developer resources, engineering templates'
  }
];

function prerender() {
  const distPath = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[Pre-render Error] Template file not found: ${templatePath}. Ensure vite build runs first.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`[Pre-render] Generating static HTML snapshots for ${routes.length} routes...`);

  let count = 0;

  for (const route of routes) {
    const canonicalUrl = `https://fiversesystems.com${route.path === '/' ? '' : route.path}`;

    // 1. Replace Title
    let html = templateHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // 2. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 3. Replace Meta Keywords if present
    if (route.keywords) {
      html = html.replace(
        /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
        `<meta name="keywords" content="${route.keywords.replace(/"/g, '&quot;')}" />`
      );
    }

    // 4. Replace Canonical URL
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 5. Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 6. Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 7. Inject Route-Specific JSON-LD structured data
    if (route.schema && route.schema.length > 0) {
      const routeJsonLd = `<script type="application/ld+json">\n${JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': route.schema
      }, null, 2)}\n</script>`;

      html = html.replace('</head>', `  ${routeJsonLd}\n</head>`);
    }

    // Determine target file path
    let targetFilePath: string;
    if (route.path === '/') {
      targetFilePath = path.join(distPath, 'index.html');
    } else {
      const routeDir = path.join(distPath, route.path.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFilePath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, html, 'utf-8');
    count++;
  }

  console.log(`[Pre-render Complete] Successfully generated ${count} static HTML routes with unique metadata & schemas.`);
}

prerender();
