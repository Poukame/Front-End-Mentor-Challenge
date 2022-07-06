import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
	return (
		<header>
			<img src={logo} className='header__logo' alt='logo of Shortly' />
			<span className='hamburger'>|||</span>
			<nav>
				<ul className='header__nav'>
					<li>Features</li>
					<li>Pricing</li>
					<li>Resources</li>
					<li>Login</li>
					<li>Sign-up</li>
				</ul>
			</nav>
		</header>
	);
}
