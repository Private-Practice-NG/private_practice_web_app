import React from "react";
import LeadBanner from "./components/LeadBanner";
import GoalsArea from "./components/GoalsArea";
import HowItWorksSection from "./components/HowItWorksSection";
import TopSpecialistSection from "./components/TopSpecialistSection";
import VideoArea from "./components/VideoArea";
import TopNavbar from "../../components/TopNavbar";
import MainFooter from "../../components/MainFooter";

function LandingPage() {
  return (
    <main>
      <TopNavbar />
      <section style={{ transform: "translateY(-94.5px)" }}>
        <LeadBanner />
        <GoalsArea />
        <HowItWorksSection />
        <TopSpecialistSection />
        <VideoArea />
      </section>
      <MainFooter />
    </main>
  );
}

export default LandingPage;
