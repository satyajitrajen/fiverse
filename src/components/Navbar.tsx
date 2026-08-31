import React, { useState, useRef, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiverseLogo, FiverseIcon } from './Logos';
import {
  ChevronDown,
  Brain,
  Code2,
  Layers,
  Sparkles,
  Building2,
  FolderGit2,
  FileText,
  Bot,
  Cpu,
  Database,
  Search,
  Mic,
  Workflow,
  Smartphone,
  Globe,
  RefreshCw,
  Rocket,
  Palette,
  Users,
  ShieldCheck,
  TrendingUp,
  Activity,
  Briefcase,
  BookOpen,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  onTalkToAI: () => void;
}

interface NavSubItem {
  id?: string;
  path: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavMenuItem {
  id: string;
  label: string;
  path?: string;
  hasDropdown: boolean;
  badge?: string;
  items?: NavSubItem[];
}

export const Navbar: React.FC<NavbarProps> = memo(({
  onStartProject,
  onTalkToAI
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navMenuItems: NavMenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      id: 'ai',
      label: 'AI',
      hasDropdown: true,
      badge: 'Core',
      items: [
        { path: '/ai-development-company', title: 'AI Development', desc: 'Custom AI systems engineered for your business requirements', icon: Brain },
        { path: '/agentic-ai-development', title: 'Agentic AI Development', desc: 'Autonomous multi-agent swarms that think, plan and act', icon: Bot },
        { path: '/ai-agent-development', title: 'AI Agent Development', desc: 'Specialized goal-oriented intelligent enterprise agents', icon: Cpu },
        { path: '/generative-ai-development', title: 'Generative AI', desc: 'Enterprise conversational, document, and multimodal intelligence', icon: Sparkles },
        { path: '/llm-development', title: 'LLM Development', desc: 'Domain-adapted large language model fine-tuning & orchestration', icon: FileText },
        { path: '/services/rag-development', title: 'RAG Development', desc: 'Connect AI securely with proprietary company documents & databases', icon: Database },
        { path: '/services/ai-model-development', title: 'AI Model Development', desc: 'Custom architectures, loss functions, and neural topologies', icon: Layers },
        { path: '/services/ai-model-training', title: 'AI Model Training & Fine-Tuning', desc: 'Distributed GPU training, LoRA/QLoRA, and RLHF alignment', icon: RefreshCw },
        { path: '/services/machine-learning', title: 'Machine Learning', desc: 'Predictive modeling, regression, anomaly detection, and classification', icon: TrendingUp },
        { path: '/services/computer-vision', title: 'Computer Vision', desc: 'Object detection, spatial recognition, and visual document parsing', icon: Search },
        { path: '/services/nlp', title: 'NLP Development', desc: 'Semantic search, intent classification, and entity extraction', icon: Activity },
        { path: '/services/voice-ai', title: 'Voice AI', desc: 'Sub-second real-time conversational voice agents and speech pipelines', icon: Mic },
        { path: '/services/ai-automation', title: 'AI Automation', desc: 'Outcome-driven autonomous pipeline & business process execution', icon: Workflow },
        { path: '/services/enterprise-ai', title: 'Enterprise AI', desc: 'Scalable, secure AI infrastructure with role-based guardrails', icon: ShieldCheck },
        { path: '/services/ai-integration', title: 'AI Integration', desc: 'Embed state-of-the-art AI into existing legacy systems and APIs', icon: Code2 }
      ]
    },
    {
      id: 'software',
      label: 'Software',
      hasDropdown: true,
      items: [
        { path: '/custom-software-development', title: 'Custom Software Development', desc: 'Tailor-made software built around your exact workflows', icon: Code2 },
        { path: '/services/enterprise-software', title: 'Enterprise Software', desc: 'Robust ERP, CRM, and mission-critical business platforms', icon: Building2 },
        { path: '/services/web-applications', title: 'Web Application Development', desc: 'High-throughput, reactive SaaS and cloud web portals', icon: Globe },
        { path: '/services/mobile-development', title: 'Mobile App Development', desc: 'Native and cross-platform iOS & Android mobile applications', icon: Smartphone },
        { path: '/services/api-development', title: 'API Development & Integration', desc: 'Secure REST/GraphQL APIs, microservices, and webhooks', icon: Workflow },
        { path: '/services/cloud-engineering', title: 'Cloud Engineering & DevOps', desc: 'AWS/GCP/Azure architecture, CI/CD, Kubernetes, and IaC', icon: Database },
        { path: '/services/software-modernization', title: 'Software Modernization', desc: 'Refactor monoliths to performant modern cloud microservices', icon: RefreshCw },
        { path: '/services/mvp-development', title: 'MVP Development', desc: 'Rapid prototype-to-production engineering for high-growth startups', icon: Rocket }
      ]
    },
    {
      id: 'product',
      label: 'Product',
      hasDropdown: true,
      items: [
        { path: '/product-development', title: 'Product Engineering', desc: 'End-to-end digital product design, architecture, and deployment', icon: Layers },
        { path: '/saas-development', title: 'SaaS Product Development', desc: 'Scalable multi-tenant architectures, billing systems, and cloud portals', icon: Globe },
        { path: '/services/ui-ux-design', title: 'UI/UX Design', desc: 'Human-centered interfaces, interaction design systems, and rapid wireframes', icon: Palette },
        { path: '/services/product-discovery', title: 'Product Discovery & Strategy', desc: 'Architecture blueprints, feasibility validation, and technical roadmaps', icon: Search }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      hasDropdown: true,
      items: [
        { path: '/services/enterprise-modernization', title: 'Enterprise Modernization', desc: 'Transform legacy business operations into agile digital systems', icon: Building2 },
        { path: '/services/startup-acceleration', title: 'Startup Acceleration', desc: 'Dedicated technical squads to build, launch, and scale MVPs', icon: Rocket },
        { path: '/services/dedicated-ai-teams', title: 'Dedicated AI Squads', desc: 'Full-stack AI engineers, data scientists, and ML architects on demand', icon: Users },
        { path: '/services/security-compliance', title: 'Security & Compliance', desc: 'Enterprise data sovereignty, SOC 2, HIPAA, and ISO guardrails', icon: ShieldCheck }
      ]
    },
    {
      id: 'industries',
      label: 'Industries',
      hasDropdown: true,
      items: [
        { path: '/services/fintech', title: 'FinTech', desc: 'Automated reconciliation, risk scoring, and banking APIs', icon: Briefcase },
        { path: '/services/edtech', title: 'EdTech', desc: 'Adaptive learning platforms, tutor agents, and LMS', icon: BookOpen },
        { path: '/services/healthtech', title: 'HealthTech', desc: 'HIPAA-compliant workflows, diagnostics, and patient portals', icon: Activity },
        { path: '/services/hrtech', title: 'HRTech', desc: 'Talent management, payroll, and employee experience tools', icon: Users },
        { path: '/services/retail-ecommerce', title: 'Retail & E-Commerce', desc: 'AI recommendation engines and omnichannel commerce', icon: Globe },
        { path: '/services/manufacturing', title: 'Manufacturing', desc: 'Predictive maintenance, supply chain, and IoT telemetry', icon: Building2 },
        { path: '/services/construction', title: 'Construction', desc: 'Site management, quotation systems, and vendor portals', icon: Building2 },
        { path: '/services/real-estate', title: 'Real Estate', desc: 'PropTech platforms, virtual tours, and tenant portals', icon: Building2 },
        { path: '/services/logistics', title: 'Logistics', desc: 'Route optimization, fleet dispatch, and warehouse automation', icon: Workflow },
        { path: '/services/hospitality', title: 'Hospitality', desc: 'Booking engines, guest management, and concierge bots', icon: Globe }
      ]
    },
    {
      id: 'work',
      label: 'Work',
      hasDropdown: true,
      items: [
        { path: '/case-studies', title: 'Case Studies', desc: 'How we engineered high-impact AI and enterprise systems', icon: FolderGit2 },
        { path: '/workplace-platform', title: 'Our Products', desc: 'Explore Fiverse Workplace Platform — desk booking & status management', icon: Layers, badge: 'Live Demo' },
        { path: '/client-success-stories', title: 'Client Success Stories', desc: 'Measurable ROI across startups and global enterprises', icon: TrendingUp }
      ]
    },
    {
      id: 'company',
      label: 'Company',
      hasDropdown: true,
      items: [
        { path: '/about', title: 'About Us', desc: 'Our story, AI-first philosophy, and 4 capability pillars', icon: Building2 },
        { path: '/why-fiverse', title: 'Why Fiverse', desc: 'What makes our problem-first engineering approach different', icon: ShieldCheck },
        { path: '/our-process', title: 'Our Process', desc: 'The 9-step lifecycle from discovery to compounding scale', icon: Workflow },
        { path: '/technology', title: 'Technology', desc: 'Our stack: Python, PyTorch, React, TypeScript, Rust, Cloud', icon: Cpu },
        { path: '/careers', title: 'Careers', desc: 'Join our team of senior AI researchers and software engineers', icon: Users },
        { path: '/contact', title: 'Contact', desc: 'Get in touch with our leadership & engineering team', icon: ArrowRight }
      ]
    },
    {
      id: 'insights',
      label: 'Insights',
      hasDropdown: true,
      items: [
        { path: '/blog', title: 'Blog', desc: 'Perspectives on agentic AI, software architecture, and scale', icon: FileText },
        { path: '/ai-insights', title: 'AI Insights', desc: 'Deep dives into RAG, LLM fine-tuning, and model evaluations', icon: Brain },
        { path: '/guides', title: 'Guides', desc: 'Architectural blueprints for modern digital product engineering', icon: BookOpen },
        { path: '/resources', title: 'Resources', desc: 'Downloadable templates, PRD workbooks, and checklists', icon: Database }
      ]
    }
  ];

  return (
    <div ref={navRef} className="sticky top-0 z-50 w-full bg-[#f7f8f4]/95 backdrop-blur-md border-b border-[#e5e9dc] transition-all">
      <header className="w-full sm:w-[92%] lg:w-[94%] xl:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 2xl:gap-8 min-w-0">
          <Link
            to="/"
            className="flex items-center shrink-0 group transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <FiverseLogo imgClassName="h-11 sm:h-12 md:h-13 lg:h-[56px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 text-[12.5px] 2xl:text-[13px] font-medium text-[#2d312e]">
            {navMenuItems.map(item => {
              const isOpen = activeDropdown === item.id;
              const isDirectActive = item.path ? location.pathname === item.path : false;
              const isChildActive = item.items?.some(sub => location.pathname === sub.path);
              const isActive = isDirectActive || isChildActive;

              if (!item.hasDropdown && item.path) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`px-2.5 2xl:px-3 py-1.5 rounded-full transition-colors cursor-pointer text-[12.5px] 2xl:text-[13px] ${
                      isActive
                        ? 'font-bold text-[#111210] bg-[#eaeede]'
                        : 'text-[#4d5247] hover:text-[#111210] hover:bg-[#ebefe2]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.id)}
                    className={`px-2.5 2xl:px-3 py-1.5 rounded-full transition-colors cursor-pointer text-[12.5px] 2xl:text-[13px] flex items-center gap-1 ${
                      isOpen || isActive
                        ? 'font-bold text-[#111210] bg-[#eaeede]'
                        : 'text-[#4d5247] hover:text-[#111210] hover:bg-[#ebefe2]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Dropdown Menu (CSS Transition) */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`absolute top-full left-0 mt-2 bg-white rounded-3xl border border-[#e2e6d9] shadow-2xl p-6 z-50 transition-all duration-150 animate-in fade-in slide-in-from-top-2 ${
                        item.id === 'ai'
                          ? 'w-[780px] -left-12 grid grid-cols-3 gap-3'
                          : item.id === 'industries'
                          ? 'w-[700px] -left-16 grid grid-cols-3 gap-3'
                          : item.id === 'solutions' || item.id === 'software' || item.id === 'product'
                          ? 'w-[600px] -left-8 grid grid-cols-2 gap-3'
                          : 'w-[480px] -left-4 grid grid-cols-2 gap-2.5'
                      }`}
                    >
                      <div className="col-span-full pb-2 mb-1 border-b border-[#f0f2eb] flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4d5247]">
                          {item.label} Capabilities & Services
                        </span>
                        <span className="text-[10px] bg-[#f0f4e4] text-[#2e6314] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <FiverseIcon className="w-3 h-3" />
                          <span>Fiverse Systems</span>
                        </span>
                      </div>

                      {item.items?.map((subItem, subIdx) => {
                        const Icon = subItem.icon;
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <Link
                            key={subIdx}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className={`group p-2.5 rounded-2xl flex items-start gap-3 transition-all duration-150 border cursor-pointer ${
                              isSubActive
                                ? 'bg-[#f4f6ed] border-[#c8ff28]'
                                : 'border-transparent hover:bg-[#f7f9f2] hover:border-[#e3e7db]'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#f4f6ed] group-hover:bg-[#111210] group-hover:text-[#c8ff28] text-[#111210] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:rotate-3">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5">
                                <p className="text-[12.5px] font-bold text-[#111210] leading-tight group-hover:text-black">
                                  {subItem.title}
                                </p>
                                {'badge' in subItem && subItem.badge && (
                                  <span className="text-[9px] bg-[#c8ff28] text-[#111210] font-extrabold px-1.5 py-0.2 rounded-sm">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#4d5247] line-clamp-1 leading-tight">
                                {subItem.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right Header CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onTalkToAI}
            className="hidden 2xl:inline-flex bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[12px] font-semibold px-3.5 py-2 rounded-full transition-all duration-150 shadow-2xs cursor-pointer items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Bot className="w-3.5 h-3.5 text-[#2e6314]" />
            <span>Talk to an AI Expert</span>
          </button>

          <button
            onClick={onStartProject}
            className="bg-[#111210] hover:bg-[#252823] text-white text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-5 py-2 min-h-[38px] rounded-full transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap flex items-center gap-1.5 group hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c8ff28] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile/Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-white border border-[#e2e6d9] text-[#111210] cursor-pointer hover:bg-[#f4f6ee] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-[#e2e6d9] px-4 pt-3 pb-8 space-y-4 max-h-[calc(100dvh-75px)] overflow-y-auto shadow-2xl transition-all duration-200">
          <div className="space-y-1">
            {navMenuItems.map(item => {
              if (!item.hasDropdown && item.path) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left py-3 px-3.5 rounded-xl font-bold text-[14px] text-[#111210] hover:bg-[#f7f8f4] active:bg-[#edf0e5] min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = mobileExpandedSection === item.id;

              return (
                <div key={item.id} className="border-b border-[#f1f3ec] pb-1">
                  <button
                    onClick={() => setMobileExpandedSection(isExpanded ? null : item.id)}
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl font-bold text-[14px] text-[#111210] hover:bg-[#f7f8f4] active:bg-[#edf0e5] min-h-[44px]"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#528d2c]' : 'text-[#8e9387]'}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pr-2 py-2 space-y-1 bg-[#fbfcfa] rounded-2xl my-1 border border-[#eef1e6] overflow-hidden transition-all duration-150">
                      {item.items?.map((subItem, sIdx) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={sIdx}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white active:bg-white text-[13px] font-medium text-[#2d312c] min-h-[42px] transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#f0f4e4] flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-[#528d2c]" />
                            </div>
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#e2e6d9] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onTalkToAI();
              }}
              className="w-full bg-[#f3f5ed] hover:bg-[#eaeede] border border-[#d8dcd0] text-[#111210] font-semibold text-[13px] py-3.5 rounded-2xl flex items-center justify-center gap-2 cursor-pointer min-h-[48px] shadow-2xs"
            >
              <Bot className="w-4 h-4 text-[#528d2c]" />
              <span>Talk to an AI Expert</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full bg-[#111210] hover:bg-[#222520] text-white font-bold text-[13px] py-3.5 rounded-2xl flex items-center justify-center gap-2 cursor-pointer min-h-[48px] shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

Navbar.displayName = 'Navbar';
