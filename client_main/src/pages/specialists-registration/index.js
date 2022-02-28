import React from 'react';
import '../../assets/styles/css/specialists-registration_main.css';
import AccountsVerified1 from './components/AccountsVerified1';
import AccountsVerified2 from './components/AccountsVerified2';
import DoctorsPracticingProfile1 from './components/DoctorsPracticingProfile1';
import DoctorsPracticingProfile2 from './components/DoctorsPracticingProfile2';
import DoctorsPracticingProfile3 from './components/DoctorsPracticingProfile3';
import MoreBasicData1 from './components/MoreBasicData1';
import MoreBasicData2 from './components/MoreBasicData2';
import MoreBasicData3 from './components/MoreBasicData3';
import MoreBasicData4 from './components/MoreBasicData4';
import MoreBasicData5 from './components/MoreBasicData5';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function SpecialistRegistration() {
  return (
    <>
      <section className="main-background">
        <Routes>
          <Route path="/accounts-verified-1" element={<AccountsVerified1 />} />
          <Route path="/accounts-verified-2" element={<AccountsVerified2 />} />
          <Route
            path="/specialist-practicing-profile-1"
            element={<DoctorsPracticingProfile1 />}
          />
          <Route
            path="/specialist-practicing-profile-2"
            element={<DoctorsPracticingProfile2 />}
          />
          <Route
            path="/specialist-practicing-profile-3"
            element={<DoctorsPracticingProfile3 />}
          />
          <Route path="/more-basic-data-1" element={<MoreBasicData1 />} />
          <Route path="/more-basic-data-2" element={<MoreBasicData2 />} />
          <Route path="/more-basic-data-3" element={<MoreBasicData3 />} />
          <Route path="/more-basic-data-4" element={<MoreBasicData4 />} />
          <Route path="/more-basic-data-5" element={<MoreBasicData5 />} />
        </Routes>
        <footer className="specialists-registration-footer">
          <div className="flow-left">
            <Link className="link" to="/privacy-policy-page">
              Privacy
            </Link>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/help-page">
              Help
            </Link>
          </div>
          <div className="flow-right">
            <div>
              <p>@2020 PrivatePractice INC.</p>
            </div>
          </div>
        </footer>
        <Outlet />
      </section>
    </>
  );
}

export default SpecialistRegistration;
