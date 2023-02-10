import { getColor, getInterior, getOrders, getTech, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const wheels = getWheels()
    const colors = getColor()
    const techs = getTech()
    const interiors = getInterior()

    const foundWheel = wheels.find(wheel => wheel.id === order.wheelId).price
    const foundColor = colors.find(color => color.id === order.colorId).price
    const foundTechs = techs.find(tech => tech.id === order.techId).price
    const foundInterior = interiors.find(interior => interior.id === order.interiorId).price

    let totalCost = foundWheel + foundColor + foundInterior + foundTechs

    return `<li> Order #${order.id} cost ${totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        })}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

