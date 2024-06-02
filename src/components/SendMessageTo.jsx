
import { useState } from "react";
import "./SendMessageTo.css"

export function SendMessageTo() {

    const [to, setTo] = useState("Alice")
    const [message, setMessage] = useState("Hello")

    function handleSentdButtonClick(e) {
        e.preventDefault();
        setTimeout(
            () => {
                alert(`You said ${message} to ${to}`)
            },
            5000
        )
    }

    return (
        <>
            <form id="send-message-form" onSubmit={handleSentdButtonClick}>
                <div id="name-select">
                    <label>
                        To:  
                        <select onChange={e => setTo(e.target.value)}>
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                        </select>
                    </label>
                </div>
                <div id="message-text-area">
                    <textarea placeholder="Message" value={message} onChange={
                        (e) => {
                            setMessage(e.target.value)
                        }
                    }/>
                </div>
                <div id="send-form">
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
}