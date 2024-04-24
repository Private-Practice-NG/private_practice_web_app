import IncomingJobs from "../components/IncomingJobs";
import Jobs from "../components/Jobs";

const JobInbox = () => {
  const jobs = [
    {
      id: 1,
      title: "Occasional Itching eyes",
      info: "I need an optician to check on a patient’s eye, he experiences blurriness after 10 hours of consistently working with his computer.",
      hospital: "Kings Care Hospital",
      location: "Wuse Zone 4, Abuja.",
      date: "June 22, 2021 - June 24, 2021",
    },
    {
      id: 2,
      title: "Occasional Itching eyes",
      info: "I need an optician to check on a patient’s eye, he experiences blurriness after 10 hours of consistently working with his computer.",
      hospital: "Kings Care Hospital",
      location: "Wuse Zone 4, Abuja.",
      date: "June 22, 2021 - June 24, 2021",
    },
  ];

  return (
    <section className="d-flex flex-column gap-5 job-inbox">
      <Jobs jobs={jobs} title="Ongoing jobs" howMany={2} isOngoing />
      <IncomingJobs />
      <Jobs jobs={jobs} title="Processing jobs" howMany={2} isProcessing />
      <Jobs jobs={jobs} title="Completed jobs" howMany={2} />
    </section>
  );
};
export default JobInbox;
