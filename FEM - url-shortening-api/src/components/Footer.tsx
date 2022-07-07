import logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'

export default function Footer() {
    return (
        <footer>
        <img src={logo} className='logo logo--footer' alt="" />
        <nav className='footer__nav'>
            <h3 className='footer__nav-title'>Features</h3>
            <ul className='footer__nav-ul'>
                <li><a href="#">Link Shortening</a></li> 
                <li><a href="#">Branded Links</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>

            <h3 className='footer__nav-title'>Resources</h3>
            <ul className='footer__nav-ul'>
                <li><a href="#">Blog</a></li> 
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
            </ul>

            <h3 className='footer__nav-title'>Company</h3>
            <ul className='footer__nav-ul'>
                <li><a href="#">About</a></li> 
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className='social-links'>
                <a href="#"><img src={fb} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={pinterest} alt="" /></a>
                <a href="#"><img src={insta} alt="" /></a>
            </div>
        </nav>
        </footer>
    )
}