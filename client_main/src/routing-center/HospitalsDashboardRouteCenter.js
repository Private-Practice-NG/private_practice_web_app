import React from "react";
import ScrollHandler from "../components/ScrollHandler";
import { Routes, Route } from "react-router-dom";
import HospitalDashboard from "../pages/hospital-dashboard";
import JobsHome from "../pages/hospital-dashboard/pages/JobsHome";
import Statistics from "../pages/hospital-dashboard/pages/Statistics";
import Wallet from "../pages/hospital-dashboard/pages/Wallet";
import Favourites from "../pages/hospital-dashboard/pages/Favourites";
import Calender from "../pages/hospital-dashboard/pages/Calender";
import HelpSupport from "../pages/hospital-dashboard/pages/HelpSupport";
import SiteGuide from "../pages/hospital-dashboard/pages/SiteGuide";
import HospitalDashboardContainer from "../pages/hospital-dashboard/components/HospitalDashboardContainer";
import Emergency from "../pages/hospital-dashboard/pages/Emergency";
import JobOutbox from "../pages/hospital-dashboard/pages/JobOutbox";

function HospitalsDashboardRouteCenter() {
  return (
    <ScrollHandler>
      <HospitalDashboardContainer>
        <Routes>
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/jobs" element={<JobsHome />} />
          <Route path="/jobs/emergency" element={<Emergency />} />
          <Route path="/jobs/job-outbox" element={<JobOutbox />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/helpsupport" element={<HelpSupport />} />
          <Route path="/site-guide" element={<SiteGuide />} />
        </Routes>
      </HospitalDashboardContainer>
    </ScrollHandler>
  );
}

export default HospitalsDashboardRouteCenter;
