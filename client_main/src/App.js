import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import AboutPage from './pages/about-page';
import { LoginPage } from './pages/login-page';
import { SignupPage } from './pages/registration-section/SignupPage';
import ScrollHandler from './components/ScollHandler';
import SpecialistAccountVerified from './pages/registration-section/SpecialistAccountVerified';
import UserAccountVerified from './pages/registration-section/UserAccountVerified';
import MoreSpecialistData1 from './pages/registration-section/MoreSpecialistData1';
import MoreSpecialistData2 from './pages/registration-section/MoreSpecialistData2';
import MoreSpecialistData3 from './pages/registration-section/MoreSpecialistData3';
import MoreSpecialistData4 from './pages/registration-section/MoreSpecialistData4';
import GeneralUserData1 from './pages/registration-section/GeneralUserData1';
import GeneralSpecialistData1 from './pages/registration-section/GeneralSpecialistData1';
import VerifySpecialistEmail from './pages/registration-section/VerifySpecialistEmail';
import VerifyUserEmail from './pages/registration-section/VerifyUserEmail';
import VerifyUserMobileNumber from './pages/registration-section/VerifyUserMobileNumber';
import VerifySpecialistMobileNumber from './pages/registration-section/VerifySpecialistMobileNumber';
import MobileNumberVerificationUser from './pages/registration-section/MobileNumberVerificationUser';
import MobileNumberVerificationSpecialist from './pages/registration-section/MobileNumberVerificationSpecialist';
import ContactPage from './pages/contact-page';
import HospitalFinish from './pages/registration-section/HospitalsFinish';
import HospitalsEnrolmentRequest from './pages/registration-section/HospitalsEnrolmentRequest';
import MailVerificationPage1 from './pages/registration-section/MailVerificationPage1';
import MailVerificationPage2 from './pages/registration-section/MailVerificationPage2';
import ProfileSummaryPage from './pages/registration-section/ProfileSummaryPage';
import ProfileSetupComplete from './pages/registration-section/ProfileSetupComplete';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollHandler>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/start-login" element={<LoginPage />} />
            <Route path="/start-signup" element={<SignupPage />} />

            <Route
              path="/specialist-account-verified"
              element={<SpecialistAccountVerified />}
            />
            <Route
              path="/user-account-verified"
              element={<UserAccountVerified />}
            />
            <Route
              path="/hospitals-registration-done"
              element={<HospitalFinish />}
            />
            <Route
              path="/hospitals-enrolment-page"
              element={<HospitalsEnrolmentRequest />}
            />
            <Route
              path="/more-specialist-data-1"
              element={<MoreSpecialistData1 />}
            />
            <Route
              path="/more-specialist-data-2"
              element={<MoreSpecialistData2 />}
            />
            <Route
              path="/more-specialist-data-3"
              element={<MoreSpecialistData3 />}
            />
            <Route
              path="/more-specialist-data-4"
              element={<MoreSpecialistData4 />}
            />
            <Route path="/general-user-data-1" element={<GeneralUserData1 />} />
            <Route
              path="/general-specialist-data-1"
              element={<GeneralSpecialistData1 />}
            />
            <Route path="/verify-user-email" element={<VerifyUserEmail />} />
            <Route
              path="/verify-specialist-email"
              element={<VerifySpecialistEmail />}
            />
            <Route
              path="/verify-user-mobile-number"
              element={<VerifyUserMobileNumber />}
            />
            <Route
              path="/verify-specialist-mobile-number"
              element={<VerifySpecialistMobileNumber />}
            />
            <Route
              path="/mobile-number-verification_user"
              element={<MobileNumberVerificationUser />}
            />
            <Route
              path="/mobile-number-verification_specialist"
              element={<MobileNumberVerificationSpecialist />}
            />
            <Route
              path="/email-verification_user"
              element={<MailVerificationPage1 />}
            />
            <Route
              path="/email-verification_specialist"
              element={<MailVerificationPage2 />}
            />
            <Route
              path="/specialist-profile-summary"
              element={<ProfileSummaryPage />}
            />
            <Route
              path="/specialist-profile-setup-complete"
              element={<ProfileSetupComplete />}
            />
            <Route
              path="*"
              element={
                <main
                  style={{
                    margin: '200px auto',
                    fontSize: '25px',
                    textAlign: 'center',
                  }}
                >
                  <p>
                    "Opps!!! you just hit an error" <br /> It seems the page you
                    are looking for is not available. <br />
                    <Link to="/" style={{ color: '#7ea2be' }}>
                      {' '}
                      Click here{' '}
                    </Link>
                    to safely return to the home page.
                  </p>
                </main>
              }
            />
          </Routes>
        </ScrollHandler>
      </BrowserRouter>
    </>
  );
}

export default App;
