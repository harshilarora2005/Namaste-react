import RestaurantCard from "./ResturantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState,useEffect} from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    SWIGGY_API_URL,
    SWIGGY_REST_API_PATH,
} from "../../../public/common/constants";
import { Shimmer } from "./Shimmer";

const Body= () => {
    const [resData,setList]=useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");
    const handleSearch = () => {
        const filtered = resData.filter((res) =>
            res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
        );
    
        setFilteredRestaurants(filtered);
        setRestaurantName(searchRestaurant);
    };
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];
            setList(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    if(resData.length==0){
        return <Shimmer/>;
    }
    return (
        <div className="body">
            <div className="search">
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search restaurants..." 
                    value={searchRestaurant}
                    onChange={(e) => setSearchRestaurant(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button
                    className="search-icon"
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.length !== 0 ? (
                filteredRestaurants.map((restaurant) => (
                    
                    <RestaurantCard
                    key={restaurant?.info?.id}
                    {...restaurant?.info}
                    />
                ))
                ) : (
                <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
                )}
            </div>
        </div>
    );
};

export default Body;