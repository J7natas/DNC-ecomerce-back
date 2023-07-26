const express = require('express');
const app = express();

const userModel = require('./src/models/client');
const productModel = require('./src/models/product');

app.use(express.json());

app.get('/client', async (req, res) => {
    userModel
    res.status(200).json({
        data: await "teste"
    })
});

app.post('/client', async (req, res) => {
    const response = await userModel.create({
        name: req.body.name
    })
    res.status(200).json({
        data :response
    })
});

app.post('/product', async (req, res) => {
    const response = await productModel.create({
        name: req.body.name,
        price: req.body.price,
        type_product: req.body.type_product,
        description: req.body.description
    })
    res.status(200).json({
        data: response
    })
})

app.listen(8080,() => {
    console.log("Servidor operacional")
});