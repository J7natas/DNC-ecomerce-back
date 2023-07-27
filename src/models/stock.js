
const mongoose = require('mongoose');
const conn = require('../../config/monngo');

conn();
const stockSchema = mongoose.Schema({
    name: String,
    id: Number,
    amount: Number
});

const stockModel = mongoose.model('stocks', stockSchema);

module.exports = stockModel;