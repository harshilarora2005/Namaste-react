import { useState } from "react";
import React from "react";
import burgerImage from "../../../public/images/burger-image.png";
import Profile from "./Profile";
const AboutUs = () => {
    const [showUser, setShowUser] = useState(false);
    return (
        <div className="flex flex-col align-items-center justify-center p-10 bg-gray-100 ">
            <div className="flex flex-col mb-5">
                {
                <button className="bg-red-500 text-white border-none px-5 py-2.5 text-base rounded cursor-pointer transition duration-300 ease-in-out hover:bg-[#e5533d] " onClick={() => setShowUser(!showUser)}>
                    {showUser ? "Hide User" : "Show User"}
                </button>
                }
                {showUser && <Profile/>}
            </div>
            <div className="flex align-items-center justify-between bg-white p-10 rounded-2.5 w-full shadow-md">
                <div className="max-[50%]">
                    <h1 className="text-3xl font-bold text-gray-800 leading-snug">
                        Welcome to <br /> The world of <br />{" "}
                        <span className="text-[#ff6347]">Tasty & Fresh Food</span>
                    </h1>
                    <h4 className="text-lg text-gray-600 mt-2">
                        "Better you will feel if you eat a Quick<span className="text-[#ff6347]">Bite</span> healthy
                        meal"
                    </h4>
                    </div>
                    <div className="max-w-[50%]">
                    <img 
                        src={burgerImage} 
                        alt="Food Image" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;