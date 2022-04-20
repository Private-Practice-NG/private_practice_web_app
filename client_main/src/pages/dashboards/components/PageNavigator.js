import React from "react";
import { Link } from "react-router-dom";

function PageNavigator({ nextPage, previousPage }) {
  return (
    <section className="navigator-wrapper d-flex flex-row justify-content-between">
      <Link to={previousPage}>
        <button className="navigator-item btn d-flex flex-row justify-content-between">
          <i className="bi bi-arrow-left"></i>
          <div>Previous</div>
        </button>
      </Link>
      <Link to={nextPage}>
        <button className="navigator-item btn d-flex flex-row justify-content-between">
          <div>Next</div>
          <i className="bi bi-arrow-right"></i>
        </button>
      </Link>
    </section>
  );
}

export default PageNavigator;
