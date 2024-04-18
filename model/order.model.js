const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    invoiceId: {
        type: String
    },
    status: {
        type: String,
        default: "pending"
    },
    products: {
        type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', productSchema);

module.exports = Order;