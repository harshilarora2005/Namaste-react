import { useEffect, useState } from "react";
import { GITHUB_USER_API, GITHUB_USERNAME } from "../../../public/common/constants";

const Profile = () => {
    const [userInfo, setUserInfo] = useState({});

    async function getUserInfo() {
        try {
        const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
        const json = await response.json();
        setUserInfo(json);
        } catch (error) {
        console.error("Error while fetching user data: ", error);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[800px] w-full mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
        {/* Left Profile Section */}
        <div className="p-5 flex-1 text-center">
            <h1 className="text-2xl font-bold text-[#333] mb-2.5">About Me</h1>
            <h2 className="text-lg text-[#555]">Name: {userInfo.name}</h2>
            <h2 className="text-lg text-[#555]">Location: {userInfo.location}</h2>
            <img
            className="w-[120px] h-[120px] rounded-full mt-2.5 border-[3px] border-solid border-[#ff6347] mx-auto"
            src={userInfo.avatar_url}
            alt="User Avatar"
            />
        </div>

        {/* Right Profile Section */}
        <div className="flex-1 p-5">
            <h1 className="text-2xl font-bold text-[#333] mb-2.5 text-center">My Skills</h1>
            <ul className="list-none p-0 space-y-2">
            {["HTML", "CSS", "JavaScript", "React", "C++", "Java"].map((skill, index) => (
                <li key={index} className="bg-[#ff6347] text-white px-4 py-2 rounded text-center text-base">
                {skill}
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default Profile;
