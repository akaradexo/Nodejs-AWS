const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name field is required']
    },
    quantity: {
        type: Number,
        required: [true,'Quantity field is required']
    }
})

module.exports = mongoose.model('Inventory',inventorySchema);