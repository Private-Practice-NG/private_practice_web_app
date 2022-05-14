import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import DashboardContainer from "../../../../components/DashboardContainer";

const SpecialistJobs = () => {
  const jobNav = [
    {
      id: 1,
      name: "Job hunter",
      link: "/specialist/jobs/jobs-hunter",
    },
    {
      id: 2,
      name: "Practicing profile",
      link: "/specialist/jobs/practicing-profile",
    },
    {
      id: 3,
      name: "Job inbox",
      link: "/specialist/jobs/job-inbox",
    },
  ];

  return (
    <DashboardContainer>
      <div className="specialist-jobs">
        <section className="pt-5">
          <div className="d-flex align-items-center justify-content-center gap-4">
            {jobNav?.map(({ id, link, name }) => (
              <NavLink
                to={link}
                key={id}
                // ` `
                className={({ isActive }) =>
                  isActive
                    ? "montserrat shadow text-capitalize specialist-job-nav current"
                    : "montserrat shadow text-capitalize specialist-job-nav"
                }>
                {name}
              </NavLink>
            ))}
          </div>
        </section>
        <Outlet />
      </div>
    </DashboardContainer>
  );
};
export default SpecialistJobs;
