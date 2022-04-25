import timeIcon from "../../../../assets/images/icons/carbon_time.svg";
import calendarIcon from "../../../../assets/images/icons/calender.svg";
import redCrossIcon from "../../../../assets/images/icons/red-cross.svg";
import darkHospital from "../../../../assets/images/icons/dark-hospital-icon.png";
import darkLocation from "../../../../assets/images/icons/dark-location-icon.png";

const JobDetails = () => {
  return (
    <section className="border-start ms-5 pt-4 job-details">
      <h2 className="montserrat fs-3 fw-bolder px-4 text-capitalize">
        Occasional Itching eyes
      </h2>
      <div className="border-top row gap-5">
        <section className="ps-4 pt-4 col">
          <article>
            <h3 className="montserrat fs-5">Job Description</h3>

            <div className="d-flex flex-column gap-4 pt-2 about-job">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie nec pellentesque blandit tincidunt. Ac et proin nisl
                neque eu suspendisse. Gravida quisque id accumsan pretium eget
                turpis sit penatibus. Porttitor sem fermentum, orci pellentesque
                egestas nisl magna sit. Varius placerat integer in at accumsan.
                Quam id egestas dui rhoncus ac. Vulputate lacinia justo, tellus
                et eget.
              </p>
              <p>
                Aliquet auctor amet platea fringilla fermentum. Suscipit mauris
                sit habitant duis tincidunt fermentum justo, sed. Cursus
                ullamcorper posuere pellentesque lorem imperdiet eu tellus.
                Hendrerit sit tristique congue augue dissodales scelerisque
                venenatis. Ornare tortor accumsan metus vel nec tempus. Eget
                magna mauris mi lectus pharetra. Pellentesque congue ultrices
                suspendisse sed purus. In adipiscing malesuada egestas quam
                tristique.
              </p>
              <p>
                Mi cursus dictum lectus duis tortor, sit purus. Ut a
                pellentesque risus lacinia elit urna, purus. Vitae aliquam
                posuere pellentesque at nisi, gravida. Amet, sodales feugiat et
                aenean cursus dui ut. Sed leo duis in nunc, sodales sagittis
                urna consectetur adipiscing. Tellus rutrum integer a lacus dui,
                etiam lobortis.
              </p>
            </div>
          </article>

          <div className="pt-4">
            <h3 className="montserrat fs-5">
              Specialisation and Treatment Category
            </h3>
          </div>

          <ul className="d-flex align-items-center gap-5 mb-0 border-top py-2 jobs-hunter-detail">
            <li className="d-flex align-items-center gap-2">
              {/* <img src={hospitalIcon} alt="" width="17px" /> */}
              <img src={timeIcon} alt="" width="17px" />
              <span>Posted 1 hour ago</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <img src={calendarIcon} alt="" width="17px" />
              <span>April 13, 2021 - April 18, 2021</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <img src={redCrossIcon} alt="" width="17px" />
              <span>Member Since January 10, 2021</span>
            </li>
          </ul>

          <div className="pt-4 border-top">
            <h3 className="montserrat fs-6 fw-bold">Activity on this job</h3>

            <ul className="mb-0">
              <li>
                Applicants: <span className="fw-bolder">2 or 5</span>
              </li>
              <li>
                Last viewed by client:{" "}
                <span className="fw-bolder">10 minutes ago</span>
              </li>
              <li>
                Interviewing: <span className="fw-bolder">2</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="border-start col-3">
          <div className="d-flex flex-column gap-3 p-4 w-50 mx-auto">
            <button className="btn btn-primary px-4 rounded-pill text-capitalize filled-btn">
              Apply now
            </button>
            <button className="btn btn-outline-primary rounded-pill outline-btn">
              Save job
            </button>
          </div>
          <article className="border-top p-4">
            <div className="d-flex align-items-center">
              <h3 className="montserrat fs-5">About Client</h3>
              <span>stars</span>
            </div>
            <div className="d-flex flex-column gap-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie nec pellentesque blandit tincidunt.{" "}
              </p>
              <p>Ac et proin nisl neque eu suspendisse.</p>
            </div>
            <div className="pt-3 ">
              <div className="d-flex align-items-center gap-3">
                <img src={darkHospital} alt="" width={17} />
                <p>Kings hospital</p>
              </div>
              <div className="d-flex align-items-center gap-3 mt-2">
                <img src={darkLocation} alt="" width={15} />
                <p>Wuse, Zone 4, Abuja</p>
              </div>
            </div>
          </article>
          <div className="border-top p-4">
            <p className="px-3 py-2 rounded job-link">
              privatepractice.com/ays98d890
            </p>

            <button className="montserrat fw-bolder pt-1 job-copy-link">
              Copy Link
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default JobDetails;
