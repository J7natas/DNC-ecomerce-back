
const mongoose = require('mongoose');
const conn = require('../../config/monngo');

conn();
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    type_product: String,
    description: String
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;