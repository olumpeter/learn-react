
import { useState } from "react";
import "./MessageForm.css";

export function MessageForm() {
    function sendMessage(message) {

    }

    const [isMessageSent, setIsMessageSent] = useState(false);
    const [message, setMessage] = useState("");

    if (isMessageSent) {
        return (
            <>
                <h1>Your message is on its way!</h1>
            </>
        );
    } else {
        return (
            <form id="message-form" onSubmit={(e) => {
                e.preventDefault();
                setIsMessageSent(true);
                sendMessage(message)
            }}>
                <div id="message-text-area">
                    <textarea placeholder="Type your message here"
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div>
                    <button id="message-submit-button" type="submit">Send</button>
                </div>
            </form>
        );
    }
}