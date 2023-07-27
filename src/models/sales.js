
const mongoose =  require('mongoose');
const conn = require('../../config/monngo');

conn()
const salesSchemas = mongoose.Schema({
    name_product: String,
    quantity_sales: Number

});

const salesModel = mongoose.model('sales', salesSchemas);

module.exports = salesModel;