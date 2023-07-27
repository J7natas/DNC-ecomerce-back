
const mongoose = require('mongoose');
const conn = require('../../config/monngo');

conn()
const requestSchema = mongoose.Schema({
    name_client: String,
    order_number: Number
});

const requestModel = mongoose.model('requests', requestSchema);

module.exports = requestModel;