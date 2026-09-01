/**
 * WebMCP (Web Model Context Protocol) Integration
 * Exposes browser-level tools to AI agents navigating the page.
 * Spec: https://webmachinelearning.github.io/webmcp/ & https://developer.chrome.com/blog/webmcp-epp
 */

export interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties?: Record<string, unknown>;
    required?: string[];
  };
  execute: (params: Record<string, unknown>) => Promise<unknown> | unknown;
}

export function registerWebMcpTools(): void {
  if (typeof window === 'undefined') return;

  const tools: WebMcpTool[] = [
    {
      name: 'browseServices',
      description: 'Explore AI engineering services, Agentic AI, custom software, and SaaS development capabilities offered by Fiverse Systems.',
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            description: 'Filter by category: ai_development, agentic_ai, custom_software, saas_development, generative_ai, llm_development'
          }
        }
      },
      execute: async (params) => {
        const services = [
          {
            id: 'agentic-ai-development',
            title: 'Agentic AI Development',
            description: 'Autonomous multi-agent systems, deterministic tool validation, and enterprise workflows.',
            url: 'https://fiversesystems.com/agentic-ai-development'
          },
          {
            id: 'ai-development-company',
            title: 'Custom AI Development',
            description: 'Enterprise RAG, predictive ML, computer vision, and intelligent automation.',
            url: 'https://fiversesystems.com/ai-development-company'
          },
          {
            id: 'generative-ai-development',
            title: 'Generative AI & LLMs',
            description: 'Custom GenAI applications, domain-specific LoRA fine-tuning, and private inference APIs.',
            url: 'https://fiversesystems.com/generative-ai-development'
          },
          {
            id: 'custom-software-development',
            title: 'Custom Software Engineering',
            description: 'Enterprise full-stack web and mobile apps, high-throughput microservices, and cloud systems.',
            url: 'https://fiversesystems.com/custom-software-development'
          },
          {
            id: 'saas-development',
            title: 'SaaS Product Development',
            description: 'Multi-tenant cloud platforms, automated billing, and scalable SaaS infrastructure.',
            url: 'https://fiversesystems.com/saas-development'
          },
          {
            id: 'workplace-platform',
            title: 'Fiverse Workplace Platform',
            description: 'Hybrid office desk booking, team scheduling, and workspace utilization analytics.',
            url: 'https://fiversesystems.com/workplace-platform'
          }
        ];

        if (params?.category) {
          const categoryQuery = String(params.category).toLowerCase().replace(/_/g, '-');
          return services.filter(s => s.id.includes(categoryQuery));
        }
        return services;
      }
    },
    {
      name: 'getCaseStudies',
      description: 'Retrieve real-world production case studies, metrics, and technical outcomes engineered by Fiverse Systems.',
      inputSchema: {
        type: 'object',
        properties: {
          industry: {
            type: 'string',
            description: 'Optional filter by industry: healthcare, fintech, saas, logistics'
          }
        }
      },
      execute: async () => {
        return [
          {
            client: 'CareGrid Telehealth',
            domain: 'Healthcare AI',
            outcome: '94.2% automated triage accuracy and 4.2x faster clinician intake with multi-agent orchestration.',
            tech: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'HIPAA AWS']
          },
          {
            client: 'Apex Capital Partners',
            domain: 'Fintech & Quant Intelligence',
            outcome: '72% reduction in SEC filing analysis latency with high-throughput RAG search.',
            tech: ['TypeScript', 'Pinecone', 'OpenAI', 'React', 'Docker']
          },
          {
            client: 'OmniLogistics Global',
            domain: 'Supply Chain Optimization',
            outcome: 'Real-time multi-agent dispatch routing reducing empty-mile haulage by 18.4%.',
            tech: ['Go', 'Python', 'Redis', 'Kubernetes']
          }
        ];
      }
    },
    {
      name: 'calculateProjectScope',
      description: 'Estimate engineering pod size, sprint timeline, and architectural complexity for a planned project.',
      inputSchema: {
        type: 'object',
        required: ['projectType'],
        properties: {
          projectType: {
            type: 'string',
            enum: ['agentic_ai', 'enterprise_rag', 'custom_saas', 'llm_fine_tuning', 'mvp_product'],
            description: 'The type of software product or AI capability to build.'
          },
          integrationsCount: {
            type: 'number',
            description: 'Estimated count of third-party APIs, legacy databases, or microservices.'
          }
        }
      },
      execute: async (params) => {
        const type = String(params.projectType || 'mvp_product');
        const integrations = Number(params.integrationsCount || 2);
        let weeks = 8;
        let podSize = '3-4 senior engineers';

        if (type === 'agentic_ai') {
          weeks = 8 + Math.ceil(integrations * 0.5);
          podSize = '4 senior engineers (1 Principal AI Architect, 2 Full-Stack, 1 QA)';
        } else if (type === 'custom_saas') {
          weeks = 10 + Math.ceil(integrations * 0.5);
          podSize = '4-6 engineers (1 Tech Lead, 3 Full-Stack, 1 DevOps, 1 QA)';
        } else if (type === 'enterprise_rag' || type === 'llm_fine_tuning') {
          weeks = 6 + Math.ceil(integrations * 0.5);
          podSize = '3-4 engineers (1 AI/ML Engineer, 2 Backend, 1 QA)';
        }

        return {
          estimatedWeeks: Math.min(weeks, 16),
          recommendedPod: podSize,
          deliveryFramework: '9-Step AI & Software Delivery Framework (MVP Launch in 6-8 weeks)',
          contactUrl: 'https://fiversesystems.com/contact'
        };
      }
    },
    {
      name: 'requestConsultation',
      description: 'Trigger a consultation inquiry with Fiverse Systems senior AI engineering architects.',
      inputSchema: {
        type: 'object',
        required: ['name', 'email', 'company', 'projectBrief'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          company: { type: 'string' },
          projectBrief: { type: 'string' },
          serviceInterest: { type: 'string' }
        }
      },
      execute: async (params) => {
        // Expose a structured response and dispatch a custom event for client-side UI hooks
        const payload = {
          name: params.name,
          email: params.email,
          company: params.company,
          projectBrief: params.projectBrief,
          serviceInterest: params.serviceInterest || 'General AI Engineering',
          timestamp: new Date().toISOString()
        };

        window.dispatchEvent(new CustomEvent('fiverse:agent-inquiry', { detail: payload }));

        return {
          status: 'success',
          message: 'Inquiry received. A senior AI architect from Fiverse Systems will reach out within 4 hours.',
          referenceId: `FIV-${Date.now()}`
        };
      }
    }
  ];

  // Store globally for testability and inspection
  (window as unknown as { __webmcp_tools?: WebMcpTool[] }).__webmcp_tools = tools;

  // 1. Chrome / WebML WebMCP API (navigator.modelContext)
  const nav = navigator as unknown as {
    modelContext?: {
      provideContext: (context: { tools: WebMcpTool[] }) => void;
    };
  };

  if (nav.modelContext && typeof nav.modelContext.provideContext === 'function') {
    try {
      nav.modelContext.provideContext({ tools });
      console.log('[WebMCP] Registered tools via navigator.modelContext');
    } catch (err) {
      console.warn('[WebMCP] Error calling navigator.modelContext.provideContext', err);
    }
  }

  // 2. Window-level model context fallback
  const win = window as unknown as {
    modelContext?: {
      provideContext: (context: { tools: WebMcpTool[] }) => void;
    };
  };

  if (win.modelContext && typeof win.modelContext.provideContext === 'function') {
    try {
      win.modelContext.provideContext({ tools });
      console.log('[WebMCP] Registered tools via window.modelContext');
    } catch (err) {
      console.warn('[WebMCP] Error calling window.modelContext.provideContext', err);
    }
  }

  // Dispatch standard ready event for browser agent extensions
  window.dispatchEvent(new CustomEvent('webmcp:ready', { detail: { tools } }));
}
