import { useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);

    let inCount = ()=>{
        setCount(count+1);
    };
    let deCount = ()=>{
        setCount(count-1);
    };
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount} >Increase</button>
            <button onClick={deCount} >Increase</button>
        </div>
    )
}