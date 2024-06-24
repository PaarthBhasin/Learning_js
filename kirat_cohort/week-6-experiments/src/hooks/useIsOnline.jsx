import { useEffect, useState } from "react";

export function useIsOnline(){
    const [isOnline, useIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', ()=> setIsOnline(false));
    })
    return isOnline;
}