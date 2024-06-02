
import { useState } from "react";
import "./ListOfFriends.css";

let index = 0;

export function ListOfFriends() {

    const [friend, setFriend] = useState("");
    const [friends, setFriends] = useState([]);

    function addFriend(e) {
        if (friend.trim() !== "") {
            setFriends([
                ...friends,
                { "id": index, "name": friend }
            ]);
        }
        index++;
        setFriend("");
    }

    return (
        <>
            <h1>Your amazing friends: </h1>
            <input id="input-a-friend" type="text" name="friend" value={friend}
                onChange={e => setFriend(e.target.value)} />
            <button id="add-a-friend" type="button"
                onClick={addFriend}>Add</button>
            <ul>
                {
                    friends.map(friend => (
                        <li key={friend.id}>{friend.name}</li>
                    ))
                }
            </ul>
        </>
    );
}