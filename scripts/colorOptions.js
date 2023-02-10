import { getColor, setColor } from "./database.js"

const colors = getColor()

export const colorOptions = () => {
    let html = 
    `<select id="color">
        <option value ="0"> Select your color </option>`

    const listItemsArray = colors.map(color => {
        return `<option value="${color.id}">${color.colorOption}</option>`
    })

    html += listItemsArray.join (" ")

    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            setColor(parseInt(clickEvent.target.value))
        }
    }
)