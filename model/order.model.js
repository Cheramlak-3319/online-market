const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prosuctId: {
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;