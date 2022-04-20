import specialist from "../../../assets/images/avatar/avatar-6.jpg";
import { Link } from "react-router-dom";

const SelectedSpecialist = () => {
  return (
    <section className="selected-specialists-section">
      <h5 className="text-uppercase text-end montserrat fw-bold mb-4 pe-1">
        Selected specialist
      </h5>
      <div className="d-flex flex-column gap-3 selected-specialists-wrapper">
        <Link
          to="/"
          className="selected-specialists-item d-flex align-items-center ms-auto">
          <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
            <img
              src={specialist}
              className="specialist-avatar rounded-circle"
              alt="specialist-avatar"
            />
          </div>
          <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
            <ul className="m-0" style={{ fontSize: "12px" }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
            </ul>
          </div>
        </Link>
        <Link
          to="/"
          className="selected-specialists-item d-flex align-items-center ms-auto">
          <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
            <img
              src={specialist}
              className="specialist-avatar rounded-circle"
              alt="specialist-avatar"
            />
          </div>
          <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
            <ul className="m-0" style={{ fontSize: "12px" }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
            </ul>
          </div>
        </Link>
        <Link
          to="/"
          className="selected-specialists-item d-flex align-items-center ms-auto">
          <div className="avatar-area position-relative align-items-center d-flex flex-column justify-content-center">
            <img
              src={specialist}
              className="specialist-avatar rounded-circle"
              alt="specialist-avatar"
            />
          </div>
          <div className="details-area position-relative d-flex flex-column ps-4 py-2 pe-2">
            <ul className="m-0" style={{ fontSize: "12px" }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default SelectedSpecialist;
