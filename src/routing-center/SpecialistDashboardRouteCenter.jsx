import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SpecialistDashboard from '../pages/dashboards/specialist-dashboard';
import SpecialistJobs from '../pages/dashboards/specialist-dashboard/pages/SpecialistJobs';
import HelpAndSupport from '../pages/dashboards/specialist-dashboard/pages/HelpAndSupport';
import SpecialistFavourites from '../pages/dashboards/specialist-dashboard/pages/SpecialistFavourites';
import JobsHunter from '../pages/dashboards/specialist-dashboard/pages/JobsHunter';
import PracticingProfile from '../pages/dashboards/specialist-dashboard/pages/PracticingProfile';
import JobInbox from '../pages/dashboards/specialist-dashboard/pages/JobInbox';
import SpecialistWallet from '../pages/dashboards/specialist-dashboard/pages/SpecialistWallet';
import JobDetails from '../pages/dashboards/specialist-dashboard/pages/JobDetails';

function SpecialistDashboardRouteCenter() {
  return (
    <Routes>
      <Route path="dashboard" element={<SpecialistDashboard />} />
      <Route path="jobs" element={<SpecialistJobs />}>
        <Route index element={<PracticingProfile />} />
        <Route path="jobs-hunter" element={<JobsHunter />} />
        <Route path="job-inbox" element={<JobInbox />} />
      </Route>
      <Route path="jobs/job-details" element={<JobDetails />} />
      <Route path="wallet" element={<SpecialistWallet />} />
      <Route path="favourites" element={<SpecialistFavourites />} />
      <Route path="helpsupport" element={<HelpAndSupport />} />
    </Routes>
  );
}

export default SpecialistDashboardRouteCenter;
