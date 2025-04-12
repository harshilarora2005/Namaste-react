import RestaurantCard, { makeDiscountCard } from "./ResturantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Shimmer } from "./Shimmer";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useResturants"; 
import { colors } from "../colors";

const Body= () => {
    const {
        loading,
        filteredRestaurants,
        searchRestaurant,
        setSearchRestaurant,
        handleSearch,
        resData,
        loadMore,
        hasMore
    } = useRestaurants();
    console.log("filteredRestaurants", filteredRestaurants);
    const RestaurantCardWithDiscount = makeDiscountCard(RestaurantCard);
    const OnlineStatus=useOnlineStatus();
    if (!OnlineStatus) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center bg-red-100 text-red-700 p-5 rounded-lg shadow-lg">
                <FontAwesomeIcon icon={faWifi} className="text-6xl mb-2 animate-pulse" />
                <h1 className="text-3xl font-bold">You're Offline</h1>
                <p className="text-lg mt-2">Check your connection and try again.</p>
            </div>
        );
    }
    if(loading){
        return <Shimmer/>;
    }
    if (resData.length === 0) {
        return <div>No restaurants found.</div>;
    }
    return (
        <div className="p-5 min-h-screen bg-white">
            <div className="py-6 mb-8" style={{ backgroundColor: colors.bgMain + '40' }}>
                <div className="max-w-2xl mx-auto">
                    <div className="relative flex items-center">
                        <input
                            data-testid="search-input"
                            type="text"
                            className="w-full p-4 pl-5 pr-16 text-lg rounded-full"
                            style={{ 
                                backgroundColor: 'white',
                                border: `1px solid ${colors.primaryLight}`,
                                boxShadow: '0 4px 12px rgba(114, 137, 218, 0.15)',
                                outline: 'none',
                            }}
                            placeholder="Search restaurants..."
                            value={searchRestaurant}
                            onChange={(e) => setSearchRestaurant(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                        />
                        <button
                            className="absolute right-2 p-3 rounded-full transition-all duration-300 hover:scale-105"
                            style={{ 
                                backgroundColor: colors.primary,
                                color: 'white',
                                boxShadow: '0 2px 6px rgba(44, 58, 135, 0.3)',
                            }}
                            onClick={handleSearch}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                        </button>
                    </div>
                    
                    <div className="mt-2 text-sm text-center" style={{ color: colors.deepNavy }}>
                        {searchRestaurant ? 
                            `Searching for: "${searchRestaurant}"` : 
                            "Search by restaurant name, cuisine, or dish"
                        }
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                {filteredRestaurants.length !== 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRestaurants.map((restaurant) => (
                            <div 
                                key={restaurant?.info?.id}
                                className="transform transition-transform duration-300 hover:-translate-y-2">
                                {
                                restaurant.info.aggregatedDiscountInfoV3 ? (
                                <RestaurantCardWithDiscount {...restaurant?.info} />
                                ) : (
                                <RestaurantCard {...restaurant?.info} />
                                )
                                }
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                        <h2 className="text-center text-xl font-semibold mb-4" style={{ color: colors.deepNavy }}>
                            Sorry, we couldn't find any restaurant for "{searchRestaurant}"
                        </h2>
                    </div>
                )}
                {hasMore && filteredRestaurants.length > 0 && (
                    <div className="text-center mt-12 mb-8">
                        <button 
                            className="px-8 py-3 rounded-full text-white font-medium transition-all hover:shadow-md"
                            style={{ backgroundColor: colors.primary }}
                            onClick={loadMore}
                        >
                            Load More Restaurants
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Body;