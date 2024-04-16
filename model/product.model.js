const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        stars: {
            type: Number
        },
        count: {
            type: Number
        }
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;