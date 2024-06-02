
import "./BatchStateUpdates.css";
import { useState } from "react";

export function ReactBatchStateUpdates() {

    function handleClick() {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1 id="number">{number}</h1>
            <button type="button" onClick={handleClick}>+3</button>
        </>
    );
}