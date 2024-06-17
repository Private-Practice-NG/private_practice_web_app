import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HospitalDashboard from '../pages/dashboards/hospital-dashboard/index';
import Emergency from '../pages/dashboards/hospital-dashboard/pages/Emergency';
import EmergencyPayment from '../pages/dashboards/hospital-dashboard/pages/EmergencyPayment';
import JobPreview from '../pages/dashboards/hospital-dashboard/pages/JobPreview';
import JobOutbox from '../pages/dashboards/hospital-dashboard/pages/JobOutbox';
import JobsOutboxClosedJobs from '../pages/dashboards/hospital-dashboard/components/JobsOutboxClosedJobs';
import JobsOutboxCompletedJobs from '../pages/dashboards/hospital-dashboard/components/JobsOutboxCompletedJobs';
import JobsOutboxOpenJobs from '../pages/dashboards/hospital-dashboard/components/JobsOutboxOpenJobs';
import JobsOutboxActiveJobs from '../pages/dashboards/hospital-dashboard/components/JobsOutboxActiveJobs';
import Statistics from '../pages/dashboards/hospital-dashboard/pages/Statistics';
import HospitalWallet from '../pages/dashboards/hospital-dashboard/pages/HospitalWallet';
import Calender from '../pages/dashboards/hospital-dashboard/pages/Calender';
import SiteGuide from '../pages/dashboards/hospital-dashboard/pages/SiteGuide';
import FindASpecialist from '../pages/dashboards/hospital-dashboard/pages/FindASpecialist';
import CreateJobsPage from '../pages/dashboards/hospital-dashboard/pages/CreateJobsPage';
import TreatmentDetails from '../pages/dashboards/hospital-dashboard/pages/TreatmentDetails';
import JobPayment from '../pages/dashboards/hospital-dashboard/pages/JobPayment';
import HospitalProfile from '../pages/dashboards/hospital-dashboard/pages/HospitalProfile';
import JobsHome from '../pages/dashboards/hospital-dashboard/pages/JobsHome';
import SpecialistNearYou from '../pages/dashboards/hospital-dashboard/pages/SpecialistNearYou';
import JobPostSuccess from '../pages/dashboards/hospital-dashboard/pages/JobPostSuccess';
import HospitalFavourites from '../pages/dashboards/hospital-dashboard/pages/HospitalFavourites';
import HospitalHelpSupport from '../pages/dashboards/hospital-dashboard/pages/HospitalHelpSupport';

function HospitalsDashboardRouteCenter() {
  return (
    <Routes>
      <Route path="dashboard" element={<HospitalDashboard />} />
      <Route path="jobs" element={<JobsHome />} />
      <Route path="jobs/emergency" element={<Emergency />} />
      <Route path="jobs/emergency-payment" element={<EmergencyPayment />} />
      <Route path="jobs/job-outbox" element={<JobOutbox />}>
        <Route path="closed-jobs" element={<JobsOutboxClosedJobs />} />
        <Route path="completed-jobs" element={<JobsOutboxCompletedJobs />} />
        <Route path="open-jobs" element={<JobsOutboxOpenJobs />} />
        <Route path="active-jobs" element={<JobsOutboxActiveJobs />} />
      </Route>
      <Route path="statistics" element={<Statistics />} />
      <Route path="wallet" element={<HospitalWallet />} />
      <Route path="favourites" element={<HospitalFavourites />} />
      <Route path="calender" element={<Calender />} />
      <Route path="helpsupport" element={<HospitalHelpSupport />} />
      <Route path="site-guide" element={<SiteGuide />} />
      <Route path="jobs/find-specialist" element={<FindASpecialist />} />
      <Route path="jobs/create-job" element={<CreateJobsPage />} />
      <Route path="jobs/treatment-details" element={<TreatmentDetails />} />
      <Route path="jobs/payment" element={<JobPayment />} />
      <Route path="jobs/specialist-near-you" element={<SpecialistNearYou />} />
      <Route path="jobs/job-posted-successfully" element={<JobPostSuccess />} />
      <Route path="jobs/job-preview" element={<JobPreview />} />
      <Route path="hospital-profile" element={<HospitalProfile />} />
    </Routes>
  );
}

export default HospitalsDashboardRouteCenter;
