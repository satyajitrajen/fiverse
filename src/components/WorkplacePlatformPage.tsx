import React from 'react';
import { SEOHead } from './SEOHead';
import { HeroSection } from './HeroSection';
import { CustomStatusesSection } from './CustomStatusesSection';
import { FlexOfficesHubSection } from './FlexOfficesHubSection';
import { AnalyticsSection } from './AnalyticsSection';
import { PlatformAndSecuritySection } from './PlatformAndSecuritySection';
import { PreFooterCTA } from './PreFooterCTA';

interface WorkplacePlatformPageProps {
  onOpenModal: (title: string, type: 'apply' | 'demo' | 'beta') => void;
}

export const WorkplacePlatformPage: React.FC<WorkplacePlatformPageProps> = ({ onOpenModal }) => {
  return (
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
        onApplyClick={() => onOpenModal('apply for 2 free months', 'apply')}
      />
      <section id="features">
        <CustomStatusesSection
          onBetaClick={() => onOpenModal('sign up for beta launch', 'beta')}
        />
      </section>
      <FlexOfficesHubSection
        onRequestDemoClick={() => onOpenModal('request a demo', 'demo')}
      />
      <AnalyticsSection
        onApplyClick={() => onOpenModal('apply for 2 free months', 'apply')}
      />
      <PlatformAndSecuritySection />
      <section id="pricing">
        <PreFooterCTA
          onBookDemoClick={() => onOpenModal('book a demo', 'demo')}
        />
      </section>
    </>
  );
};

export default WorkplacePlatformPage;
