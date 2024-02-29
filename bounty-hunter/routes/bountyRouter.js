const express = require('express');
const bountyRouter = express.Router();
const { v4: uuid } = require('uuid');

const bounties = [
    { name: "Darth Andeddu", living: true, bounty: 50000, type: "Sith", _id: uuid() },
    { name: "Obi-Wan Kenobi", living: true, bounty: 2000, type: "Jedi", _id: uuid() },
    { name: "Darth Sidious", living: true, bounty: 10000, type: "Sith", _id: uuid() },
    { name: "Qui-Gon Jinn", living: true, bounty: 3000, type: "Jedi", _id: uuid() }
];


// GET all bounties
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
});


// GET a specific bounty by ID //
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
});


// POST a new bounty
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`New Bounty added ${newBounty.name} to the database!`);
});


// DELETE a bounty by ID
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty deleted successfully")
})


// PUT (update) an existing bounty by ID
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = bountyIndex !== -1 ? Object.assign(bounties[bountyIndex], req.body) : null
    res.send(updatedBounty)
});



module.exports = bountyRouter;