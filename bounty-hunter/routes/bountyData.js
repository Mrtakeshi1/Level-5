const { v4: uuid } = require('uuid');

const bounties = [
    { name: "Darth Andeddu", living: true, bounty: "50,000", type: "Sith", _id: uuid() },
    { name: "Obi-Wan Kenobi", living: true, bounty: "2,500", type: "Jedi", _id: uuid() },
    { name: "Darth Sidious", living: true, bounty: "10,000", type: "Sith", _id: uuid() },
    { name: "Qui-Gon Jinn", living: true, bounty: "3,500", type: "Jedi", _id: uuid() }
];


module.exports = bounties