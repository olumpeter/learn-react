
import { useState } from "react";
import "./MembersInfoForm.css";

export function MembersInfoForm() {

    const [membersInfo, setMembersInfo] = useState(
        {
            "firstName": "Peter",
            "lastName": "Olum",
            "email": "olumpeter@gmail.com"
        }
    );

    function handleFirstNameChange(e) {
        setMembersInfo(
            {
                // "firstName": e.target.value,
                // "lastName": membersInfo.lastName,
                // "email": membersInfo.email
                ...membersInfo,
                "firstName": e.target.value
            }
        );
    }

    function handleLastNameChange(e) {
        setMembersInfo(
            {
                // "firstName": membersInfo.firstName,
                // "lastName": e.target.value,
                // "email": membersInfo.email
                ...membersInfo,
                "lastName": e.target.value,
            }
        );
    }

    function handleEmailChange(e) {
        setMembersInfo(
            {
                // "firstName": membersInfo.firstName,
                // "lastName": membersInfo.lastName,
                // "email": e.target.value
                ...membersInfo,
                "email": e.target.value
            }
        );
    }

    return (
        <>
            <form id="membersInfoForm">
                <div>
                    <label htmlFor="first-name">
                        First name:{" "}
                        <input id="first-name" type="text" name="firstName"
                            value={membersInfo.firstName}
                            onChange={handleFirstNameChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="last-name">
                        Last name:{" "}
                        <input id="last-name" type="text" name="lastName"
                            value={membersInfo.lastName}
                            onChange={handleLastNameChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email:{" "}
                        <input id="email" type="text" name="email"
                            value={membersInfo.email}
                            onChange={handleEmailChange} />
                    </label>
                </div>
            </form>
            <p>
                {membersInfo.firstName} {membersInfo.lastName} ({membersInfo.email})
            </p>
        </>
    );
}