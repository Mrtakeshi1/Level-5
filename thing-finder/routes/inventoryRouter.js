const express = require('express')
const inventoryRouter = express.Router()
const { v4: uuid } = require('uuid');


const inventoryItems = [
    { name: "banana", type: "food", price: 200, _id: uuid()},
    { name: "pants", type: "clothing", price: 2500 , _id: uuid()},
    { name: "basket ball", type: "toy", price: 1000, _id: uuid()},
    { name: "rockem sockem robots", type: "toy", price: 1500, _id: uuid()},
    { name: "shirt", type: "clothing", price: 800, _id: uuid()},
    { name: "soup",type: "food", price: 300, _id: uuid()},
    { name: "flour", type: "food", price: 100, _id: uuid()}
]


inventoryRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})


inventoryRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = inventoryItems.find(item => item._id === itemId)
    res.send(foundItem)
})


inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filterInventory = inventoryItems.filter(item => item.type === type)
    res.send(filterInventory)
})


inventoryRouter.post("/", (req, res) => {
    const newItem = req.body
    newItem._id = uuid()
    inventoryItems.push(newItem)
    res.send(`Successfully added ${newItem.name} to the inventory`)
})



module.exports = inventoryRouter