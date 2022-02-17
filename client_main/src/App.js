import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import MainFooter from './components/MainFooter';
import LandingPage from './pages/landing-page';
import { AboutPage } from './pages/about-page';
import { LoginPage } from './pages/login-page';
import { SignupPage } from './pages/signup-page/usertype-registration';
import { ContactPage } from './pages/contact-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/start-login" element={<LoginPage />} />
          <Route path="/start-signup" element={<SignupPage />} />
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
                  are looking for is not created yet. <br /> Just click the
                  PrivatePractice icon above to go back to the home page.
                </p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      <MainFooter />
    </>
  );
}

export default App;
