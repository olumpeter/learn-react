
import React from "react";
import quotes from "./quotes";
import FancyText from "./FancyText";


export default function InspirationGenerator({children}) {
    const [index, setIndex] = React.useState(0);
    const quote = quotes[index];

    function nextQuote() {
        setIndex(index+1)
        if (index < quotes.length - 1) {
            const quote = quotes[index];
        } else {
            setIndex(0)
            const quote = quotes[index];
        }
        return quote;
    }

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={nextQuote}>Inspire me again</button>
            {children}
        </>
    );
}