const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bounty');


// GET all bounties //
bountyRouter.get("/", async (req, res, next) => {
    try {
        const foundBounties = await Bounty.find({})
        res.status(200).json(foundBounties)
    } catch (err) {
        res.status(500).json({ errMsg: err.message })
        return next(err)
    }
});


// GET a specific bounty by ID //
bountyRouter.get("/:bountyId", async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId;
        const foundBounty = await Bounty.findById(bountyId);
        if (!foundBounty) {
            res.status(404).json({ errMsg: "Bounty not found." });
        } else {
            res.status(200).send(foundBounty);
        }
    } catch (err) {
        if (err.name === 'CastError') {
            // Handle invalid bounty ID
            res.status(404).json({ errMsg: "Bounty not found." });
        } else {
            // Handle other errors
            res.status(500).json({ errMsg: err.message });
        
        }
    }
});


// Get by type //
bountyRouter.get("/search/type", async (req, res, next) => {
    try {
        const type = req.query.type; // Access query parameter
        const bounties = await Bounty.find({ type })
        if (!type) {
        return res.status(400).send({ errMsg: "You must provide a type" })
        }
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500).json
        return next(err)
    }
});



// POST a new bounty //
bountyRouter.post("/", async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        await newBounty.save()
        res.status(201).send({ errMsg: `New Bounty added: ${newBounty.name} to the database!` })
    } catch (error) {
        return next(error)
    }
});


// DELETE a bounty by ID //
bountyRouter.delete("/:bountyId", async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId;
        const deletedBounty = await Bounty.findByIdAndDelete(bountyId);
        if (deletedBounty) {
            res.status(200).send(`Successfully deleted bounty: ${deletedBounty.name} from database!`);
         } else {
            res.status(404).send("Bounty not found")
          }  
        
    } catch (err) {
        if (err.name === 'CastError') {
            // Handle invalid bounty ID
            res.status(404).send("Bounty not found.");
        } else {
            // Handle other errors
            res.status(500).json({ errMsg: err.message });
        }
    }
});


// PUT (update) an existing bounty by ID //
bountyRouter.put("/:bountyId", async (req, res, next) => {
    try {
        const updatedBounty = await Bounty.findByIdAndUpdate(req.params.bountyId, req.body, { new: true });
        if (!updatedBounty) {
            res.status(404).send();
        } else {
            res.status(200).send(updatedBounty);
        }
    } catch (err) {
        res.status(500).json({ errMsg: err.message });
    }
});


module.exports = bountyRouter;
