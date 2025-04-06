import { IMG_CDN_URL } from "../../../public/common/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MenuList = ({ items }) => {
    return (
        <div>
        {items.length?(
        items.map((item) => {
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
            )
        }
        </div>
    );
};

export default MenuList;