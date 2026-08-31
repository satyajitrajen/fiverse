import React, { useState } from 'react';
import {
  Target,
  Sparkles,
  Compass,
  Database,
  Globe,
  Layers,
  Code2,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cloud
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb } from './Motion';
import { SEOHead } from './SEOHead';

interface CompanyViewsProps {
  activeSection: 'why' | 'process' | 'technology' | 'careers' | 'contact';
  onStartProject: () => void;
}

const sectionMetaMap: Record<string, { title: string; description: string; canonical: string; name: string }> = {
  why: {
    title: 'Why Fiverse | AI-First Software & Product Engineering Partner',
    description: 'Discover why founders, growing companies, and enterprise leaders build with Fiverse Systems for AI, custom software, and scalable SaaS platforms.',
    canonical: '/why-fiverse',
    name: 'Why Fiverse'
  },
  process: {
    title: 'Our Development Process | 9-Step AI & Software Delivery Framework | Fiverse',
    description: 'Learn about Fiverse Systems’ systematic 9-step development journey from business discovery, architecture, and prototyping to production deployment and AI monitoring.',
    canonical: '/our-process',
    name: 'Our Process'
  },
  technology: {
    title: 'Our Technology Stack & AI Architecture | Fiverse Systems',
    description: 'Explore the modern AI models, frontend frameworks, cloud infrastructure, vector databases, and DevOps tools we use to engineer production software.',
    canonical: '/technology',
    name: 'Technology'
  },
  careers: {
    title: 'Careers at Fiverse Systems | Join Our AI Engineering Team',
    description: 'Explore open engineering, AI research, and product roles at Fiverse Systems. Build next-generation software products with an AI-first engineering team.',
    canonical: '/careers',
    name: 'Careers'
  },
  contact: {
    title: 'Contact Fiverse Systems | Start an AI or Software Engineering Project',
    description: 'Get in touch with Fiverse Systems to discuss your AI development, custom software engineering, or SaaS platform requirements. Receive a fast response from senior engineers.',
    canonical: '/contact',
    name: 'Contact'
  }
};

export const CompanyViews: React.FC<CompanyViewsProps> = ({ activeSection, onStartProject }) => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Development',
    description: '',
    timeline: '1-3 months',
    budget: '$25,000 - $50,000'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'AI Development',
        description: '',
        timeline: '1-3 months',
        budget: '$25,000 - $50,000'
      });
    }, 4000);
  };

  const currentMeta = sectionMetaMap[activeSection] || sectionMetaMap.why;

  return (
    <div className="w-full py-12 sm:py-20">
      <SEOHead
        title={currentMeta.title}
        description={currentMeta.description}
        canonicalPath={currentMeta.canonical}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Company', url: '/why-fiverse' },
          { name: currentMeta.name, url: currentMeta.canonical }
        ]}
        howToSteps={activeSection === 'process' ? [
          { name: '01. Discover', text: 'Understand users, business models, pain points, and commercial objectives.' },
          { name: '02. Define', text: 'Create technical requirements, user stories, success metrics, and MVP priorities.' },
          { name: '03. Architect', text: 'Design scalable data models, cloud infrastructure, and AI integration contracts.' },
          { name: '04. Design', text: 'Create frictionless user journeys, wireframes, and production design systems.' },
          { name: '05. Build', text: 'Develop frontend, backend, AI agents, APIs, and automated test pipelines.' },
          { name: '06. Validate', text: 'Execute end-to-end security audits, load testing, and user acceptance verification.' },
          { name: '07. Launch', text: 'Seamlessly deploy into high-availability cloud production with automated CI/CD.' },
          { name: '08. Measure', text: 'Monitor telemetry, latency, token consumption, and user behavior analytics.' },
          { name: '09. Improve', text: 'Continuously iterate features and evolve AI models based on real-world feedback.' }
        ] : undefined}
        schema={activeSection === 'contact' ? {
          '@type': 'ContactPage',
          'name': 'Contact Fiverse Systems',
          'description': 'Contact Fiverse Systems to discuss AI and custom software development projects.',
          'url': 'https://fiversesystems.com/contact'
        } : undefined}
      />
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
        {/* ========================================================
            1. WHY FIVERSE
           ======================================================== */}
        {activeSection === 'why' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Why Fiverse</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                why businesses build with fiverse.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                We combine artificial intelligence with deep product engineering discipline to build software that scales, adapts, and creates enduring commercial value.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'AI-First Thinking', desc: 'We evaluate how intelligence can improve the product before architecture begins, not as an afterthought.', icon: Sparkles },
                { title: 'Complete Product Capability', desc: 'Product strategy, UI/UX design, full-stack software engineering, AI, and cloud infrastructure under one unified technology partner.', icon: Layers },
                { title: 'Engineering Quality', desc: 'We value maintainability, type safety, low latency, robust test coverage, and enterprise security.', icon: Code2 },
                { title: 'Business Understanding', desc: 'Technology choices begin with business outcomes and user needs, not marketing buzzwords.', icon: Target },
                { title: 'Flexible Technology', desc: 'We select the right tools for your specific problem instead of forcing every product into a rigid predefined stack.', icon: Workflow },
                { title: 'Long-Term Thinking', desc: 'We engineer architectures designed to support where your business is going 3 years from now.', icon: Compass }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={idx}>
                    <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow space-y-3 hover:border-[#111210] h-full">
                      <div className="w-10 h-10 rounded-2xl bg-[#f4f6ed] text-[#111210] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5 text-[#111210]" />
                      </div>
                      <h3 className="font-bold text-[18px] text-[#111210]">{item.title}</h3>
                      <p className="text-[13px] text-[#3a4035] leading-relaxed">{item.desc}</p>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.2} className="bg-[#111210] text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <GlowOrb color="lime" size="md" className="top-0 right-0 opacity-20 pointer-events-none" />
              <div className="space-y-2 relative z-10">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-white lowercase">ready to build technology that compounds?</h3>
                <p className="text-[14px] text-[#dce0d4]">Talk to our senior engineering and AI leadership team.</p>
              </div>
              <button
                onClick={onStartProject}
                className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[14px] px-8 py-3.5 rounded-full transition-all whitespace-nowrap cursor-pointer shadow-md relative z-10"
              >
                Find Out How We Can Help
              </button>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            2. OUR PROCESS (9-STEPS)
           ======================================================== */}
        {activeSection === 'process' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">The Development Journey</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                a clear path from problem to production.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                Great products are not built by accident. We guide organizations through a structured, predictable 9-step execution framework.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { step: '01', title: 'Discover', desc: 'Understand users, business models, pain points, and commercial objectives.' },
                { step: '02', title: 'Define', desc: 'Create technical requirements, user stories, success metrics, and MVP priorities.' },
                { step: '03', title: 'Architect', desc: 'Design scalable data models, cloud infrastructure, and AI integration contracts.' },
                { step: '04', title: 'Design', desc: 'Create frictionless user journeys, wireframes, and production design systems.' },
                { step: '05', title: 'Build', desc: 'Develop frontend, backend, AI agents, APIs, and automated test pipelines.' },
                { step: '06', title: 'Validate', desc: 'Execute end-to-end security audits, load testing, and user acceptance verification.' },
                { step: '07', title: 'Launch', desc: 'Seamlessly deploy into high-availability cloud production with automated CI/CD.' },
                { step: '08', title: 'Measure', desc: 'Monitor telemetry, latency, token consumption, and user behavior analytics.' },
                { step: '09', title: 'Improve', desc: 'Continuously iterate features and evolve AI models based on real-world feedback.' }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[13px] text-[#266314]">{item.step}</span>
                      <span className="w-2 h-2 rounded-full bg-[#c8ff28]" />
                    </div>
                    <h3 className="font-bold text-[18px] text-[#111210]">{item.title}</h3>
                    <p className="text-[13px] text-[#3a4035] leading-relaxed">{item.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Semantic Timeline & Delivery Table for Answer Engines */}
            <FadeIn direction="up" className="bg-[#f7f8f4] rounded-3xl p-6 sm:p-8 border border-[#e2e6d9] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="font-bold text-[20px] text-[#111210]">9-Step Execution Lifecycle & Timeline</h3>
                  <p className="text-[13px] text-[#3a4035]">Standard sprint durations and core deliverables across our software delivery methodology.</p>
                </div>
                <span className="md:hidden bg-[#e4e8dc] text-[#3a4035] px-2.5 py-1 rounded text-[10px] font-mono self-start sm:self-auto">
                  ← Scroll horizontally →
                </span>
              </div>
              <div className="overflow-x-auto custom-h-scrollbar pb-2">
                <table className="min-w-[580px] w-full text-left text-[13px] border border-[#e2e6d9] rounded-xl overflow-hidden bg-white">
                  <caption className="sr-only">Fiverse Systems 9-Step Software Development Process Table</caption>
                  <thead className="bg-[#f2f4ec] border-b border-[#e2e6d9] text-[#111210] font-bold text-[12px] uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="py-2.5 px-4">Stage</th>
                      <th scope="col" className="py-2.5 px-4">Phase Name</th>
                      <th scope="col" className="py-2.5 px-4">Key Deliverables</th>
                      <th scope="col" className="py-2.5 px-4">Estimated Sprint Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf1e8] text-[#333830]">
                    <tr>
                      <th scope="row" className="py-2.5 px-4 font-mono font-bold text-[#2e6314]">01 - 02</th>
                      <td className="py-2.5 px-4 font-bold text-[#111210]">Discover & Define</td>
                      <td className="py-2.5 px-4">Technical requirements, user stories, architecture spec</td>
                      <td className="py-2.5 px-4 font-medium">1 - 2 Weeks</td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-2.5 px-4 font-mono font-bold text-[#2e6314]">03 - 04</th>
                      <td className="py-2.5 px-4 font-bold text-[#111210]">Architect & Design</td>
                      <td className="py-2.5 px-4">Figma design system, database schemas, API contracts</td>
                      <td className="py-2.5 px-4 font-medium">2 - 3 Weeks</td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-2.5 px-4 font-mono font-bold text-[#2e6314]">05 - 06</th>
                      <td className="py-2.5 px-4 font-bold text-[#111210]">Build & Validate</td>
                      <td className="py-2.5 px-4">Frontend, backend, AI agents, automated CI/CD & QA</td>
                      <td className="py-2.5 px-4 font-medium">4 - 6 Weeks</td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-2.5 px-4 font-mono font-bold text-[#2e6314]">07 - 09</th>
                      <td className="py-2.5 px-4 font-bold text-[#111210]">Launch & Improve</td>
                      <td className="py-2.5 px-4">Production cloud deployment, telemetry, model evolution</td>
                      <td className="py-2.5 px-4 font-medium">Continuous / Retainer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="text-center pt-4">
              <button
                onClick={onStartProject}
                className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Start the Journey</span>
                <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
              </button>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            3. TECHNOLOGY STACK
           ======================================================== */}
        {activeSection === 'technology' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Technology Ecosystem</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                technology selected around the product.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                We don't believe technology stacks should become marketing checklists. The right technology depends entirely on your product requirements, team, and scaling horizons.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: 'Frontend Engineering',
                  icon: Globe,
                  techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'State Machines']
                },
                {
                  category: 'Backend & Microservices',
                  icon: Terminal,
                  techs: ['Laravel / PHP', 'Python (FastAPI, Django)', 'Node.js', 'Go', 'REST & GraphQL APIs']
                },
                {
                  category: 'Mobile Applications',
                  icon: Layers,
                  techs: ['Flutter (Cross-Platform)', 'Kotlin (Android Native)', 'Swift (iOS Native)', 'Offline Sync']
                },
                {
                  category: 'Artificial Intelligence',
                  icon: Sparkles,
                  techs: ['OpenAI / Anthropic / Gemini', 'Llama 3 / Mistral / Gemma', 'PyTorch / Transformers', 'LangChain / LlamaIndex', 'vLLM / TensorRT']
                },
                {
                  category: 'Data & Vector Stores',
                  icon: Database,
                  techs: ['PostgreSQL & MySQL', 'Pinecone, Qdrant & Milvus', 'Redis & Memcached', 'ClickHouse Analytics']
                },
                {
                  category: 'Cloud & Infrastructure',
                  icon: Cloud,
                  techs: ['AWS, GCP & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Prometheus & Datadog']
                }
              ].map((stack, idx) => {
                const Icon = stack.icon;
                return (
                  <StaggerItem key={idx}>
                    <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-4 h-full">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#f4f6ed] text-[#111210] flex items-center justify-center font-bold">
                          <Icon className="w-5 h-5 text-[#111210]" />
                        </div>
                        <h3 className="font-bold text-[17px] text-[#111210]">{stack.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f0f2eb]">
                        {stack.techs.map((t, tIdx) => (
                          <span key={tIdx} className="bg-[#f7f8f4] text-[#2d312c] text-[12px] font-semibold px-3 py-1 rounded-xl border border-[#e4e7db] hover:border-[#111210] transition-colors cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.2} className="bg-[#f0f2eb]/70 rounded-3xl p-8 border border-[#e2e6d9] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="font-bold text-[18px] text-[#111210]">Need guidance on your technology stack?</h3>
                <p className="text-[14px] text-[#3a4035]">Our architects provide comprehensive stack evaluations and technical feasibility reviews.</p>
              </div>
              <button
                onClick={onStartProject}
                className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[13px] px-7 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                Discuss Architecture
              </button>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            4. CAREERS
           ======================================================== */}
        {activeSection === 'careers' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Join Fiverse Systems</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                build technology that challenges you.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                The most interesting products rarely come with obvious answers. They require curiosity, experimentation, engineering discipline, and people willing to master new paradigms.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <FadeIn direction="up" delay={0.1} className="bg-white rounded-3xl p-8 border border-[#e4e7dc] card-soft-shadow space-y-4">
                <h3 className="font-bold text-[20px] text-[#111210]">We Look for People Who</h3>
                <div className="space-y-2.5 text-[14px] text-[#3a4035]">
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Learn continuously and stay ahead of AI breakthroughs</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Ask better questions and challenge default assumptions</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Take ownership of end outcomes rather than isolated tasks</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Care deeply about engineering quality and type safety</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Enjoy solving difficult, ambiguous business problems</span>
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} className="bg-[#111210] text-white rounded-3xl p-8 space-y-6 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Open Engineering Roles</span>
                <div className="space-y-3">
                  {[
                    { role: 'Senior AI Engineer (Agentic Systems & LLMs)', type: 'Full-Time · Remote / Hybrid' },
                    { role: 'Full-Stack Software Engineer (React, TS, Node/Laravel)', type: 'Full-Time · Remote / Hybrid' },
                    { role: 'Lead Product Designer (UI/UX & Design Systems)', type: 'Full-Time · Remote / Hybrid' },
                    { role: 'Cloud Infrastructure & MLOps Architect', type: 'Full-Time · Remote / Hybrid' }
                  ].map((job, jIdx) => (
                    <div key={jIdx} className="bg-[#1c1e19] p-4 rounded-2xl border border-[#2d3227] hover:border-[#c8ff28]/40 transition-colors flex items-center justify-between">
                      <div>
                        <p className="font-bold text-[14px] text-white">{job.role}</p>
                        <p className="text-[11px] text-[#3a4035]">{job.type}</p>
                      </div>
                      <button
                        onClick={onStartProject}
                        className="text-[12px] font-bold text-[#c8ff28] hover:underline cursor-pointer"
                      >
                        Apply →
                      </button>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        )}

        {/* ========================================================
            5. CONTACT FORM (COMPLETE 8-FIELD CONSULTATION)
           ======================================================== */}
        {activeSection === 'contact' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Start a Conversation</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                what are you trying to build?
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                You don't need a complete technical specification before speaking with us. Tell us where you are today—we'll help identify what should happen next.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Form Column */}
              <FadeIn direction="up" delay={0.1} className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#e4e7dc] card-soft-shadow">
                
                  {isSubmitted ? (
                    <div
                      key="submitted"
                      className="text-center py-16 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#eef8cf] text-[#266314] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-[24px] font-bold text-[#111210]">Thank you! We've received your project inquiry.</h3>
                      <p className="text-[14px] text-[#3a4035] max-w-md mx-auto">
                        A senior technology lead from Fiverse Systems will review your requirements and get in touch within 24 business hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jane Doe"
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] focus:outline-none focus:border-[#111210]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Work Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@company.com"
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] focus:outline-none focus:border-[#111210]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] focus:outline-none focus:border-[#111210]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Company Name</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Systems Inc."
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] focus:outline-none focus:border-[#111210]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-[#111210]">What are you looking for? *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] bg-white focus:outline-none focus:border-[#111210]"
                        >
                          <option value="AI Development">AI Development</option>
                          <option value="Agentic AI & Swarms">Agentic AI & Swarms</option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="SaaS Development">SaaS Development</option>
                          <option value="MVP Development">MVP Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Web Application Development">Web Application Development</option>
                          <option value="Enterprise Software Modernization">Enterprise Software Modernization</option>
                          <option value="Dedicated Engineering Team">Dedicated Engineering Team</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-[#111210]">Project Description & Goals *</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Tell us about the problem, user workflow, or software idea you want to bring to life..."
                          className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] focus:outline-none focus:border-[#111210]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Estimated Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] bg-white focus:outline-none focus:border-[#111210]"
                          >
                            <option value="Under 1 month">Under 1 month</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6+ months">6+ months</option>
                            <option value="Ongoing partnership">Ongoing partnership</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#111210]">Estimated Budget</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full p-3 rounded-xl border border-[#d8dcd0] text-[14px] bg-white focus:outline-none focus:border-[#111210]"
                          >
                            <option value="Under $15,000">Under $15,000</option>
                            <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                            <option value="$100,000+">$100,000+</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#111210] hover:bg-[#252823] text-white font-bold text-[15px] py-4 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
                      </button>
                    </form>
                  )}
                
              </FadeIn>

              {/* Sidebar Info */}
              <FadeIn direction="up" delay={0.2} className="lg:col-span-4 space-y-6">
                <div className="bg-[#111210] text-white rounded-3xl p-8 space-y-4 shadow-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Direct Inquiries</span>
                  <h3 className="text-[20px] font-bold">Talk with our engineering team</h3>
                  <p className="text-[13px] text-[#dce0d4] leading-relaxed">
                    Have an urgent question or RFQ? Contact our team directly via email.
                  </p>
                  <a
                    href="mailto:hi@fiverse.app"
                    className="inline-block text-[#c8ff28] font-bold text-[15px] underline underline-offset-4"
                  >
                    hi@fiverse.app
                  </a>
                </div>

                <div className="bg-[#f0f2eb]/70 rounded-3xl p-6 border border-[#e2e6d9] space-y-3 text-[13px] text-[#3a4035]">
                  <p className="font-bold text-[#111210]">What happens after submitting?</p>
                  <p>1. We review your goals and verify technical feasibility.</p>
                  <p>2. We schedule a 30-minute discovery call with a technical lead.</p>
                  <p>3. You receive a structured architecture and cost proposal.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
