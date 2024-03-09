const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true,
        enum: ['sith', 'jedi']
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Bounty", bountySchema);
