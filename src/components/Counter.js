import React from "react";
import "./Counter.css"
import Count from "./Count"
export default function Counter() {
    const [count, setCount] = React.useState(0);
    

    const add = () => {
        setCount(prevCount => prevCount + 1
        )
    }

    const subtract = () => {
        setCount(prevCount => {
            if(prevCount <= 0){
                alert("You cant go back");
                return prevCount;
            }else{
                return prevCount - 1;
            }
        });
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>

        </div>
    )
}