import { NavLink } from 'react-router-dom'

const NavLinks = () => {
	const navs = [
		{
			icon: 'fab fa-regular fa-earth-africa',
			name: 'Dashboard',
			link: '/dashboard',
		},
		{
			icon: 'fa-regular fa-rectangle-list',
			name: 'Jobs',
			link: '/jobs',
		},
		{
			icon: 'hello',
			name: 'Statistics',
			link: '/statistics',
		},
		{
			icon: 'fa-regular fa-wallet',
			name: 'Wallet',
			link: '/wallet',
		},
		{
			icon: 'fa-regular fa-star',
			name: 'Favorites',
			link: '/favorites',
		},
		{
			icon: 'fa-light fa-calendar-clock',
			name: 'Calender',
			link: '/calender',
		},
		{
			icon: 'fa-regular fa-circle-question',
			name: 'Help/Support',
			link: '/helpandsupport',
		},
		{
			icon: 'hello',
			name: 'Site Guide',
			link: '/site-guide',
		},
	]

	return (
		<ul className='dashboard-nav-items'>
			{navs.map((nav) => (
				<li className='dashboard-nav-lists'>
					<NavLink to={nav.link} className='dashboard-nav-link'>
						<i class={nav.icon}></i>
						<span>{nav.name}</span>
					</NavLink>
				</li>
			))}
		</ul>
	)
}
export default NavLinks
