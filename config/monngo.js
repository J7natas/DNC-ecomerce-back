const mongoose = require('mongoose');

let conn

const connecion = () => {
    if(conn){
        conn
    }

    conn = mongoose.connect('mongodb://127.0.0.1:27017/local')
}

module.exports = connecion;