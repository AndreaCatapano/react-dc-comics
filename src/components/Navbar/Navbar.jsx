import './Navbar.css'

const Navbar = (props) => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {props.link.map((link, index) => (
                    <li key={index} className="nav-item">
                        <a href={link.url} className="nav-link">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar