import './Header.css';
import dcLogo from '../../assets/img/dc-logo.png'

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


                <nav className="main-nav">
                    <ul className="nav-list">
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a href={link.url} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


            </div>
        </header>
    );
}

export default Header;