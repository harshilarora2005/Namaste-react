import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

export default RestaurantCard;