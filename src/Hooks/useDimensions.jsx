import { useEffect, useState } from "react";

export function useDimension(){
     const[dimensions ,  setDimensions] = useState(
        {width : window.innerWidth},
        {height : window.innerHeight}
     )
     const handleScreenDimension = () => {
        setDimensions({
            width: window.innerWidth ,
            height: window.innerHeight 
        })
     }
    useEffect(()=>{
        window.addEventListener("resize" , handleScreenDimension)

        return ()=>{
            window.removeEventListener("resize" , handleScreenDimension)
        }
    })
    return dimensions;
}    