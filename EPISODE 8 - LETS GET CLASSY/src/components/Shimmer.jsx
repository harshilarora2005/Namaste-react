import ResturantMenu from "../ResturantMenu.css";
export const Shimmer = () => {
    return (
    <div className="body">
        <div className="shimmer-search-box">
        </div>
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    </div>
    );
}
export const RestaurantMenuShimmer = ()=>{
    return (
        <div className="menu">
            <div className="restaurant-header shimmer">
                <div className="shimmer-img"></div>
                <div className="restaurant-header-details">
                    <div className="shimmer-text shimmer-text-large"></div>
                    <div className="shimmer-text shimmer-text-medium"></div>
                    <div className="shimmer-text shimmer-text-small"></div>
                    <div className="shimmer-text shimmer-text-small"></div>
                </div>
            </div>

            {[...Array(5)].map((_, index) => (
                <div key={index} className="menu-items shimmer">
                    <div className="left">
                        <div className="shimmer-text shimmer-text-medium"></div>
                        <div className="shimmer-text shimmer-text-small"></div>
                        <div className="shimmer-text shimmer-text-small"></div>
                    </div>
                    <div className="right">
                        <div className="shimmer-img"></div>
                        <div className="shimmer-btn"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};