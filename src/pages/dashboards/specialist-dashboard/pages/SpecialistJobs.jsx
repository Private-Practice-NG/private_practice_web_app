import { Outlet, Link } from "react-router-dom";
import DashboardContainer from "../../../../components/DashboardContainer";

const SpecialistJobs = () => {
  const jobNav = [
    {
      id: 1,
      name: "Job hunter",
      link: "jobs-hunter",
    },
    {
      id: 2,
      name: "Practicing profile",
      link: "",
    },
    {
      id: 3,
      name: "Job inbox",
      link: "job-inbox",
    },
  ];

  return (
    <DashboardContainer>
      <div className="specialist-jobs">
        <section className="pt-5">
          <div className="d-flex align-items-center justify-content-center gap-4">
            {jobNav?.map(({ id, link, name }) => (
              <Link
                to={link}
                key={id}
                className="montserrat shadow specialist-job-nav">
                {name}
              </Link>
            ))}
          </div>
        </section>

        <Outlet />
      </div>
    </DashboardContainer>
  );
};
export default SpecialistJobs;
