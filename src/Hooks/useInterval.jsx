import { useEffect } from "react";


export function useInterval(fn , timeout){
   
    useEffect(()=>{
    const intervalId  = setInterval(fn,timeout)
     return ()=>{
        clearInterval(intervalId)
     };
    },[fn ,timeout])

};