import Sidebar from './components/Sidebar'
import Main from './components/Main'

import '../../assets/styles/css/hospital-dashboard.css'

const HospitalDashboard = () => {
	return (
		<div className='dashboard-container open-sans'>
			<Sidebar />
			<Main />
		</div>
	)
}

export default HospitalDashboard
