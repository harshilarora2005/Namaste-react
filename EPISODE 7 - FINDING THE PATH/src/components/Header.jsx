import logo from "../../../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import { Link } from "react-router";
const Header = () => {
    const [btnName,changeBtn]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <button className="login"
                    onClick={()=>{
                        if(btnName=="Login")
                            changeBtn("Logout");
                        else
                            changeBtn("Login");
                    }
                    }>{btnName}</button>
                    <li><FontAwesomeIcon icon={faCartShopping} className="icon"/></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;