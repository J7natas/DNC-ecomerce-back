
const mongoose = require('mongoose');
const conn = require('../../config/monngo');

conn()
const userSchema = mongoose.Schema({
    name: String
})

const userModel = mongoose.model('clients', userSchema);

module.exports = userModel;