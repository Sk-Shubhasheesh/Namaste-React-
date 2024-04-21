import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const[onlineStatus, setOnlineStatus] = useState(true)
    
    // try to chek if online
    useEffect(()=>{
        window.addEventListener("offline", (event)=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online", (event)=>{
            setOnlineStatus(false)
        })

    }, [])

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;