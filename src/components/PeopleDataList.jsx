
import "./PeopleDataList.css"

const peopleData = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

// This data can be structured even more.

const peopleData2 = [
    {
        key: 1, 
        imageUrl: "https://i.imgur.com/MK3eW3A.jpg",
        name:"Creola Katherine Johnson", 
        profession: "mathematician", 
        accomplishment: "spaceflight calculations"
    },
    {
        key: 2, 
        imageUrl: "https://i.imgur.com/mynHUSa.jpg",
        name:"Mario José Molina-Pasquel Henríquez", 
        profession: "chemist", 
        accomplishment: "discovery of Arctic ozone hole"
    },
    {
        key: 3, 
        imageUrl: "https://i.imgur.com/bE7W1ji.jpg",
        name:"Mohammad Abdus Salam", 
        profession: "physicist", 
        accomplishment: "electromagnetism theory"
    },
    {
        key: 4, 
        imageUrl: "https://i.imgur.com/IOjWm71.jpg",
        name:"Percy Lavon Julian", 
        profession: "chemist", 
        accomplishment: "pioneering cortisone drugs, steroids and birth control pills"},
    {
        key: 5, 
        imageUrl: "https://i.imgur.com/lrWQx8l.jpg",
        name:"Subrahmanyan Chandrasekhar", 
        profession: "astrophysicist", 
        accomplishment:"Astrophysicist white dwarf star mass calculations"
    },
];

export function PeopleDataList() {
    // fixing Warning: Each child in a list should have a unique “key” prop.
    let key = 1;
    const peopleDataList = [];
    for (const data of peopleData) {
        peopleDataList.push(<li key={key}>{data}</li>);
        key++;
    }
    return <ul id="peopleDataList">{peopleDataList}</ul>;
}

export function MathematiciansDataList () {
    const mathematiciansData = peopleData2.filter((data) => (data.profession === "mathematician"))
    const mathematiciansDataList = [];
    for (const data of mathematiciansData) {
        mathematiciansDataList.push(
        <li key={data.key} className="scientists-profile">
            <div>
            <img className="scientists-profile-image" src={data.imageUrl} 
                alt={data.name} />
            </div>
            <div>
                <b>{data.name}</b>: {data.profession} known for {data.accomplishment}.
            </div>
        </li>
    );
    }
    return <ul className="data-list">{mathematiciansDataList}</ul>;
}

export function ChemistsDataList () {
    const chemistsData = peopleData2.filter((data) => (data.profession === "chemist"))
    const chemistsDataList = [];
    for (const data of chemistsData) {
        chemistsDataList.push(
        <li key={data.key} className="scientists-profile">
            <div>
            <img className="scientists-profile-image" src={data.imageUrl} 
                alt={data.name} />
            </div>
            <div>
                <b>{data.name}</b>: {data.profession} known for {data.accomplishment}.
            </div>
        </li>
    );
    }
    return <ul className="data-list">{chemistsDataList}</ul>;
}

export function PhysicistsDataList () {
    const physicistsData = peopleData2.filter((data) => (data.profession === "physicist"))
    const physicistsDataList = [];
    for (const data of physicistsData) {
        physicistsDataList.push(
        <li key={data.key} className="scientists-profile">
            <div>
            <img className="scientists-profile-image" src={data.imageUrl} 
                alt={data.name} />
            </div>
            <div>
                <b>{data.name}</b>: {data.profession} known for {data.accomplishment}.
            </div>
        </li>
    );
    }
    return <ul className="data-list">{physicistsDataList}</ul>;
}

export function AstrophysicistsDataList () {
    const astrophysicistsData = peopleData2.filter((data) => (data.profession === "astrophysicist"))
    const astrophysicistsDataList = [];
    for (const data of astrophysicistsData) {
        astrophysicistsDataList.push(
        <li key={data.key} className="scientists-profile">
            <div>
            <img className="scientists-profile-image" src={data.imageUrl} 
                alt={data.name} />
            </div>
            <div>
                <b>{data.name}</b>: {data.profession} known for {data.accomplishment}.
            </div>
        </li>
    );
    }
    return <ul className="data-list">{astrophysicistsDataList}</ul>;
}

