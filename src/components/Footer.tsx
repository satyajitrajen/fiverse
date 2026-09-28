import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FiverseLogo } from './Logos';
import { ArrowUpRight, ShieldCheck, Mail, Lock } from 'lucide-react';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="w-full bg-[#f1f4ea] border-t border-[#e2e6d8] pt-16 pb-12 text-[#2d312c] mt-16">
      <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Top Branding & Direct Inquiry Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-[#e1e5d7]">
          <div className="space-y-3 max-w-xl">
            <Link to="/" className="inline-block transition-transform hover:scale-[1.02]">
              <FiverseLogo imgClassName="h-10 sm:h-11 w-auto object-contain" />
            </Link>
            <p className="text-[13px] sm:text-[14px] text-[#3a4035] leading-relaxed">
              Fiverse Systems is an AI-first product engineering company that designs, builds and scales intelligent software, AI agents, SaaS platforms and enterprise applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shrink-0">
            <div className="bg-white px-5 py-3 rounded-2xl border border-[#e2e6d8] shadow-2xs space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Inquiries</span>
              </span>
              <a
                href="mailto:hi@fiversesystems.com"
                className="text-[14px] font-bold text-[#111210] hover:text-[#2e6314] transition-colors"
              >
                hi@fiversesystems.com
              </a>
            </div>

            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#3a4035]">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/company/fiversesystems' },
                { name: 'GitHub', url: 'https://github.com/fiversesystems' },
                { name: 'X / Twitter', url: 'https://twitter.com/fiversesystems' }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white border border-[#e2e6d8] hover:border-[#111210] hover:text-[#111210] transition-all text-[12px] flex items-center gap-1"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#3a4035]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Column Rich Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-[13px]">
          {/* Col 1: AI Engineering */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">AI Engineering</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/ai-development-company" className="hover:text-[#111210] transition-colors">AI Development</Link></li>
              <li><Link to="/ai-agent-development" className="hover:text-[#111210] transition-colors">AI Agents</Link></li>
              <li><Link to="/agentic-ai-development" className="hover:text-[#111210] transition-colors">Agentic AI</Link></li>
              <li><Link to="/generative-ai-development" className="hover:text-[#111210] transition-colors">Generative AI</Link></li>
              <li><Link to="/llm-development" className="hover:text-[#111210] transition-colors">LLM Development</Link></li>
              <li><Link to="/services/rag-development" className="hover:text-[#111210] transition-colors">RAG Systems</Link></li>
              <li><Link to="/services/ai-model-development" className="hover:text-[#111210] transition-colors">Custom AI Models</Link></li>
              <li><Link to="/services/enterprise-ai" className="hover:text-[#111210] transition-colors">Enterprise AI</Link></li>
            </ul>
          </div>

          {/* Col 2: Product & Software */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">Engineering</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/product-development" className="hover:text-[#111210] transition-colors">Product Engineering</Link></li>
              <li><Link to="/custom-software-development" className="hover:text-[#111210] transition-colors">Custom Software</Link></li>
              <li><Link to="/saas-development" className="hover:text-[#111210] transition-colors">SaaS Platforms</Link></li>
              <li><Link to="/services/mvp-development" className="hover:text-[#111210] transition-colors">MVP Development</Link></li>
              <li><Link to="/services/web-applications" className="hover:text-[#111210] transition-colors">Web Applications</Link></li>
              <li><Link to="/services/mobile-development" className="hover:text-[#111210] transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services/enterprise-software" className="hover:text-[#111210] transition-colors">Enterprise Software</Link></li>
              <li><Link to="/services/cloud-engineering" className="hover:text-[#111210] transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">Solutions</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/services/enterprise-modernization" className="hover:text-[#111210] transition-colors">Modernization</Link></li>
              <li><Link to="/services/startup-acceleration" className="hover:text-[#111210] transition-colors">Startup Acceleration</Link></li>
              <li><Link to="/services/dedicated-ai-teams" className="hover:text-[#111210] transition-colors">Dedicated AI Squads</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-[#111210] transition-colors">AI Automation</Link></li>
              <li><Link to="/services/api-development" className="hover:text-[#111210] transition-colors">API Integrations</Link></li>
              <li><Link to="/services/security-compliance" className="hover:text-[#111210] transition-colors">Security & Guardrails</Link></li>
              <li><Link to="/workplace-platform" className="hover:text-[#111210] transition-colors">Workplace Platform</Link></li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">Industries</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/services/fintech" className="hover:text-[#111210] transition-colors">FinTech & Banking</Link></li>
              <li><Link to="/services/healthtech" className="hover:text-[#111210] transition-colors">Healthcare & HealthTech</Link></li>
              <li><Link to="/services/retail-ecommerce" className="hover:text-[#111210] transition-colors">Retail & E-Commerce</Link></li>
              <li><Link to="/services/construction" className="hover:text-[#111210] transition-colors">Construction</Link></li>
              <li><Link to="/services/real-estate" className="hover:text-[#111210] transition-colors">Real Estate & PropTech</Link></li>
              <li><Link to="/services/logistics" className="hover:text-[#111210] transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/services/edtech" className="hover:text-[#111210] transition-colors">Education & EdTech</Link></li>
            </ul>
          </div>

          {/* Col 5: Company & Work */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">Company & Work</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/about" className="hover:text-[#111210] transition-colors">About Fiverse</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#111210] transition-colors">Case Studies</Link></li>
              <li><Link to="/client-success-stories" className="hover:text-[#111210] transition-colors">Client Results</Link></li>
              <li><Link to="/why-fiverse" className="hover:text-[#111210] transition-colors">Why Fiverse</Link></li>
              <li><Link to="/our-process" className="hover:text-[#111210] transition-colors">Our Process</Link></li>
              <li><Link to="/technology" className="hover:text-[#111210] transition-colors">Technology Stack</Link></li>
              <li><Link to="/careers" className="hover:text-[#111210] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#111210] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 6: Insights & Resources */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111210]">Insights & Proof</h4>
            <ul className="space-y-2 text-[#3a4035]">
              <li><Link to="/blog" className="hover:text-[#111210] transition-colors">Engineering Blog</Link></li>
              <li><Link to="/ai-insights" className="hover:text-[#111210] transition-colors">AI Insights</Link></li>
              <li><Link to="/guides" className="hover:text-[#111210] transition-colors">Architecture Guides</Link></li>
              <li><Link to="/resources" className="hover:text-[#111210] transition-colors">PRD Resources</Link></li>
              <li>
                <div className="pt-2 text-[11px] text-[#2e6314] font-semibold bg-[#e7edd9] p-2.5 rounded-xl border border-[#d6dfc3]">
                  <p className="flex items-center gap-1 font-bold"><Lock className="w-3 h-3" /> 100% IP Ownership</p>
                  <p className="text-[10px] text-[#3a4035] mt-0.5">All source code, models & IP transferred to client upon milestone completion.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Security Details */}
        <div className="pt-8 border-t border-[#e1e5d7] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#3a4035]">
          <p>© {new Date().getFullYear()} Fiverse Systems Inc. All rights reserved. Registered Technology Enterprise.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/services/security-compliance" className="hover:text-[#111210] transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2e6314]" />
              <span>Security & Data Governance</span>
            </Link>
            <Link to="/contact" className="hover:text-[#111210] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#111210] transition-colors">Terms of Service</Link>
            <span className="text-[#3a4035]">Global Delivery • US, UK, EU, UAE, APAC</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
