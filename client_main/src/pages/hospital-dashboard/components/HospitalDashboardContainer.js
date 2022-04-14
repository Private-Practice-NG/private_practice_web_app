import MainHeader from "./MainHeader";
import Sidenav from "./Sidenav";

const HospitalDashboardContainer = ({ children }) => {
  return (
    <div className="dashboard-container open-sans">
      <Sidenav />
      <main>
        <MainHeader />
        <section style={{ height: "calc(100vh - 55px)", overflowY: "auto" }}>
          {children}
        </section>
      </main>
    </div>
  );
};
export default HospitalDashboardContainer;
