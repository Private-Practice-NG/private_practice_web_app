import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HospitalsDashboardRouteCenter from "./routing-center/HospitalsDashboardRouteCenter";
import RegistrationSectionRouteCenter from "./routing-center/RegistrationSectionRouteCenter";
import SpecialistDashboardRouteCenter from "./routing-center/SpecialistDashboardRouteCenter";
import ScrollHandler from "./components/ScrollHandler";
// import PageNotFound from "./routing-center/404Route";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollHandler>
        <RegistrationSectionRouteCenter />
        <HospitalsDashboardRouteCenter />
        <SpecialistDashboardRouteCenter />
      </ScrollHandler>
      {/* <PageNotFound /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
