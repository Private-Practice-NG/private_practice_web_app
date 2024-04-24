import { BrowserRouter } from 'react-router-dom';
import HospitalsDashboardRouteCenter from './routing-center/HospitalsDashboardRouteCenter';
import RegistrationSectionRouteCenter from './routing-center/RegistrationSectionRouteCenter';
import SpecialistDashboardRouteCenter from './routing-center/SpecialistDashboardRouteCenter';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler>
        <RegistrationSectionRouteCenter />
        <HospitalsDashboardRouteCenter />
        <SpecialistDashboardRouteCenter />
      </ScrollHandler>
      {/* <PageNotFound /> */}
    </BrowserRouter>
  );
}

export default App;
