import React from "react";
import ScrollHandler from "../components/ScrollHandler";
import { Routes, Route, Link } from "react-router-dom";

function PageNotFound() {
  return (
    <ScrollHandler>
      <Routes>
        <Route
          path="*"
          element={
            <main
              className="mt-5 pt-5 me-auto ms-auto w-75 text-center"
              style={{ fontSize: "25px" }}>
              <p className="mt-5 pt-5">
                Ooops!!! it seems the page you are looking for is not yet
                available.
              </p>
              <p>
                <Link to="/" style={{ color: "var(--default-blue-deep)" }}>
                  Click Here
                </Link>{" "}
                to return safely to the homepage
              </p>
            </main>
          }
        />
      </Routes>
    </ScrollHandler>
  );
}

export default PageNotFound;
