import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const wheelOptions = () => {
    let html = 

    `<select id="wheels">
        <option value ="0"> Select your wheels </option>`

    const listItemsArray = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheelOption}</option>`
    })

    html += listItemsArray.join (" ")

    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(clickEvent.target.value))
        }
    }
)