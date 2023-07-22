import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<>
			<header className='site-header'>
				<div className='container'>
					<nav className='site-header__nav'>
						<NavLink to='/'>
							<h1 className='site-header__logo'>GeoLearning</h1>
						</NavLink>
						<NavLink to='/departments'>
							<strong className='site-header__page'>Bo'limlar</strong>
						</NavLink>
					</nav>
				</div>
			</header>
		</>
	);
};
