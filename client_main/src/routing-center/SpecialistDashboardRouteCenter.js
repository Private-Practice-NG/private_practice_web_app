import React from "react";
import { Routes, Route } from "react-router-dom";
import SpecialistDashboard from "../pages/dashboards/specialist-dashboard";
import SpecialistJobs from "../pages/dashboards/specialist-dashboard/pages/SpecialistJobs";
import HelpAndSupport from "../pages/dashboards/specialist-dashboard/pages/HelpAndSupport";
import SpecialistFavourites from "../pages/dashboards/specialist-dashboard/pages/SpecialistFavourites";
import JobsHunter from "../pages/dashboards/specialist-dashboard/pages/JobsHunter";
import PracticingProfile from "../pages/dashboards/specialist-dashboard/pages/PracticingProfile";
import JobInbox from "../pages/dashboards/specialist-dashboard/pages/JobInbox";
import SpecialistWallet from "../pages/dashboards/specialist-dashboard/pages/SpecialistWallet";
import JobDetails from "../pages/dashboards/specialist-dashboard/pages/JobDetails";

function SpecialistDashboardRouteCenter() {
  return (
    <Routes>
      <Route path="/specialist/dashboard" element={<SpecialistDashboard />} />
      {/* jobs route center */}
      <Route path="/specialist/jobs" element={<SpecialistJobs />}>
        <Route index element={<PracticingProfile />} />
        <Route path="jobs-hunter" element={<JobsHunter />} />
        <Route path="job-inbox" element={<JobInbox />} />
      </Route>
      <Route path="/specialist/jobs/job-details" element={<JobDetails />} />
      <Route path="/specialist/wallet" element={<SpecialistWallet />} />
      <Route path="/specialist/favourites" element={<SpecialistFavourites />} />
      <Route path="/specialist/helpsupport" element={<HelpAndSupport />} />
    </Routes>
  );
}

export default SpecialistDashboardRouteCenter;
