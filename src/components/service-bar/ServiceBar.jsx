import './ServiceBar.css';
import DigitalComicsIcon from '../../assets/img/buy-comics-digital-comics.png';
import MerchandiseComicsIcon from '../../assets/img/buy-comics-merchandise.png';
import ShopLocatorIcon from '../../assets/img/buy-comics-shop-locator.png';
import SubscriptionsIcon from '../../assets/img/buy-comics-subscriptions.png';
import VisaIcon from '../../assets/img/buy-dc-power-visa.svg';

const serivceInfo = [
    { name: 'DIGITAL COMICS', icon: DigitalComicsIcon },
    { name: 'DC MERCHANDISE', icon: MerchandiseComicsIcon },
    { name: 'SUBSCRIPTION', icon: SubscriptionsIcon },
    { name: 'COMIC SHOP LOCATOR', icon: ShopLocatorIcon },
    { name: 'DC POWER VISA', icon: VisaIcon }
];

function ServiceBar() {
    return (
        <div className='service-bar-container'>
            <div className='service-bar-contain'>
                <ul className='service-bar-list'>
                    {serivceInfo.map((service, index) => (
                        <li key={index} className='service-bar-item'>
                            <img src={service.icon} alt={service.name} className='service-icon' />
                            <p className='service-text'>{service.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceBar;

