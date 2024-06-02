
// import { useState } from "react";
import { useImmer } from "use-immer";
import "./MembersArtworkUpdateWithImmer.css";

export function MembersArtworkUpdateWithImmer() {

    const [membersArtwork, setMembersArtwork] = useImmer(
        {
            "name": "Niki de Saint Phalle",
            "artwork": {
                "title": "Blue Nana",
                "city": "Hamburg",
                "ImageUrl": "https://i.imgur.com/Sd1AgUOm.jpg"
            }
        }
    );

    function editName() {
        const newName = prompt("Enter new name: ").trim()
        if (newName !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         name: newName 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.name = newName
                }
            )
        }
        else {
            alert("Invalid edit. Name cannot be empty.")
        }
    }

    function editTitle() {
        const newTitle = prompt("Enter new title: ").trim()
        if (newTitle !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             title: newTitle
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.title = newTitle
                }
            )
        }
        else {
            alert("Invalid edit. Artwork title cannot be empty.")
        }
    }

    function editCity() {
        const newCity = prompt("Enter new city: ").trim()
        if (newCity !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             city: newCity
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.city = newCity
                } 
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    function editImageUrl() {
        const newImageUrl = prompt("Enter new image URL: ").trim()
        if (newImageUrl !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             ImageUrl: newImageUrl
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.ImageUrl = newImageUrl
                }
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    return (
        <>
            <form id="members-artwork-form">
                <div>
                    <label htmlFor="name">
                        Name:{" "}
                        <input id="name" type="text" readOnly name="name"
                            value={membersArtwork.name}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editName}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="title">
                        Title:{" "}
                        <input id="title" type="text" readOnly name="title" 
                            value={membersArtwork.artwork.title}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editTitle}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="city">
                        City:{" "}
                        <input id="city" type="text" readOnly name="city" 
                            value={membersArtwork.artwork.city}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editCity}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="image-url">
                        Image URL:{" "}
                        <input id="image-url" type="text" readOnly name="imageUrl"
                            value={membersArtwork.artwork.ImageUrl}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editImageUrl}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
            </form>
            <p>
                <i>{membersArtwork.artwork.title}</i> by {membersArtwork.name}<br/>
                (located in {membersArtwork.artwork.city})
            </p>
            <div id="artwork-image">
                <img src={membersArtwork.artwork.ImageUrl} 
                    alt={membersArtwork.artwork.title} />
            </div>
        </>
    );
}