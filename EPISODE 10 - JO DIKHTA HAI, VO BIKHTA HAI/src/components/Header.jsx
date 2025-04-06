import logo from "../../../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName,changeBtn]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="font-sans text-gray-900 flex justify-between border-2 border-black bg-[#FBF5DD] shadow-md rounded-b-[15px] px-4 py-2">
            <div className="flex items-center">
                <img
                src={logo}
                alt="Logo"
                className="h-28 w-28 transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </div>
            <nav className="flex items-center space-x-6 text-lg">
                <Link to="/" className="hover:scale-105 transition duration-200">
                Home
                </Link>
                <Link to="/grocery" className="hover:scale-105 transition duration-200">
                Grocery
                </Link>
                <Link to="/about" className="hover:scale-105 transition duration-200">
                About Us
                </Link>
                <Link to="/contact" className="hover:scale-105 transition duration-200">
                Contact Us
                </Link>
                <button
                className="bg-[#7289da] text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:bg-[#5b6eae] hover:scale-95"
                onClick={() => changeBtn(btnName === "Login" ? "Logout" : "Login")}
                >
                {btnName}
                </button>
                <FontAwesomeIcon
                icon={faCartShopping}
                className="text-xl cursor-pointer hover:scale-110 transition duration-200"
                />

                {/* Online Status */}
                <div className="flex items-center ml-2">
                <span
                    className={`w-3 h-3 rounded-full ${
                    onlineStatus ? "bg-green-500 shadow-green-500 shadow-md" : "bg-red-600 shadow-red-500 shadow-md"
                    }`}
                ></span>
                </div>
            </nav>
        </div>
        
    )
}

export default Header;