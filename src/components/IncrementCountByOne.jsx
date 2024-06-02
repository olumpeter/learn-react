
import { useState } from "react";
import "./IncrementCountByOne.css";

export function IncrementCountByOne() {

    const [count, setCount] = useState(0);

    return (
        <div id="increment-count-by-one">
            <h1 id="count">Count: {count}</h1>
            <button id="increment" onClick={() => {
                setCount(count + 1)}}>+1</button>
        </div>
    );
}