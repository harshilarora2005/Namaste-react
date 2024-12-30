import logo from "../../image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;