import React from 'react';
import ScrollHandler from '../components/ScrollHandler';
import { Routes, Route } from 'react-router-dom';
import HospitalDashboard from '../pages/hospital-dashboard';

function HospitalsDashboardRouteCenter() {
  return (
    <ScrollHandler>
      <Routes>
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      </Routes>
    </ScrollHandler>
  );
}

export default HospitalsDashboardRouteCenter;
