const { v4: uuid } = require('uuid');

const bounties = [
    { name: "Darth Andeddu", living: "True", bounty: "50,000", type: "Sith", _id: uuid() },
    { name: "Obi-Wan Kenobi", living: "True", bounty: "2,500", type: "Jedi", _id: uuid() },
    { name: "Darth Sidious", living: "True", bounty: "10,000", type: "Sith", _id: uuid() },
    { name: "Qui-Gon Jinn", living: "True", bounty: "3,500", type: "Jedi", _id: uuid() }
];


module.exports = bounties