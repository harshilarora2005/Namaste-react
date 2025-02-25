export const Shimmer = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-4/5 h-12 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-lg my-5"></div>
            <div className="flex flex-wrap justify-center w-3/4">
            {[...Array(20)].map((_, index) => (
                <div
                key={index}
                className="w-64 h-64 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse m-2 rounded-lg shadow-md"
                ></div>
            ))}
            </div>
        </div>
    );
};

export const RestaurantMenuShimmer = () => {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <div className="flex gap-5 mb-5 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-lg p-5">
            <div className="w-64 h-48 bg-gray-300 rounded-lg"></div>
            <div className="flex flex-col space-y-3">
                <div className="w-3/4 h-6 bg-gray-300 rounded-lg"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded-lg"></div>
                <div className="w-1/3 h-4 bg-gray-300 rounded-lg"></div>
                <div className="w-1/4 h-4 bg-gray-300 rounded-lg"></div>
            </div>
            </div>
            {[...Array(5)].map((_, index) => (
            <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 p-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"
            >
                <div className="flex flex-col space-y-2">
                <div className="w-40 h-5 bg-gray-300 rounded-lg"></div>
                <div className="w-32 h-4 bg-gray-300 rounded-lg"></div>
                <div className="w-24 h-4 bg-gray-300 rounded-lg"></div>
                </div>
                <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
            </div>
            ))}
        </div>
    );
};
