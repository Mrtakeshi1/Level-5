const express = require('express')
const todoListRouter = express.Router()
const { v4: uuid } = require('uuid')

const chores = [
    {name: "Dishes", description: "Wash The Dishes", completed: false, _id: uuid()},
    {name: "Laundry", description: "Wash The Clothes", completed: false, _id: uuid()},
    {name: "Trash", description: "Take Trash Out", completed: false, _id: uuid()},
    {name: "Wash Car", description: "Wash The Car", completed: false, _id: uuid()},
    {name: "Walk The Dog", description: "Take The Dog For A Walk", completed: false, _id: uuid()},
    {name: "Yard Work", description: "Mow The Lown", completed: false, _id: uuid()}
]


todoListRouter.get("/", (req, res) => {
    res.send(chores)
})
.get("/:choreId", (req, res) => {
    const choreId = req.params.choreId
    const foundChore = chores.find(chore => chore._id === choreId);
    res.send(foundChore)
})
.post("/", (req, res) => {
    const newChore = req.body
    newChore._id = uuid()
    chores.push(newChore)
    res.send(`Successfully added ${newChore.name} to chore list!`)
})
.put("/:choreId", (req, res) => {
    const choreId = req.params.choreId
    const choreIndex = chores.findIndex(chore => chore._id === choreId)
    const updatedChore = Object.assign(chores[choreIndex], req.body)
    res.send(updatedChore)  
})
.delete("/:choreId", (req, res) => {
    const choreId = req.params.choreId;
    const choreIndex = chores.findIndex(chore => chore._id === choreId);
    const choreName = chores[choreIndex].name;
    chores.splice(choreIndex, 1);
    res.send(`Successfully deleted ${choreName}!`);
});



module.exports = todoListRouter