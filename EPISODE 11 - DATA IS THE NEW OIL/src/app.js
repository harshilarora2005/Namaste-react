import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Loading from "./components/Loading.jsx";
import UserContext from "./utils/UserContext.js";
//import Grocery from "./components/Grocery.jsx";

/*
    Basically our bundler parcel consolidates all the code into one JS file.
    This can be good for smaller projects but for larger applications we would rather split this into smaller chunks (Chunking/Code Splitting/Dynamic Bundling), so a network call only to the concerned JS file is made which handles those particular components.
    This can be done through LAZY LOADING ; which is on demand loading of component when it is in use.
*/
/*
    But react is very fast, since it expected the grocery code to arrive which rather takes some times (12ms), it throws an error. Thus we import a component, Suspense, from react which suspends 
*/
const Grocery = lazy(()=>import("./components/Grocery.jsx")) // Comes as a named export from react package.
const AboutUs = lazy(()=>import("./components/AboutUs.jsx"))
const Login = lazy(()=>import("./components/Login.jsx"))
const AppLayout = () => {
    const [userName, setUserName] = useState("Guest");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName,isLoggedIn:isLoggedIn,setIsLoggedIn }}>
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <Suspense fallback={<Loading/>}><AboutUs/></Suspense>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<Loading/>}><Grocery/></Suspense>
            },
            {
                path:"/contact",
                element: <ContactUs/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/login",
                element: <Login/>
            }
        ],
        errorElement: <Error/>,
        
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);