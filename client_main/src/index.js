import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HospitalsDashboardRouteCenter from "./routing-center/HospitalsDashboardRouteCenter";
import RegistrationSectionRouteCenter from "./routing-center/RegistrationSectionRouteCenter";
// import PageNotFound from "./routing-center/404Route";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* add single scroll handler component here and remove from individual route centers */}
      <RegistrationSectionRouteCenter />
      <HospitalsDashboardRouteCenter />
      {/* <PageNotFound /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
