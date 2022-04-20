import MainHeader from "./MainHeader";
import Sidenav from "./Sidenav";

const DashboardContainer = ({ children, isHospital }) => {
  return (
    <div
      className="dashboard-container open-sans"
      style={{ backgroundColor: isHospital ? "#d1e9e1" : "#eaf1f8" }}>
      <Sidenav isHospital={isHospital} />
      <main>
        <MainHeader />
        <section style={{ height: "calc(100vh - 55px)", overflowY: "auto" }}>
          {children}
        </section>
      </main>
    </div>
  );
};
export default DashboardContainer;
