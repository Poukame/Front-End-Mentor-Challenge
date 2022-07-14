import React from 'react';
import logo from '../images/logo.svg';

export default function Header({display, handleClick}) {
	return (
		<header>
			<img src={logo} className='logo header__logo' alt='logo of Shortly' />
			<span className='hamburger' onClick={handleClick}>
				|||
			</span>
			<nav className='header__nav desktop--nav'>
				<ul className='header__nav-ul desktop_nav--ul'>
					<li>
						<a href='#'>Features</a>
					</li>
					<li>
						<a href='#'>Pricing</a>
					</li>
					<li>
						<a href='#'>Resources</a>
					</li>
					<li>
						<a href='#'>Login</a>
					</li>
					<li>
						<a href='#'>Sign-up</a>
					</li>
				</ul>
			</nav>
			{display && (
				<nav className='header__nav mobile--nav'>
					<ul className='header__nav-ul mobile_nav--ul'>
						<li>
							<a href='#'>Features</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Resources</a>
						</li>
						<hr />
						<li>
							<a href='#'>Login</a>
						</li>
						<li>
							<a href='#'>Sign-up</a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
