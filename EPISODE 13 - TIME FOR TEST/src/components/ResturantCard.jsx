import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../../public/common/constants";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/restSlice";
const RestaurantCard = (props) => {
    const 
    {
        id,
        cloudinaryImageId,
        name,
        areaName,
        sla,
        cuisines,
        costForTwo,
        avgRating,
    } = props;
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    handleAddItem(props);
    return (
        <Link to={"/restaurants/" + id}>
            <div data-testid="rescard" className="w-64 h-80 bg-gray-200 rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
                <img
                className="w-full h-[180px] rounded-md"
                src={IMG_CDN_URL + cloudinaryImageId}
                alt={name}
                />
                <h3 className="text-lg font-semibold mt-2 truncate">{name}</h3>
                <div className="flex items-center gap-3 mt-1">
                <p
                    className={`text-white text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1 ${
                    avgRating >= 4.0 ? "bg-green-500" : "bg-red-500"
                    }`}
                >
                    {avgRating}
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <h4 className="text-sm text-gray-700">{costForTwo}</h4>
                <h4 className="text-sm text-gray-700">{sla?.deliveryTime} mins</h4>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                <p className="truncate">{cuisines?.join(", ")}</p>
                <p className="text-gray-500">{areaName}</p>
                </div>
            </div>
        </Link>
    );
};
// Higher Order Component (HOC) for RestaurantCard with discount
// Input - RestaurantCard
// Output - RestaurantCard with discount offer if available else normal RestaurantCard

export const makeDiscountCard = (RestaurantCard) => {
    return (props) => {
        const { aggregatedDiscountInfoV3 } = props;
        const hasDiscount = aggregatedDiscountInfoV3 && aggregatedDiscountInfoV3.header;
        const discountText = hasDiscount 
            ? aggregatedDiscountInfoV3.subHeader 
                ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
                : `${aggregatedDiscountInfoV3.header}`
            : "";

        return (
            <div className="w-[250px] h-[300px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.98] transition-transform duration-300 relative">
                <RestaurantCard {...props} />
                {hasDiscount && (
                    <div 
                        className="absolute top-2 right-0 px-3 py-1 rounded-l-lg font-bold text-white shadow-md transform transition-transform duration-300 hover:scale-105"
                        style={{ 
                            backgroundColor: 'rgba(220, 53, 69, 0.85)',
                            backdropFilter: 'blur(4px)',
                            maxWidth: '90%',
                            fontSize: discountText.length > 20 ? '0.8rem' : '1rem'
                        }}
                    >
                        {discountText}
                    </div>
                )}
            </div>
        );
    };
};

export default RestaurantCard;