import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
        
    )
}
const styleCard ={
    backgroundColor: "#e8e9eb",
}
const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={restaurant.logo} alt={`${restaurant.name} logo`} />
            <h3>{restaurant.name}</h3>
            <span className="res-head">
                <p className="rating">
                    {restaurant.rating}
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <p className="type">{restaurant.type}</p>
            </span>
            <span className="res-body">
                <p className="cuisine">{restaurant.cuisine}</p>
                <p className="location">{restaurant.location}</p>
            </span>
        </div>
    );
};

const restaurantData = [
    {
        name: "TableSpoon",
        logo: "https://assets.zeezest.com/blogs/PROD_Banner_TBSP_Food15_1648563762698.jpg",
        rating: 4.5,
        type: "Dining",
        cuisine: "American, Italian, Desserts, BBQ, Pizza, Pasta, Burger",
        location: "DLF Avenue, Saket, New Delhi",
    },
    {
        name: "And Grill House",
        logo: "https://b.zmtcdn.com/data/pictures/2/308322/9fceaa15fa05d707cc2d311ae9be066d_featured_v2.jpg",
        rating: 4.3,
        type: "Casual Dining",
        cuisine: "Seafood, Fast Food, Lebanese",
        location: "Greater Kailash 2 (GK2), New Delhi",
    },
    {
        name: "Barbeque Nation",
        logo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1c/c6/d1/caption.jpg?w=600&h=-1&s=1",
        rating: 4.6,
        type: "Buffet",
        cuisine: "Indian, BBQ, North Indian, Desserts",
        location: "Connaught Place, New Delhi",
    },
    {
        name: "Big Chill Cafe",
        logo: "https://b.zmtcdn.com/data/reviews_photos/854/c8d5adb581acbda8568e3642b6804854_1618842417.jpg",
        rating: 4.4,
        type: "Cafe",
        cuisine: "Italian, Desserts, Continental",
        location: "Khan Market, New Delhi",
    },
    {
        name: "Sagar Ratna",
        logo: "https://b.zmtcdn.com/data/pictures/9/20473779/71d216d2b5b7a2e7a2fd7a8dc5323f65.jpg",
        rating: 4.2,
        type: "Casual Dining",
        cuisine: "South Indian, Vegetarian",
        location: "Sector 12, Dwarka, New Delhi",
    },
    {
        name: "Pirates of Grill",
        logo: "https://b.zmtcdn.com/data/pictures/2/19282662/7abb915885381ae22bdfb7ad83c06ca1.jpg?fit=around|750:500&crop=750:500;*,*",
        rating: 4.5,
        type: "Buffet",
        cuisine: "North Indian, BBQ, Continental",
        location: "Pacific Mall, Subhash Nagar, New Delhi",
    },
    {
        name: "Punjab Grill",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f1vlGvlKbVzBoiPM7_D0N8Dvdu8hyQc4bw&s",
        rating: 4.3,
        type: "Fine Dining",
        cuisine: "North Indian, Mughlai",
        location: "Ambience Mall, Vasant Kunj, New Delhi",
    },
    {
        name: "Biryani Blues",
        logo: "https://content.jdmagicbox.com/v2/comp/delhi/g5/011pxx11.xx11.180417081120.l4g5/catalogue/biryani-blues-subhash-nagar-delhi-biryani-blues-1iwsgdcizt.jpg",
        rating: 4.1,
        type: "Casual Dining",
        cuisine: "Biryani, Hyderabadi, Mughlai",
        location: "Sector 18, Noida",
    },
    {
        name: "Social",
        logo: "https://popmenucloud.com/xyajkewg/717b2748-e039-45fb-81b9-4e8662a2f095.jpg",
        rating: 4.3,
        type: "Bar & Cafe",
        cuisine: "Continental, American, Desserts",
        location: "Hauz Khas Village, New Delhi",
    },
    {
        name: "Tamasha",
        logo: "https://media-cdn.tripadvisor.com/media/photo-s/0e/7b/9d/e0/beautiful-decor.jpg",
        rating: 4.2,
        type: "Bar & Lounge",
        cuisine: "North Indian, Continental, Italian",
        location: "Connaught Place, New Delhi",
    },
];

const Body= () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurants..." />
            </div>
            <div className="res-container">
            {restaurantData.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);