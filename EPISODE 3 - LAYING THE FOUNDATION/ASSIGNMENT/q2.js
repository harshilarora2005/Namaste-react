
import React from 'react';
import ReactDOM from "react-dom/client";
import './q2style.css'; 
import logo from "/logo.jpeg";
import user from "/user.png";

const HeaderComponent = () => {
    return (
        <header className="header">
        {/* Logo on the left */}
        <div className="logo">
            <img
            src={logo}
            alt="Logo"
            className="logo-img"
            />
        </div>

        {/* Search bar in the middle */}
        <div className="search-bar">
            <input
            type="text"
            className="search-input"
            placeholder="Search here..."
            />
        </div>

        {/* User icon on the right */}
        <div className="user-icon">
            <img
            src={user}
            alt="User"
            className="user-img"
            />
        </div>
        </header>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
