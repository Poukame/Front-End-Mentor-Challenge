import logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';

export default function Footer() {
	return (
		<footer>
			<nav className='footer__nav'>
				<div className='logo-wrapper-footer'>
                    <img src={logo} className='logo logo--footer' alt='' />
                </div>
				<div className='flex-wrap'>
					<h3 className='footer__nav-title'>Features</h3>
					<ul className='footer__nav-ul'>
						<li>
							<a href='#'>Link Shortening</a>
						</li>
						<li>
							<a href='#'>Branded Links</a>
						</li>
						<li>
							<a href='#'>Analytics</a>
						</li>
					</ul>
				</div>

				<div className='flex-wrap'>
					<h3 className='footer__nav-title'>Resources</h3>
					<ul className='footer__nav-ul'>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Developers</a>
						</li>
						<li>
							<a href='#'>Support</a>
						</li>
					</ul>
				</div>

				<div className='flex-wrap'>
					<h3 className='footer__nav-title'>Company</h3>
					<ul className='footer__nav-ul'>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Our Team</a>
						</li>
						<li>
							<a href='#'>Career</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>

				<div className='social-links'>
					<a href='#'>
						<img src={fb} alt='Click here to access the Facebook page of Shortly' />
					</a>
					<a href='#'>
						<img src={twitter} alt='Click here to access Twitter the page of Shortly' />
					</a>
					<a href='#'>
						<img src={pinterest} alt='Click here to access Pinterest the page of Shortly' />
					</a>
					<a href='#'>
						<img src={insta} alt='Click here to access the Instagram page of Shortly' />
					</a>
				</div>
			</nav>
		</footer>
	);
}
