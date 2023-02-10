const database = {
    orderBuilder: {},
    colors: [
        {
            id: 1,
            colorOption: "Silver",
            price: 150
        }, {
            id: 2,
            colorOption: "Midnight Blue",
            price: 175
        }, {
            id: 3,
            colorOption: "Firebrick Red",
            price: 175
        }, {
            id: 4,
            colorOption: "Spring Green",
            price: 200
        }

    ],
    interiors: [
        {
            id: 1,
            interiorOption: "Beige Fabric",
            price: 225
        }, {
            id: 2,
            interiorOption: "Charcoal Fabric",
            price: 230
        }, {
            id: 3,
            interiorOption: "White Leather",
            price: 300
        }, {
            id: 4,
            interiorOption: "Black Leather",
            price: 350
        }

    ],
    techs: [
        {
            id: 1,
            packageOption: "Basic",
            price: 300
        }, {
            id: 2,
            packageOption: "Navigation",
            price: 400
        }, {
            id: 3,
            packageOption: "Visibility",
            price: 450
        }, {
            id: 4,
            packageOption: "Ultra",
            price: 800
        }

    ],
    wheels: [
        {
            id: 1,
            wheelOption: "17-inch Pair Radial",
            price: 150
        }, {
            id: 2,
            wheelOption: "17-inch Pair Radial Black",
            price: 175
        }, {
            id: 3,
            wheelOption: "18-inch Pair Spoke Silver",
            price: 175
        }, {
            id: 4,
            wheelOption: "18-inch Pair Spoke Black",
            price: 200
        }

    ],
    customOrders: [
        {   
            id: 1,
            colorId: 2,
            interiorId: 3,
            techId: 3,
            wheelId: 4

        }
    ]
}

export const getColor = () => {
    return database.colors.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTech = () => {
    return database.techs.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setColor = (id) => {
    return database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setWheels = (id) => {
    return database.orderBuilder.interiorId = id
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))


}