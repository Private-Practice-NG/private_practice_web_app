import React from "react";
import avatar from "../../../../assets/images/avatar/avatar-1.png";

function ProfileListing() {
  return (
    <li className="d-flex align-items-center justify-content-between border-top px-3 py-2 profile-listing">
      <div className="d-flex align-items-center gap-5">
        <img src={avatar} alt="doctor" className="rounded-circle" />
        <div>
          <p className="rating">
            4.5 <i className="bi bi-star-fill"></i>
          </p>
          <h3 className="fs-6 fw-bolder m-0">Maitaima Hospital</h3>
          <p className="specialisation">General Medicine</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        {/* square */}
        <div className="square"></div>

        <p>May 03, 13:00 - 17:00</p>
      </div>

      {/* buttons */}
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn rounded-pill px-3 py-1">View</button>
        <button className="btn btn rounded-pill px-3 py-1">Remove</button>
      </div>
    </li>
  );
}

export default ProfileListing;
