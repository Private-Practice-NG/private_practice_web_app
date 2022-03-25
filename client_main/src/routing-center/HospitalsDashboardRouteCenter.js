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
import CreateJobsPage from "../pages/hospital-dashboard/pages/CreateJobsPage";
import JobOutbox from "../pages/hospital-dashboard/pages/JobOutbox";
import Emergency from "../pages/hospital-dashboard/pages/Emergency";
import JobPostSuccess from "../pages/hospital-dashboard/pages/JobPostSuccess";
import JobsOutboxActiveJobs from "../pages/hospital-dashboard/components/JobsOutboxActiveJobs";
import JobsOutboxCompletedJobs from "../pages/hospital-dashboard/components/JobsOutboxCompletedJobs";
import JobsOutboxClosedJobs from "../pages/hospital-dashboard/components/JobsOutboxClosedJobs";
import JobsOutboxOpenJobs from "../pages/hospital-dashboard/components/JobsOutboxOpenJobs";

function HospitalsDashboardRouteCenter() {
  return (
    <ScrollHandler>
      <Routes>
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/jobs" element={<JobsHome />} />
        <Route path="/jobs/emergency" element={<Emergency />} />
        <Route path="/jobs/job-outbox" element={<JobOutbox />}>
          <Route
            path="/jobs/job-outbox/closed-jobs"
            element={<JobsOutboxClosedJobs />}
          />
          <Route
            path="/jobs/job-outbox/completed-jobs"
            element={<JobsOutboxCompletedJobs />}
          />
          <Route
            path="/jobs/job-outbox/open-jobs"
            element={<JobsOutboxOpenJobs />}
          />
          <Route
            path="/jobs/job-outbox/active-jobs"
            element={<JobsOutboxActiveJobs />}
          />
        </Route>
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/helpsupport" element={<HelpSupport />} />
        <Route path="/site-guide" element={<SiteGuide />} />
        <Route path="/jobs/create-a-job" element={<CreateJobsPage />} />
        <Route
          path="/jobs/job-posted-successfully"
          element={<JobPostSuccess />}
        />
      </Routes>
    </ScrollHandler>
  );
}

export default HospitalsDashboardRouteCenter;