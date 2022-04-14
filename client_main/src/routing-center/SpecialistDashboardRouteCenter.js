import React from "react";
import { Routes, Route } from "react-router-dom";
import SpecialistDashboard from "../pages/dashboards/specialist-dashboard";
import SpecialistJobs from "../pages/dashboards/specialist-dashboard/pages/SpecialistJobs";
import HelpAndSupport from "../pages/dashboards/specialist-dashboard/pages/HelpAndSupport";
import SpecialistFavourites from "../pages/dashboards/specialist-dashboard/pages/SpecialistFavourites";

function SpecialistDashboardRouteCenter() {
  return (
    <Routes>
      <Route path="/specialist/dashboard" element={<SpecialistDashboard />} />
      <Route path="/specialist/jobs" element={<SpecialistJobs />} />
      <Route path="/specialist/favourites" element={<SpecialistFavourites />} />
      <Route path="/specialist/helpsupport" element={<HelpAndSupport />} />
    </Routes>
  );
}

export default SpecialistDashboardRouteCenter;
