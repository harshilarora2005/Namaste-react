import { useState } from "react";
import React from "react";
import burgerImage from "../../../public/images/burger-image.png";
import "../aboutUs.css";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const AboutUs = () => {
    const [showUser, setShowUser] = useState(false);
    return (
        <div className="about-container">
            <div className="show-profile">
                {
                <button className="user-btn" onClick={() => setShowUser(!showUser)}>
                    {showUser ? "Hide User" : "Show User"}
                </button>
                }
                {showUser && <Profile name={"Harshil Arora"} location={"Delhi"}/>}
                {showUser && <ProfileClass name={"Harshil Arora"} location={"Delhi"}/>}
            </div>
            <div className="about">
                <div className="about-left">
                    <h1>
                        Welcome to <br /> The world of <br />{" "}
                        <span>Tasty & Fresh Food</span>
                    </h1>
                    <h4>
                        "Better you will feel if you eat a Tasty<span>Trails</span> healthy
                        meal"
                    </h4>
                    </div>
                    <div className="about-right">
                    <img src={burgerImage} alt="Food Image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;