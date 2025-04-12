import { useState, useEffect } from "react";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from "../../../public/common/constants";

const useRestaurants = () => {
    const [resData, setResData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [loading, setLoading] = useState(true);
    const [nextOffset, setNextOffset] = useState(null);
    const fetchData = async (offset = null) => {
        try {
            setLoading(true);
            const url = offset
                ? `${SWIGGY_API_URL}&nextOffset=${offset}`
                : SWIGGY_API_URL;

            const data = await fetch(url);
            const json = await data.json();
            console.log(json);
            const newRestaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];
            console.log("API Response:", json);
            setResData((prev) => {
                const existingIds = new Set(prev.map((r) => r.info.id));
                const uniqueNew = newRestaurants.filter((r) => !existingIds.has(r.info.id));
                return [...prev, ...uniqueNew];
            });

            setFilteredRestaurants((prev) => {
                const existingIds = new Set(prev.map((r) => r.info.id));
                const uniqueNew = newRestaurants.filter((r) => !existingIds.has(r.info.id));
                return [...prev, ...uniqueNew];
            });

            const newOffset = json?.data?.pageOffset?.nextOffset;
            setNextOffset(newOffset);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = () => {
        if(searchRestaurant=="") {
            setFilteredRestaurants(resData);
            return;
        }
        const filtered = resData.filter((res) =>
            res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    const loadMore = () => {
        if (nextOffset) {
            console.log("Fetching more with offset:", nextOffset);
            fetchData(nextOffset);
        } else {
            console.log("No nextOffset found.");
        }
    };

    return {
        loading,
        filteredRestaurants,
        searchRestaurant,
        setSearchRestaurant,
        handleSearch,
        resData,
        loadMore,
        hasMore: !!nextOffset,
    };
};

export default useRestaurants;
