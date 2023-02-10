import { getTech, setTech } from "./database.js";

const techs = getTech()

export const techOptions = () => {
    let html = 

    `<select id="tech">
        <option value ="0"> Select your tech upgrades </option>`

    const listItemsArray = techs.map(tech => {
        return `<option value="${tech.id}">${tech.packageOption}</option>`
    })

    html += listItemsArray.join (" ")

    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(clickEvent.target.value))
        }
    }
)