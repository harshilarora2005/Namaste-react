import logo from "../../../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useState,useContext} from "react";
import { Link, useNavigate} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Header = () => {
    const {isLoggedIn,setIsLoggedIn,loggedInUser,setUserName}=useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            setUserName("Guest");
        } else {
            navigate("/login");
        }
    };
    //subscribing to cart Slice of the store...
    const cart = useSelector((store)=>store.cart.items);
    clearCart();
    return (
        <div className="font-sans text-gray-900 flex justify-between border-2 border-black bg-[#FBF5DD] shadow-md rounded-b-[15px] px-4 py-2">
            <div className="flex gap-5">
            <Link to="/">
                <div className="flex items-center">
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-28 w-28 transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                </div>
            </Link>
            <div className="flex gap-2 items-center ">
                <div className="w-8 h-8 bg-[#7289da] rounded-full flex items-center justify-center text-white font-bold transition-transform duration-500 ease-in-out hover:scale-110">
                    {loggedInUser.charAt(0).toUpperCase()}
                </div>
                <span className="text-lg font-medium">
                    Hi, <span className="text-[#7289da] font-semibold">{loggedInUser}</span>
                </span>
            </div>
            </div>
            <nav className="flex items-center space-x-6 text-lg">
                <Link to="/" className="hover:scale-105 transition duration-200">
                Home
                </Link>
                <Link to="/about" className="hover:scale-105 transition duration-200">
                About Us
                </Link>
                <Link to="/contact" className="hover:scale-105 transition duration-200">
                Contact Us
                </Link>
                <button
                    className="bg-[#7289da] text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:bg-[#5b6eae] hover:scale-95"
                    onClick={handleLoginClick}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
                
                <button className="relative"
                onMouseDown={()=>navigate("/cart")}
                >
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-xl cursor-pointer hover:scale-110 transition duration-200"
                />
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-[#7289da] border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart.length}</div>
                </button>

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