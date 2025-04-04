import './FooterLinkSection.css'

const FooterLinkSection = (props) => {
    return (
        <div className="footer-section">
            <h3 className="footer-title">{props.title}</h3>
            <ul className="footer-links">
                {props.links.map((link, index) => (
                    <li key={index} className="footer-link-item">
                        <a href={link.url} className="footer-link">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinkSection;