import React from "react";
import heartIcon from "../../../assets/images/icons/heart_d.png";

function SpecializationItem() {
  return (
    <li className="specialization-item">
      <img src={heartIcon} alt="" width={22} />
      <h4>Heart</h4>
      <p>Specialist</p>
    </li>
  );
}

export default SpecializationItem;
