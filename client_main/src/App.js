import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import AboutPage from './pages/about-page'
import { LoginPage } from './pages/login-page'
import { SignupPage } from './pages/registration-section'
import AccountsVerified1 from './pages/registration-section/AccountsVerified1'
import AccountsVerified2 from './pages/registration-section/AccountsVerified2'
import DoctorsPracticingProfile1 from './pages/registration-section/DoctorsPracticingProfile1'
import DoctorsPracticingProfile2 from './pages/registration-section/DoctorsPracticingProfile2'
import DoctorsPracticingProfile3 from './pages/registration-section/DoctorsPracticingProfile3'
import BasicData1 from './pages/registration-section/BasicData1'
import BasicData2 from './pages/registration-section/BasicData2'
import BasicData3 from './pages/registration-section/BasicData3'
import BasicData4 from './pages/registration-section/BasicData4'
import BasicData5 from './pages/registration-section/BasicData5'
import BasicData6 from './pages/registration-section/BasicData6'
import BasicData7 from './pages/registration-section/BasicData7'
import BasicData8 from './pages/registration-section/BasicData8'
import ContactPage from './pages/contact-page'
import HospitalFinish from './pages/registration-section/HospitalsFinish'
import HospitalsEnrolmentRequest from './pages/registration-section/HospitalsEnrolmentRequest'
import EMailVerifyPage from './pages/registration-section/EMailVerifyPage'
import ProfileSummaryPage from './pages/registration-section/ProfileSummaryPage'
import ProfileSetupComplete from './pages/registration-section/ProfileSetupComplete'
import HospitalDashboard from './pages/hospital-dashboard'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/about-page' element={<AboutPage />} />
				<Route path='/contact-page' element={<ContactPage />} />
				<Route path='/start-login' element={<LoginPage />} />
				<Route path='/start-signup' element={<SignupPage />} />

				<Route
					path='/accounts-verified-1'
					element={<AccountsVerified1 />}
				/>
				<Route
					path='/accounts-verified-2'
					element={<AccountsVerified2 />}
				/>
				<Route
					path='/hospital-registration-done'
					element={<HospitalFinish />}
				/>
				<Route
					path='/hospital-enrolment-request'
					element={<HospitalsEnrolmentRequest />}
				/>
				<Route
					path='/specialist-practicing-profile-1'
					element={<DoctorsPracticingProfile1 />}
				/>
				<Route
					path='/specialist-practicing-profile-2'
					element={<DoctorsPracticingProfile2 />}
				/>
				<Route
					path='/specialist-practicing-profile-3'
					element={<DoctorsPracticingProfile3 />}
				/>
				<Route path='/basic-data-1' element={<BasicData1 />} />
				<Route path='/basic-data-2' element={<BasicData2 />} />
				<Route path='/basic-data-3' element={<BasicData3 />} />
				<Route path='/basic-data-4' element={<BasicData4 />} />
				<Route path='/basic-data-5' element={<BasicData5 />} />
				<Route path='/basic-data-6' element={<BasicData6 />} />
				<Route path='/basic-data-7' element={<BasicData7 />} />
				<Route path='/basic-data-8' element={<BasicData8 />} />
				<Route path='/verify-email' element={<EMailVerifyPage />} />

				{/* dashboard */}
				<Route path='/hospital-dashboard' element={<HospitalDashboard />} />

				<Route path='/profile-summary' element={<ProfileSummaryPage />} />
				<Route
					path='/profile-setup-complete'
					element={<ProfileSetupComplete />}
				/>
				<Route
					path='*'
					element={
						<main
							style={{
								margin: '200px auto',
								fontSize: '25px',
								textAlign: 'center',
							}}>
							<p>
								"Opps!!! you just hit an error" <br /> It seems the page
								you are looking for is not available. <br />
								<Link to='/' style={{ color: '#7ea2be' }}>
									{' '}
									Click here{' '}
								</Link>
								to safely return to the home page.
							</p>
						</main>
					}
				/>
			</Routes>
		</>
	)
}

export default App
