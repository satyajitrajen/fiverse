import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/Motion';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

// Code-split sub-routes to keep initial bundle size tiny and TBT at zero
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ServiceDetailView = lazy(() => import('./components/ServiceDetailView').then(m => ({ default: m.ServiceDetailView })));
const CompanyViews = lazy(() => import('./components/CompanyViews').then(m => ({ default: m.CompanyViews })));
const WorkAndInsightsViews = lazy(() => import('./components/WorkAndInsightsViews').then(m => ({ default: m.WorkAndInsightsViews })));
const ActionModal = lazy(() => import('./components/Modals').then(m => ({ default: m.ActionModal })));

// Workplace Platform Sub-Components
const WorkplacePlatformPage = lazy(() => import('./components/WorkplacePlatformPage').then(m => ({ default: m.WorkplacePlatformPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[60vh] w-full flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#c8ff28] border-t-transparent animate-spin" />
  </div>
);

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
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#111210] focus:text-[#c8ff28] focus:px-5 focus:py-2.5 focus:rounded-xl focus:font-bold focus:text-[13px] focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#c8ff28]"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#f7f8f4] text-[#111210] flex flex-col justify-between selection:bg-[#c8ff28] selection:text-[#111210]">
        {/* Navigation Header */}
        <Navbar
          onStartProject={() => openModal('Start a Project with Fiverse', 'demo')}
          onTalkToAI={() => openModal('Talk to an AI Expert', 'demo')}
        />

        {/* Main Content Router with Lazy Suspense */}
        <main id="main-content" className="flex-1 w-full flex flex-col" tabIndex={-1}>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              {/* 1. Official Homepage (Fast Inlined Entry) */}
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
                  <WorkplacePlatformPage
                    onOpenModal={openModal}
                  />
                }
              />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Consultation Modal - Loaded lazily on interaction */}
        {modalState.isOpen && (
          <Suspense fallback={null}>
            <ActionModal
              isOpen={modalState.isOpen}
              onClose={closeModal}
              title={modalState.title}
              type={modalState.type}
            />
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
