
const packedItems = [
    {name: "Space suit", isPacked: true},
    {name: "Helmet with a golden leaf", isPacked: true},
    {name: "Photo of Tam", isPacked: false},
]

// Conditionally returning JSX 

export function PackingList() {
    const packingListContent = []
    for (const item of packedItems) {
        if (item.isPacked === true) {
            packingListContent.push(<li key={item.name}>{item.name} ✔</li>)
        } else {
            packingListContent.push(<li key={item.name}>{item.name}</li>)
        }
    }
    return <ul id="packing-list">{packingListContent}</ul>
}

//  Conditionally returning nothing with null

export function PackingList2() {
    const packingListContent = []
    for (const item of packedItems) {
        if (item.isPacked === true) {
            packingListContent.push(null)
        } else {
            packingListContent.push(<li key={item.name}>{item.name}</li>)
        }
    }
    return <ul id="packing-list">{packingListContent}</ul>
}

//  Conditional (ternary) operator (`? :`) 

export function PackingList3() {
    const packingListContent = []
    for (const item of packedItems) {
        item.isPacked ? 
        packingListContent.push(<li key={item.name}><del>{item.name} ✔</del></li>) : 
        packingListContent.push(<li key={item.name}>{item.name}</li>)
    }
    return <ul id="packing-list">{packingListContent}</ul>
}

