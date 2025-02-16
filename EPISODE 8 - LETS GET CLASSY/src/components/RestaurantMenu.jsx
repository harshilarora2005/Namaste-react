import { useState, useEffect } from "react";
import { MENU_API_URL,IMG_CDN_URL } from "../../../public/common/constants";
import { RestaurantMenuShimmer } from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router";
import "../ResturantMenu.css";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenusData = async () => {
        try {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantInfo(json?.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchMenusData();
    }, [resId]);

    if (restaurantInfo === null) {
        return <RestaurantMenuShimmer />;
    }

    const {
        cloudinaryImageId,
        name,
        avgRatingString,
        totalRatingsString,
        cuisines,
        locality,
        sla,
    } = restaurantInfo?.cards[2]?.card?.card?.info || {};

    const cards =
        restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    let itemCards =
        cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

    return (
        <div className="menu">
        <div className="restaurant-header">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <div className="restaurant-header-details">
            <h1>{name}</h1>
            <h3>{locality}</h3>
            <p>{cuisines?.join(", ")}</p>
            <h4 className="rating-time">
                <div className="rating" style={
                        avgRatingString >= 4
                        ? { backgroundColor: "var(--green)" }
                        : { backgroundColor: "var(--red)" }
                    }>
                {avgRatingString}
                <FontAwesomeIcon icon={faStar} />
                <span>
                    {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
                </span>
                </div>
                <span>|</span>
                <span className="time">{sla?.slaString}</span>
            </h4>
            </div>
        </div>

        {itemCards.length ? (
            itemCards.map((item) => {
            const {
                id,
                name,
                price,
                defaultPrice,
                ratings,
                imageId,
                description,
            } = item.card.info;
            return (
                <div key={id} className="menu-items">
                <div className="left">
                    <h2>{name}</h2>
                    <h4>₹{price / 100 || defaultPrice / 100}</h4>
                    <p>{description && description.slice(0, 60) || "Dummy"}</p>
                    <h4 className="rating" style={
                        ratings?.aggregatedRating?.rating >= 4
                        ? { backgroundColor: "var(--green)" }
                        : { backgroundColor: "var(--red)" }
                    }>
                    <FontAwesomeIcon icon={faStar} />
                    <span>
                        {ratings?.aggregatedRating?.rating || 3.8} (
                        {ratings?.aggregatedRating?.ratingCountV2 || 6})
                    </span>
                    </h4>
                </div>
                <div className="right">
                    <img src={IMG_CDN_URL + imageId} alt={name} />
                    <button className="add-btn">ADD</button>
                </div>
                </div>
            );
            })
        ) : (
            <h2>No items available</h2>
        )}
        </div>
    );
};

export default RestaurantMenu;