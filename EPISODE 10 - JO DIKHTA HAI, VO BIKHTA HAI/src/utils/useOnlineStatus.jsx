import { useState,useEffect } from "react"

const useOnlineStatus = () => {
    const[OnlineStatus,setStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        });
        window.addEventListener("online",()=>{
            setStatus(true);
        });
    },[])

    //boolean
    return OnlineStatus;
}

export default useOnlineStatus