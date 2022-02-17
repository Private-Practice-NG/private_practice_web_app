import React from 'react';
import LeadBanner from './components/LeadBanner';
import GoalsArea from './components/GoalsArea';
import HowItWorksSection from './components/HowItWorksSection';
import TopSpecialistSection from './components/TopSpecialistSection';
import VideoArea from './components/VideoArea';

function LandingPage() {
  return (
    <main style={{ transform: 'translateY(-94.5px)' }}>
      <LeadBanner />
      <GoalsArea />
      <HowItWorksSection />
      <TopSpecialistSection />
      <VideoArea />
    </main>
  );
}

export default LandingPage;
