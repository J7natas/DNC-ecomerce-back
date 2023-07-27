const express = require('express');
const app = express();

const userModel = require('./src/models/client');
const productModel = require('./src/models/product');
const stockModel = require('./src/models/stock');
const salesModel = require('./src/models/sales');
const requestModel = require('./src/models/requests');

app.use(express.json());


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
});


app.post('/stock', async (req, res) => {
    const response = await stockModel.create({
        name: req.body.name,
        amount: req.body.amount
    });

    res.status(200).json({
        data: response
    })
});


app.post('/sales', async (req, res) => {
    const response = await salesModel.create({
        name_product: req.body.name_product,
        quantity_sales: req.body.quantity_sales
    })

    res.status(200).json({
        data: response
    })
});


app.post('/request', async (req, res) => {
    const response = await requestModel.create({
        name_client: req.body.name_client,
        order_number: req.body.order_number
    })

    res.status(200).json({
        data: response
    })
});

app.listen(8080,() => {
    console.log("Servidor operacional")
});