import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
	return (
		<header>
			<img src={logo} className='logo header__logo' alt='logo of Shortly' />
			<span className='hamburger'>|||</span>
			<nav className='header__nav'>
				<ul className='header__nav-ul'>
					<li><a href="#">Features</a></li>
					<li><a href="#">Pricing</a></li>
					<li><a href="#">LResources</a></li>
					<li><a href="#">Login</a></li>
					<li><a href="#">Sign-up</a></li>
				</ul>
			</nav>
		</header>
	);
}
