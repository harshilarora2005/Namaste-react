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
import {Provider} from "react-redux";
import appStore from "./utils/appStore.jsx"
const AboutUs = lazy(()=>import("./components/AboutUs.jsx"))
const Login = lazy(()=>import("./components/Login.jsx"))
const Cart = lazy(()=> import("./components/Cart.jsx"))
const AppLayout = () => {
    const [userName, setUserName] = useState("Guest");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName,isLoggedIn:isLoggedIn,setIsLoggedIn }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path:"/cart",
                element: <Cart/>
            },
        ],
        errorElement: <Error/>,
        
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);