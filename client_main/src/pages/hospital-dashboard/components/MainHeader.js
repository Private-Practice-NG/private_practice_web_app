import userImage from '../../../assets/images/avatar/avatar-2.png'

const MainHeader = () => {
	return (
		<header className='dashboard-main-header'>
			<form className='dashboard-form'>
				<label>
					<input
						type='search'
						placeholder='Search'
						className='dashboard-form-input'
					/>
					<i class='bi bi-search'></i>
				</label>
			</form>

			<div className='dashboard-user-details'>
				<div className='dashboard-user'>
					<img src={userImage} alt='user' />
					<div className='user'>
						<p>Maitama General Hospital</p>
						<i class='bi bi-chevron-down'></i>
					</div>
				</div>
				<i class='bi bi-envelope'></i>
				<i class='bi bi-bell'></i>
				<i class='bi bi-gear'></i>
			</div>
		</header>
	)
}
export default MainHeader
