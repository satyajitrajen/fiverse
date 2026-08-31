import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/Motion';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServiceDetailView } from './components/ServiceDetailView';
import { CompanyViews } from './components/CompanyViews';
import { WorkAndInsightsViews } from './components/WorkAndInsightsViews';
import { HeroSection } from './components/HeroSection';
import { CustomStatusesSection } from './components/CustomStatusesSection';
import { FlexOfficesHubSection } from './components/FlexOfficesHubSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { PlatformAndSecuritySection } from './components/PlatformAndSecuritySection';
import { PreFooterCTA } from './components/PreFooterCTA';
import { Footer } from './components/Footer';
import { ActionModal } from './components/Modals';
import { SEOHead } from './components/SEOHead';

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'apply' | 'demo' | 'beta';
  }>({
    isOpen: false,
    title: '',
    type: 'demo'
  });

  const openModal = (title: string, type: 'apply' | 'demo' | 'beta' = 'demo') => {
    setModalState({
      isOpen: true,
      title,
      type
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgressBar />
      {/* Accessible Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#111210] focus:text-[#c8ff28] focus:px-5 focus:py-2.5 focus:rounded-xl focus:font-bold focus:text-[13px] focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#c8ff28]"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#f7f8f4] text-[#111210] flex flex-col justify-between selection:bg-[#c8ff28] selection:text-[#111210]">
        {/* Navigation Header with Mega-Menu Navigation */}
        <Navbar
          onStartProject={() => openModal('Start a Project with Fiverse', 'demo')}
          onTalkToAI={() => openModal('Talk to an AI Expert', 'demo')}
        />

        {/* Main Content Router */}
        <main id="main-content" className="flex-1 w-full flex flex-col" tabIndex={-1}>
          <Routes>
            {/* 1. Official Homepage */}
            <Route
              path="/"
              element={
                <HomePage
                  onStartProject={() => openModal('Start Your Project With Fiverse', 'demo')}
                  onTalkToAI={() => openModal('Talk to Fiverse AI Engineering Team', 'demo')}
                  onExploreServices={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              }
            />

            {/* 2. About Page */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onStartConversation={() => openModal('Start a Conversation with Fiverse', 'demo')}
                  onExploreServices={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              }
            />

            {/* 3. Priority SEO Service Pages */}
            <Route
              path="/ai-development-company"
              element={
                <ServiceDetailView
                  serviceId="ai-development"
                  onStartProject={() => openModal('Start AI Project', 'demo')}
                  onTalkToAI={() => openModal('Talk to an AI Engineer', 'demo')}
                />
              }
            />
            <Route
              path="/agentic-ai-development"
              element={
                <ServiceDetailView
                  serviceId="agentic-ai"
                  onStartProject={() => openModal('Build Agentic AI Solution', 'demo')}
                  onTalkToAI={() => openModal('Talk to an Agentic AI Architect', 'demo')}
                />
              }
            />
            <Route
              path="/ai-agent-development"
              element={
                <ServiceDetailView
                  serviceId="ai-agents"
                  onStartProject={() => openModal('Build Custom AI Agent', 'demo')}
                  onTalkToAI={() => openModal('Talk to an AI Agent Specialist', 'demo')}
                />
              }
            />
            <Route
              path="/generative-ai-development"
              element={
                <ServiceDetailView
                  serviceId="generative-ai"
                  onStartProject={() => openModal('Start Generative AI Project', 'demo')}
                  onTalkToAI={() => openModal('Talk to a GenAI Engineer', 'demo')}
                />
              }
            />
            <Route
              path="/llm-development"
              element={
                <ServiceDetailView
                  serviceId="llm-development"
                  onStartProject={() => openModal('Discuss LLM Project', 'demo')}
                  onTalkToAI={() => openModal('Talk to an LLM Architect', 'demo')}
                />
              }
            />
            <Route
              path="/custom-software-development"
              element={
                <ServiceDetailView
                  serviceId="custom-software"
                  onStartProject={() => openModal('Discuss Custom Software Requirement', 'demo')}
                  onTalkToAI={() => openModal('Talk to a Principal Engineer', 'demo')}
                />
              }
            />
            <Route
              path="/product-development"
              element={
                <ServiceDetailView
                  serviceId="product-development"
                  onStartProject={() => openModal('Start Product Discovery', 'demo')}
                  onTalkToAI={() => openModal('Talk to a Product Lead', 'demo')}
                />
              }
            />
            <Route
              path="/saas-development"
              element={
                <ServiceDetailView
                  serviceId="saas-development"
                  onStartProject={() => openModal('Build Your SaaS Product', 'demo')}
                  onTalkToAI={() => openModal('Schedule SaaS Architecture Review', 'demo')}
                />
              }
            />

            {/* Dynamic Services Route */}
            <Route
              path="/services/:serviceId"
              element={
                <ServiceDetailView
                  onStartProject={() => openModal('Start Project Request', 'demo')}
                  onTalkToAI={() => openModal('Talk to an AI Expert', 'demo')}
                />
              }
            />

            {/* 4. Company Views */}
            <Route
              path="/why-fiverse"
              element={
                <CompanyViews
                  activeSection="why"
                  onStartProject={() => openModal('Start Project With Fiverse', 'demo')}
                />
              }
            />
            <Route
              path="/our-process"
              element={
                <CompanyViews
                  activeSection="process"
                  onStartProject={() => openModal('Start The Journey', 'demo')}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <CompanyViews
                  activeSection="technology"
                  onStartProject={() => openModal('Discuss Technical Stack', 'demo')}
                />
              }
            />
            <Route
              path="/careers"
              element={
                <CompanyViews
                  activeSection="careers"
                  onStartProject={() => openModal('Apply to Fiverse', 'apply')}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <CompanyViews
                  activeSection="contact"
                  onStartProject={() => openModal('Start Conversation', 'demo')}
                />
              }
            />

            {/* 5. Work & Insights Views */}
            <Route
              path="/case-studies"
              element={
                <WorkAndInsightsViews
                  activeView="casestudies"
                  onStartProject={() => openModal('Discuss Your Project', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/our-products"
              element={
                <WorkAndInsightsViews
                  activeView="products"
                  onStartProject={() => openModal('Discuss Product Idea', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/client-success-stories"
              element={
                <WorkAndInsightsViews
                  activeView="success-stories"
                  onStartProject={() => openModal('Discuss Success Metrics', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/blog"
              element={
                <WorkAndInsightsViews
                  activeView="blog"
                  onStartProject={() => openModal('Subscribe to Insights', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/ai-insights"
              element={
                <WorkAndInsightsViews
                  activeView="ai-insights"
                  onStartProject={() => openModal('Connect on AI Research', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/guides"
              element={
                <WorkAndInsightsViews
                  activeView="guides"
                  onStartProject={() => openModal('Request Custom Guide', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />
            <Route
              path="/resources"
              element={
                <WorkAndInsightsViews
                  activeView="resources"
                  onStartProject={() => openModal('Request Resource Template', 'demo')}
                  onExploreProduct={() => window.location.href = '/workplace-platform'}
                />
              }
            />

            {/* 6. Workplace Platform Product Demo */}
            <Route
              path="/workplace-platform"
              element={
                <>
                  <SEOHead
                    title="Hybrid Workplace Management Platform & Desk Booking | Fiverse"
                    description="Optimize office space, desk booking, custom attendance schedules, and team workload analytics for hybrid companies with Fiverse Workplace Platform."
                    canonicalPath="/workplace-platform"
                    breadcrumbs={[
                      { name: 'Home', url: '/' },
                      { name: 'Products', url: '/our-products' },
                      { name: 'Workplace Platform', url: '/workplace-platform' }
                    ]}
                  />
                  <HeroSection
                    onApplyClick={() => openModal('apply for 2 free months', 'apply')}
                  />
                  <section id="features">
                    <CustomStatusesSection
                      onBetaClick={() => openModal('sign up for beta launch', 'beta')}
                    />
                  </section>
                  <FlexOfficesHubSection
                    onRequestDemoClick={() => openModal('request a demo', 'demo')}
                  />
                  <AnalyticsSection
                    onApplyClick={() => openModal('apply for 2 free months', 'apply')}
                  />
                  <PlatformAndSecuritySection />
                  <section id="pricing">
                    <PreFooterCTA
                      onBookDemoClick={() => openModal('book a demo', 'demo')}
                    />
                  </section>
                </>
              }
            />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Consultation Modal */}
        <ActionModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          title={modalState.title}
          type={modalState.type}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
