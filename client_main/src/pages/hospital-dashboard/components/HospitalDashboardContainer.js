import MainHeader from "./MainHeader";
import Sidenav from "./Sidenav";

const HospitalDashboardContainer = ({ children }) => {
  return (
    <div className="dashboard-container open-sans">
      <Sidenav />

      <main>
        <MainHeader />
        {children}
      </main>
    </div>
  );
};
export default HospitalDashboardContainer;
