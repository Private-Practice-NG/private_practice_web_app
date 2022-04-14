import MainHeader from "./MainHeader";
import Sidenav from "./Sidenav";

const DashboardContainer = ({ children, navType }) => {
  return (
    <div className="dashboard-container open-sans">
      <Sidenav navType={navType} />
      <main>
        <MainHeader />
        {children}
      </main>
    </div>
  );
};
export default DashboardContainer;
