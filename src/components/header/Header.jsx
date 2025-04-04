import './Header.css';
import dcLogo from '../../assets/img/dc-logo.png'
import NavbarHeader from '../Navbar/Navbar.jsx';

const navLinks = [
    { name: 'CHARACTERS', url: '/#' },
    { name: 'COMICS', url: '/#' },
    { name: 'MOVIES', url: '/#' },
    { name: 'TV', url: '/#' },
    { name: 'GAMES', url: '/games' },
    { name: 'COLLECTIBLES', url: '/#' },
    { name: 'VIDEOS', url: '/#' },
    { name: 'FANS', url: '/#' },
    { name: 'NEWS', url: '/#' },
    { name: 'SHOP', url: '/#' }
];

function Header() {

    return (
        <header>
            <div className='header-container'>

                <div className="logo-container">
                    <a href="/">
                        <img src={dcLogo} alt="DC Logo" className="dc-logo" />
                    </a>
                </div>

                <NavbarHeader link={navLinks} />

            </div>
        </header>
    );
}

export default Header;