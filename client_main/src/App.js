import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import AboutPage from './pages/about-page';
import SpecialistRegistration from './pages/specialists-registration';
import { LoginPage } from './pages/login-page';
import { SignupPage } from './pages/signup-page/usertype-registration';
import ContactPage from './pages/contact-page';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/start-login" element={<LoginPage />} />
          <Route path="/start-signup" element={<SignupPage />} />
          <Route
            path="/start-specialist-registration/*"
            element={<SpecialistRegistration />}
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
      </BrowserRouter>
    </>
  );
}

export default App;
