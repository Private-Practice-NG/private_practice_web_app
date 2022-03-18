import { Link } from "react-router-dom";

const JobPostSuccess = () => {
  return (
    <div className="d-flex align-items-center justify-content-center text-center">
      <section className="successful shadow">
        <div className="check-box">
          <CheckIcon />
        </div>
        <h2 className="montserrat">Job posted succesfully!</h2>
        <p>You'll be notified when there is a response regarding this job</p>
        <Link to="/hospital-dashboard" className="btn btn-primary">
          Goto Dashboard
        </Link>
      </section>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.19491 8.43915L3.31804 6.56227C3.10691 6.35115 2.7648 6.35055 2.55293 6.56092C2.34001 6.77235 2.3394 7.11655 2.55158 7.32873L5.19491 9.97206L10.0306 5.08304C10.2395 4.87185 10.2385 4.53158 10.0285 4.32153C9.81676 4.1098 9.47317 4.1108 9.26267 4.32376L5.19491 8.43915Z"
        fill="currentColor"
      />
      <mask
        id="mask0_179_4246"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="9"
        height="6">
        <path
          d="M5.19491 8.43915L3.31804 6.56227C3.10691 6.35115 2.7648 6.35055 2.55293 6.56092C2.34001 6.77235 2.3394 7.11655 2.55158 7.32873L5.19491 9.97206L10.0306 5.08304C10.2395 4.87185 10.2385 4.53158 10.0285 4.32153C9.81676 4.1098 9.47317 4.1108 9.26267 4.32376L5.19491 8.43915Z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#mask0_179_4246)">
        <rect width="13" height="13" fill="currentColor" />
      </g>
    </svg>
  );
};

export default JobPostSuccess;
