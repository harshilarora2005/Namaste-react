import { createContext, use } from "react";

const UserContext = createContext({
    loggedInUser: "Guest",
    isLoggedIn: false,
});
export default UserContext;