import RestaurantCard from "./ResturantCard";
import restaurantData from "../utils/resturantData";
import {useState} from "react";
const Body= () => {
    //state variable
    const [resData,setList]=useState([...restaurantData]);
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        const filteredData = restaurantData.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setList(filteredData);
    };  
    //normal js variable
    // let resData=[...restaurantData];
    return (
        <div className="body">
            <div className="search">
                <div className="filter">
                    <button className="filter-btn" 
                    onClick={()=>{
                        const filterData=resData.filter(
                            (res)=>res.rating>4
                        );
                        setList(filterData);
                    }}>
                    Filter By Rating</button>
                    <button className="reset-btn"
                    onClick={() => setList([...restaurantData])}
                    >Reset</button>
                </div>
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search restaurants..." 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
            <div className="res-container">
            {resData.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;