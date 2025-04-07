import './Navbar.css'

const Navbar = ({ link, numberOfLink }) => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {link.map((link, index) => (
                    index < numberOfLink ? (
                        <li key={index} className="nav-item">
                            <a href={link.url} className="nav-link">
                                {link.name}
                            </a>
                        </li>) : null
                ))}
            </ul>
        </nav>
    );
};

export default Navbar