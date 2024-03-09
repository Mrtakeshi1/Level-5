const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        get: v => `$${v.toFixed(2)}`
    }
});

module.exports = mongoose.model("Inventory", inventorySchema);
