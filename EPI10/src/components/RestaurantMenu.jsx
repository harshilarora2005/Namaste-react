import { IMG_CDN_URL } from "../../../public/common/constants";
import { RestaurantMenuShimmer } from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    // Custom Hook
    const restaurantInfo = useResturantMenu(resId);

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
        <div className="max-w-6xl mx-auto p-5">
        <div className="flex gap-5 mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
            <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-64 h-50 rounded-lg object-fill"
            />
            <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h3 className="text-lg text-gray-600">{locality}</h3>
            <p className="text-sm text-gray-500">{cuisines?.join(", ")}</p>
            <div className="flex items-center space-x-2 text-sm">
                <div
                className={`text-white px-2 py-1 rounded-md flex items-center space-x-1 ${
                    avgRatingString >= 4 ? "bg-green-600" : "bg-red-500"
                }`}
                >
                <span>{avgRatingString || 3.8}</span>
                <FontAwesomeIcon icon={faStar} />
                <span>({totalRatingsString || "1K+ ratings"})</span>
                </div>
                <span>|</span>
                <span className="font-semibold">{sla?.slaString}</span>
            </div>
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
                <div
                key={id}
                className="flex justify-between items-center border-b border-gray-200 p-4"
                >
                <div className="flex flex-col space-y-1">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <h4 className="text-md text-gray-700">
                    ₹{price / 100 || defaultPrice / 100}
                    </h4>
                    <p className="text-sm text-gray-500">
                    {description ? description.slice(0, 60) : "Dummy"}
                    </p>
                    <div
                    className={`text-white px-2 py-1 rounded-md flex w-max items-center space-x-1 text-sm ${
                        ratings?.aggregatedRating?.rating >= 4
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                    >
                    <FontAwesomeIcon icon={faStar} />
                    <span>
                        {ratings?.aggregatedRating?.rating || 3.8} (
                        {ratings?.aggregatedRating?.ratingCountV2 || 6})
                    </span>
                    </div>
                </div>
                <div className="text-center">
                    <img
                    src={IMG_CDN_URL + imageId}
                    alt={name}
                    className="w-24 h-24 rounded-lg object-cover"
                    />
                    <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                    ADD
                    </button>
                </div>
                </div>
            );
            })
        ) : (
            <h2 className="text-center text-xl font-bold mt-5">No items available</h2>
        )}
        </div>
    );
};

export default RestaurantMenu;
