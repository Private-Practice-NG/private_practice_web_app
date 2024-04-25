// import React from "react";
import { Routes, Route } from 'react-router-dom';
import PolicyPage from '../pages/policy-page';
import TermsPage from '../pages/terms-page';

function SpecialistDashboardRouteCenter() {
  return (
    <Routes>
      <Route path='/policy' element={<PolicyPage />} />
      <Route path='/terms' element={<TermsPage />} />
    </Routes>
  );
}

export default SpecialistDashboardRouteCenter;
