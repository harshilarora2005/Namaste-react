import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMG_CDN_URL } from "../../../public/common/constants";
import { Link } from "react-router";
const styleCard ={
    backgroundColor: "#e8e9eb",
}
const RestaurantCard = ({
    id,
    cloudinaryImageId,
    name,
    areaName,
    sla,
    cuisines,
    costForTwo,
    avgRating,
}) => {
    return (
        <Link to={"/restaurants/" + id}>
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <h3 className="res-name">{name.slice(0, 22)}
            {name.length > 22 ? "..." : ""}</h3>
            <span className="res-head">
                <p className="rating" style={
                        avgRating > 4.2
                        ? { backgroundColor: "var(--green)" }
                        : { backgroundColor: "var(--red)" }
                }>
                    {avgRating}
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} mins</h4>
            </span>
            <span className="res-body">
                <p className="cousine">
                    {cuisines.join(", ").slice(0, 30)}
                    {cuisines.join(", ").length > 30 ? "..." : ""}
                </p>
                <p className="location">{areaName}</p>
            </span>
        </div>
        </Link>
    );
};

export default RestaurantCard;