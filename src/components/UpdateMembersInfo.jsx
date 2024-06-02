
import { useState } from "react";
import "./UpdateMembersInfo.css";

export function UpdateMembersInfo() {

    const [membersInfo, setMembersInfo] = useState([
        {
            "id": 1,
            "firstName": "Peter",
            "lastName": "Olum",
            "emailAddress": "olumpeter@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Michael",
            "lastName": "Njoroge",
            "emailAddress": "michaelnjoroge@gmail.com"
        },
    ]);

    const tableRows = [];
    let index = 0;
    for (const memberInfo of membersInfo) {
        tableRows.push(
            <tr key={index}>
                <td>{memberInfo.id}</td>
                <td>{memberInfo.firstName}</td>
                <td>{memberInfo.lastName}</td>
                <td>{memberInfo.emailAddress}</td>
            </tr>
        );
        index++;
    }

    function addMembersInfo() {
        const id = membersInfo.length + 1;
        const firstName = prompt("First name: ").trim();
        const lastName = prompt("Last name: ").trim();
        const emailAddress = prompt("Email address: ").trim();

        if (firstName !== "" && lastName !== "" && emailAddress !== "") {
            setMembersInfo([...membersInfo, {
                "id": id,
                "firstName": firstName,
                "lastName": lastName,
                "emailAddress": emailAddress
            }]);
        }
    }

    function deleteMembersInfo() {
        const id = Number(prompt("ID: ").trim());

        // const newMembersInfor = []
        //     for (const memberInfo of membersInfo) {
        //         if (memberInfo.id !== id) {
        //             newMembersInfor.push(memberInfo)
        //         }
        //     }

        const newMembersInfor = membersInfo.filter(memberInfo => memberInfo.id !== id);

        setMembersInfo(newMembersInfor);
    }

    return (
        <>
            <h1>Members Information</h1>
            <div>
                <button type="button" onClick={addMembersInfo}>ADD</button>
                <button type="button" onClick={deleteMembersInfo}>DELETE</button>
            </div>

            <table id="members-info-table">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                    </tr>
                    {tableRows}
                </tbody>

            </table>
        </>
    );
}