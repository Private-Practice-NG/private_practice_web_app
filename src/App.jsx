import { BrowserRouter } from 'react-router-dom';
import HospitalsDashboardRouteCenter from './routing-center/HospitalsDashboardRouteCenter';
import RegistrationSectionRouteCenter from './routing-center/RegistrationSectionRouteCenter';
import SpecialistDashboardRouteCenter from './routing-center/SpecialistDashboardRouteCenter';
import Unclassified_RouteCenter from './routing-center/Unclassified_RouteCenter';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler>
        <RegistrationSectionRouteCenter />
        <HospitalsDashboardRouteCenter />
        <SpecialistDashboardRouteCenter />
        <Unclassified_RouteCenter />
      </ScrollHandler>
      {/* <PageNotFound /> */}
    </BrowserRouter>
  );
}

export default App;
