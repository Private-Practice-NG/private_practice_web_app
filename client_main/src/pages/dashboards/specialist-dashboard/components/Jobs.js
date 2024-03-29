import locationIcon from "../../../../assets/images/icons/location-icon.svg";
import hospitalIcon from "../../../../assets/images/icons/hospital-icon.svg";

const Jobs = ({ jobs, howMany, title, isOngoing, isProcessing }) => {
  return (
    <section className="inbox-container">
      <div className="inbox-header">
        <h2 className="fs-5 text-white montserrat">
          {title} {howMany && `(${howMany})`}
        </h2>
      </div>

      <div className="bg-white" style={{ borderRadius: "0px 20px 20px 20px" }}>
        {jobs?.map(({ id, hospital, location, title, info, date }) => (
          <article className="px-5 py-4 border-top row" key={id}>
            <div className="col">
              <h3 className="fs-5 fw-bold montserrat">{title}</h3>
              <p className="pt-1">{info}</p>
              <p className="fw-bolder pt-1">More &gt;</p>

              <ul className="pt-4 d-flex align-items-center gap-5 mb-0">
                <li className="d-flex align-items-center gap-2">
                  <img src={hospitalIcon} alt="" />
                  <span>{hospital}</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={locationIcon} alt="" />
                  <span>{location}</span>
                </li>
                <li>
                  <span>{date}</span>
                </li>
              </ul>
            </div>

            {isOngoing && (
              <div className="col-4 d-flex flex-column gap-3 w-25 pt-3">
                <button className="btn btn-outline-primary px-4 py-2 rounded-pill outline-btn">
                  Message Client
                </button>
                <button className="btn btn-primary px-4 py-2 rounded-pill filled-btn">
                  Track Job
                </button>
              </div>
            )}

            {isProcessing && (
              <div className="col-4 d-flex flex-column gap-3 w-25 pt-3">
                <button className="btn btn-primary px-4 py-2 rounded-pill filled-btn">
                  View more
                </button>
              </div>
            )}
          </article>
        ))}

        <p className="px-4 pb-4 fw-bolder fs-5 fst-italic">Load More &gt;</p>
      </div>
    </section>
  );
};
export default Jobs;
