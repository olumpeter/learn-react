
import { useState } from "react";
import "./TrafficLight.css";

export function TrafficLight() {

    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
    }

    if (walk) {
        return (
            <>
                <div>
                    <button onClick={handleClick}>Change to stop</button>
                </div>
                <div>
                    <h1 style={{ color: 'darkgreen' }}>Walk</h1>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <button onClick={handleClick}>Change to walk</button>
                </div>
                <div>
                    <h1 style={{ color: 'darkred' }}>Walk</h1>
                </div>
            </>
        );
    }
}