import './Footer.css';
import FacebookIcon from '../../assets/img/footer-facebook.png';
import TwitterIcon from '../../assets/img/footer-twitter.png';
import PeriscopeIcon from '../../assets/img/footer-periscope.png';
import PinterestIcon from '../../assets/img/footer-pinterest.png';
import YoutubeIcon from '../../assets/img/footer-youtube.png';
import DCLogoBg from '../../assets/img/dc-logo-bg.png';


const dcComicsLinks = [
    { name: 'Characters', url: '/#' },
    { name: 'Comics', url: '/#' },
    { name: 'Movies', url: '/#' },
    { name: 'TV', url: '/#' },
    { name: 'Games', url: '/#' },
    { name: 'Videos', url: '/#' },
    { name: 'News', url: '/#' }
];

const dcLinks = [
    { name: 'Terms Of Use', url: '/#' },
    { name: 'Privacy policy (New)', url: '/#' },
    { name: 'Ad Choices', url: '/#' },
    { name: 'Advertising', url: '/#' },
    { name: 'Jobs', url: '/#' },
    { name: 'Subscriptions', url: '/#' },
    { name: 'Talent Workshops', url: '/#' },
    { name: 'CPSC Certificates', url: '/#' },
    { name: 'Ratings', url: '/#' },
    { name: 'Shop Help', url: '/#' },
    { name: 'Contact Us', url: '/#' }
];

// Dati per la sezione SITES
const sitesLinks = [
    { name: 'DC', url: '#' },
    { name: 'MAD Magazine', url: '/#' },
    { name: 'DC Kids', url: '/#' },
    { name: 'DC Universe', url: '/#' },
    { name: 'DC Power Visa', url: '/#' }
];

// Dati per la sezione SHOP
const shopLinks = [
    { name: 'Shop DC', url: '/#' },
    { name: 'Shop DC Collectibles', url: '/#' }
];

// Dati per i social
const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/dc', icon: FacebookIcon },
    { name: 'Twitter', url: 'https://twitter.com/dccomics', icon: TwitterIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/user/DCEntertainment', icon: YoutubeIcon },
    { name: 'Pinterest', url: 'https://www.pinterest.com/dccomics/', icon: PinterestIcon },
    { name: 'Location', url: 'https://www.dc.com/dccomicslocator', icon: PeriscopeIcon }
];

function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className="footer-links-container">
                    <div className="footer-column">
                        <h3 className="footer-title">DC COMICS</h3>
                        <ul className="footer-links">
                            {dcComicsLinks.map((link, index) => (
                                <li key={index} className="footer-link-item">
                                    <a href={link.url} className="footer-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className='footer-title mt'>SHOP</h3>
                        <ul className='footer-links'>
                            {shopLinks.map((link, index) => (
                                <li key={index} className='footer-link-item'>
                                    <a href={link.url} className='footer-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='foouter-culomn'>
                        <h3 className='footer-title'>DC</h3>
                        <ul className='footer-links'>
                            {dcLinks.map((link, index) => (
                                <li key={index} className='footer-link-item'>
                                    <a href={link.url} className='footer-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='foouter-culomn'>
                        <h3 className='footer-title'>SITES</h3>
                        <ul className='footer-links'>
                            {sitesLinks.map((link, index) => (
                                <li key={index} className='footer-link-item'>
                                    <a href={link.url} className='footer-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-logo">
                        <img src={DCLogoBg} alt="DC Logo" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <button className="signup-button">SIGN-UP NOW!</button>

                    <div className="social-container">
                        <span className="follow-us">FOLLOW US</span>
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.url} className="social-icon" aria-label={social.name}>
                                    <img src={social.icon} alt={social.name} className="social-icon-img" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
