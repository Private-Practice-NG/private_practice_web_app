import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HospitalsDashboardRouteCenter from './routing-center/HospitalsDashboardRouteCenter';
import RegistrationSectionRouteCenter from './routing-center/RegistrationSectionRouteCenter';
import SpecialistDashboardRouteCenter from './routing-center/SpecialistDashboardRouteCenter';
import Unclassified_RouteCenter from './routing-center/Unclassified_RouteCenter';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler>
        <Routes>
          <Route path="/*" element={<RegistrationSectionRouteCenter />} />
          <Route path="/hospital/*" element={<HospitalsDashboardRouteCenter />} />
          <Route path="/specialist/*" element={<SpecialistDashboardRouteCenter />} />
          <Route path="/unclassified/*" element={<Unclassified_RouteCenter />} />
        </Routes>
      </ScrollHandler>
      {/* <PageNotFound /> */}
    </BrowserRouter>
  );
}

export default App;
