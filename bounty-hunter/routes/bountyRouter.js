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
    res.send(bounties);
});

// GET a specific bounty by ID
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty);
}); 

// POST a new bounty
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send(`New Bounty added ${newBounty.name} to the database!`);
});

module.exports = bountyRouter;
