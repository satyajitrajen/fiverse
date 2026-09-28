import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Define the static page metadata dictionary


const routes = [
  {
    path: '/',
    title: 'AI Software Development & Product Engineering | Fiverse Systems',
    description: 'Fiverse Systems is an AI-first software development and product engineering company building AI agents, SaaS platforms, custom software and enterprise applications.',
    keywords: 'AI-first product engineering, AI software development company, AI agents, SaaS development, custom software engineering, enterprise AI, agentic AI',
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://fiversesystems.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does Fiverse Systems do?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fiverse Systems is an AI-first product engineering company that designs, builds and scales AI agents, SaaS platforms, custom software and enterprise applications—from product strategy and UI/UX to cloud deployment and continuous scale.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Fiverse build AI agents?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Fiverse designs and develops autonomous and semi-autonomous AI agents that can reason about business objectives, remember context, query enterprise knowledge bases, call external APIs and databases, and execute multi-step workflows with deterministic guardrails.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can Fiverse develop an MVP?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Fiverse provides end-to-end MVP development covering product discovery, UI/UX design, cloud architecture, full-stack engineering, testing, and production deployment in 6 to 12 weeks.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can Fiverse work with an existing product?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Teams engage Fiverse for product modernization, legacy refactoring, new feature development, AI integration, performance engineering, or embedding dedicated senior engineering capacity.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Fiverse work with startups?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. We partner with early-stage and venture-backed startups to validate concepts, engineer prototypes, build scalable SaaS platforms, and scale engineering infrastructure post-launch.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Fiverse build enterprise software?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Fiverse engineers custom enterprise software, workflow automation engines, internal tools, ERP/CRM integrations, and secure enterprise AI systems with role-based access control (RBAC).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Who owns the source code and intellectual property?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You do. 100% of all intellectual property, source code, data pipelines, model configurations, and architecture documentation belong to the client upon completion and milestone settlement.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much does it typically cost to build an MVP or AI system with Fiverse?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fixed-scope MVP engineering sprints typically range from $25,000 to $50,000 for a 6 to 8-week production release covering product PRD, interactive UI/UX design, full-stack development, and cloud deployment. Comprehensive enterprise SaaS platforms or multi-agent autonomous swarms typically range from $50,000 to $100,000+ depending on architectural complexity, third-party integrations, and compliance requirements. Every project is scoped with fixed milestone deliverables and zero hidden fees.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you deploy AI models inside our private AWS/GCP VPC without data egress?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. For security-conscious clients and regulated industries, we deploy completely within your private cloud VPC (AWS, GCP, or Microsoft Azure). Customer data never leaves your infrastructure perimeter. We configure zero-data-retention (ZDR) model endpoints, open-source model inference via vLLM or Ollama on private GPU instances, AES-256 encryption at rest, TLS 1.3 in transit, and granular role-based access control (RBAC).'
            }
          },
          {
            '@type': 'Question',
            'name': 'What contract structures, NDAs, and payment terms does Fiverse support?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We operate under a standard Master Services Agreement (MSA) and project-specific Statements of Work (SOW) with bilateral NDAs executed upfront. Invoicing is milestone-based (e.g., Sprint 0 Architecture, Staging Release, Production Sign-off) or bi-weekly for dedicated squads. We accept international wire transfers and ACH in USD, EUR, and GBP.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I start a project with Fiverse?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can start by booking a discovery consultation or scoping call through Start a Project. We analyze your business objectives, review technical feasibility, define the roadmap, and present an engineering proposal within 48 to 72 hours.'
            }
          }
        ]
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
  },
  {
    path: '/services/cloud-engineering',
    title: 'Cloud Architecture & DevOps Engineering Services | Fiverse Systems',
    description: 'Cloud architecture, Kubernetes deployment, Terraform infrastructure as code, serverless compute, and CI/CD automation for high-scale AI systems.',
    keywords: 'cloud architecture, DevOps engineering, Kubernetes, AWS AI, GCP, Terraform'
  },
  {
    path: '/services/product-discovery',
    title: 'Product Discovery & AI Feasibility Services | Fiverse Systems',
    description: 'De-risk digital initiatives before writing code. Strategic product discovery, UX wireframing, AI feasibility audits, and architecture roadmaps.',
    keywords: 'product discovery, AI feasibility, UX research, software scoping, technical PRD'
  },
  {
    path: '/services/enterprise-modernization',
    title: 'Enterprise Software Modernization Services | Fiverse Systems',
    description: 'Modernize legacy systems, migrate monolithic architectures to microservices, and embed AI intelligence into core enterprise business operations.',
    keywords: 'enterprise modernization, legacy software migration, strangler fig pattern, cloud migration'
  },
  {
    path: '/services/dedicated-ai-teams',
    title: 'Dedicated AI Engineering Squads & Developers | Fiverse Systems',
    description: 'Scale your engineering capacity with dedicated, cross-functional squads of senior AI engineers, data scientists, and full-stack software architects.',
    keywords: 'dedicated AI team, hire AI developers, AI engineering squad, staff augmentation'
  },
  {
    path: '/services/security-compliance',
    title: 'Enterprise AI Security & Governance Services | Fiverse Systems',
    description: 'Deploy production AI systems with SOC 2 compliance, HIPAA alignment, prompt injection defenses, deterministic guardrails, and automated audit logs.',
    keywords: 'AI security, AI governance, SOC 2 compliance, LLM guardrails, prompt injection defense'
  },
  {
    path: '/services/software-modernization',
    title: 'Software Modernization & Cloud Refactoring Services | Fiverse Systems',
    description: 'Eliminate technical debt, decouple bloated legacy architectures, and rebuild mission-critical software systems for cloud performance.',
    keywords: 'software modernization, legacy refactoring, monolith to microservices, technical debt'
  }
];

function generateRouteMarkdown(route) {
  const canonicalUrl = `https://fiversesystems.com${route.path === '/' ? '' : route.path}`;
  const safeTitle = route.title.replace(/"/g, '\\"');
  const safeDesc = route.description.replace(/"/g, '\\"');

  return `---
title: "${safeTitle}"
description: "${safeDesc}"
url: "${canonicalUrl}"
canonical: "${canonicalUrl}"
date: "2026-09-02"
---

# ${route.title}

> Canonical URL: ${canonicalUrl}
> Publisher: Fiverse Systems Inc. (https://fiversesystems.com)
> Content-Signal: search=yes, ai-input=yes, ai-train=no

## Summary
${route.description}

## About Fiverse Systems
Fiverse Systems is an AI-first software development and digital product engineering company. We engineer:
- **Agentic AI & Multi-Agent Workflows**: Autonomous agents with deterministic tool validation, API execution, and human-in-the-loop guardrails.
- **Enterprise RAG Platforms**: High-precision semantic search across vector databases (Pinecone, pgvector) and enterprise data lakes.
- **Custom LLM Fine-Tuning**: Domain-specific model specialization, LoRA adaptations, and private inference infrastructure.
- **Scalable SaaS & Cloud Engineering**: Production-ready cloud applications, multi-tenant architectures, and modern web apps.

## Site Navigation Index
- [About Fiverse Systems](https://fiversesystems.com/about) - AI software company overview, mission, leadership, and engineering standards.
- [Agentic AI Development Services](https://fiversesystems.com/agentic-ai-development) - Enterprise autonomous AI agents, multi-agent frameworks, and workflow automation.
- [Custom AI Development Company](https://fiversesystems.com/ai-development-company) - Enterprise RAG platforms, predictive machine learning, and custom intelligent applications.
- [Generative AI & LLM Engineering](https://fiversesystems.com/generative-ai-development) - Domain-specific model specialization, LoRA fine-tuning, and private inference infrastructure.
- [Custom Software Development](https://fiversesystems.com/custom-software-development) - Full-stack cloud engineering, high-throughput microservices, and enterprise web applications.
- [SaaS Product Development](https://fiversesystems.com/saas-development) - Multi-tenant cloud SaaS platforms, subscription engines, and automated scale.
- [Client Case Studies & Blueprints](https://fiversesystems.com/case-studies) - Proven real-world software architecture, client success stories, and metrics.
- [Technology Stack & Architecture](https://fiversesystems.com/technology) - Deep dive into our AI tooling, frameworks, vector databases, and cloud infrastructure.
- [Our Engineering Process](https://fiversesystems.com/our-process) - Agile sprints, deterministic testing, human-in-the-loop review, and rapid delivery.
- [Contact Engineering Team](https://fiversesystems.com/contact) - Direct consultation booking and technical project scoping.

## Agent Discovery & Machine-Readable Specifications
- [RFC 9727 API Catalog](https://fiversesystems.com/.well-known/api-catalog) - IETF-compliant linkset referencing all public APIs and OpenAPI definitions.
- [Model Context Protocol (MCP) Server Card](https://fiversesystems.com/.well-known/mcp/server-card.json) - MCP server definition for AI coding assistants and agent runtimes.
- [Agent Skills Catalog](https://fiversesystems.com/.well-known/agent-skills/index.json) - SEP-1649 discovery index and verified cryptographic checksums for agent tasks.
- [Auth.md Autonomous Agent Authentication](https://fiversesystems.com/auth.md) - Complete machine-to-machine registration, token exchange, and RFC 9728 discovery.
- [Full LLM Context (llms-full.txt)](https://fiversesystems.com/llms-full.txt) - Comprehensive technical knowledge base formatted specifically for large language models.
- [Condensed LLM Summary (llms.txt)](https://fiversesystems.com/llms.txt) - High-level operational overview and service taxonomy for AI crawlers.
`;
}

function verifySkillChecksums() {
  const skillsIndexPath = path.resolve(process.cwd(), 'public/.well-known/agent-skills/index.json');
  if (!fs.existsSync(skillsIndexPath)) return;

  const raw = fs.readFileSync(skillsIndexPath, 'utf-8');
  const indexData = JSON.parse(raw);
  let updated = false;

  for (const skill of indexData.skills) {
    const relativeUrl = skill.url.replace('https://fiversesystems.com/', 'public/');
    const skillPath = path.resolve(process.cwd(), relativeUrl);
    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath);
      const calculatedHash = crypto.createHash('sha256').update(content).digest('hex');
      if (skill.sha256 !== calculatedHash) {
        console.log(`[Agent Skills] Updating checksum for ${skill.name}: ${calculatedHash}`);
        skill.sha256 = calculatedHash;
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(skillsIndexPath, JSON.stringify(indexData, null, 2), 'utf-8');
    console.log('[Agent Skills] Checksums synced in agent-skills/index.json');
  }
}

function prerender() {
  verifySkillChecksums();

  const distPath = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[Pre-render Error] Template file not found: ${templatePath}. Ensure vite build runs first.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`[Pre-render] Generating static HTML & Markdown snapshots for ${routes.length} routes...`);

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
    let targetFilePath;
    let markdownFilePath;

    if (route.path === '/') {
      targetFilePath = path.join(distPath, 'index.html');
      markdownFilePath = path.join(distPath, 'index.md');
    } else {
      const cleanPath = route.path.replace(/^\//, '');
      const routeDir = path.join(distPath, cleanPath);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFilePath = path.join(routeDir, 'index.html');
      markdownFilePath = path.join(distPath, `${cleanPath}.md`);
    }

    fs.writeFileSync(targetFilePath, html, 'utf-8');

    // Also write Markdown snapshot for content negotiation
    const markdownContent = generateRouteMarkdown(route);
    fs.writeFileSync(markdownFilePath, markdownContent, 'utf-8');

    count++;
  }

  // Ensure root-level llms-full.txt exists in dist
  if (fs.existsSync(path.resolve(process.cwd(), 'public/llms-full.txt'))) {
    fs.copyFileSync(
      path.resolve(process.cwd(), 'public/llms-full.txt'),
      path.join(distPath, 'llms-full.txt')
    );
  }

  console.log(`[Pre-render Complete] Successfully generated ${count} static HTML and Markdown routes with unique metadata & schemas.`);
}

prerender();
