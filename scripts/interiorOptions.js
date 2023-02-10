import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

export const interiorOptions = () => {
    let html = 

    `<select id="interior">
        <option value ="0"> Select your interior </option>`

    const listItemsArray = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.interiorOption}</option>`
    })

    html += listItemsArray.join (" ")

    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(clickEvent.target.value))
        }
    }
)