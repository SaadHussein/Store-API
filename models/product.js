const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        typr: String,
        required: [true, 'Product Name is Required.']
    },
    price: {
        typr: Number,
        required: [true, 'Product Price is Required.']
    },
    featured: {
        typr: Boolean,
        default: false
    },
    rating: {
        typr: Number,
        default: 4.5
    },
    createdAt: {
        typr: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is Not Supported.'
        }
    }
});

module.exports = mongoose.model('Product', ProductSchema);