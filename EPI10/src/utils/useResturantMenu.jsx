import { useEffect,useState } from "react";
import { MENU_API_URL } from "../../../public/common/constants";
const useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[resId])
    const fetchData = async()=>{
        try {
            const data = await fetch(MENU_API_URL + resId);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResInfo(null);
        }
    };
    
    return resInfo;
}

export default useResturantMenu;