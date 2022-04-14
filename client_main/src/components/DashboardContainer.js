import MainHeader from "./MainHeader";
import Sidenav from "./Sidenav";

const DashboardContainer = ({ children, navType }) => {
  return (
    <div className="dashboard-container open-sans">
      <Sidenav navType={navType} />
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
