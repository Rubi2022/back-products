const mongoose = require('mongoose');

const { Schema, model } = mongoose 

const productSchema = new Schema ({
    name: {
        type: String, 
        required: true 
    },
    description: String,
    price: Number 
}, {
    versionKey: false,
    timestamps: true
})

const ProductModel = model ('products', productSchema)


module.exports = ProductModel