import { Component } from "react";
import {GITHUB_USER_API, GITHUB_USERNAME} from "../../../public/common/constants";
import "../aboutUs.css";

class UserClass extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        userInfo: {
            name: "Harshil Arora",
            location: "Delhi, India",
            avatar_url: "https://avatar.iran.liara.run/public/42",
        }
        };
    }

    async getUserInfo() {
        try {
        const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
        const json = await response.json();

        this.setState({
            userInfo: json
        });
        } catch (error) {
        console.error("Error while fetching user data: ", error);
        }
    }

    componentDidMount() {
        this.getUserInfo();
        console.log("mounter class");
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="profile-container">
            <div className="left-profile">
                <h1>About Me</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <img className="profile-pic" src={avatar_url} alt="User Avatar" />
            </div>

            <div className="right-profile">
                <h1>My Skills</h1>
                <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
                </ul>
            </div>
            </div>
        );
    }
}

export default UserClass;
