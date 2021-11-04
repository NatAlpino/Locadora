const Product = require('./products-model');
const httpStatus = require('http-status');
const DAO = require('../base/dao')
const products = [];
const daoProducts = new DAO(products) 

const RESPONSE_NOT_FOUND = {
    "message": "Product not found!"
}

function create (req, res) {
    const { description, quantityStock, quantityAvailable, value } = req.body;
    const id = products.length + 1;
    const product = new Product({id, description, quantityStock, quantityAvailable, value});
    return res.status(httpStatus.CREATED).json(daoProducts.create(product));
}

function findAll (req, res) {
    return res.json(daoProducts.findAll());
}

function findOne (req, res) {
    const { id } = req.params
    const response = daoProducts.findOne(id)
    if (!response) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    daoProducts.findOne()
    return res.status(httpStatus.OK).json(response)
}

function update (req, res) {
    const { id } = req.params
    const { description, quantityStock, quantityAvailable, value } = req.body

    const product = daoProducts.findOne(id) 
    if (!product) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    if (description) {
        product.description = description
    }
    if (quantityStock) {
        product.quantityStock = quantityStock
    }
    if (quantityAvailable) {
        product.quantityAvailable = quantityAvailable
    }
    if (value) {
        product.value = value
    }
    product.updated_at = new Date()
    return res.status(httpStatus.OK).json(daoProducts.update(product, id))
}

function destroy (req, res) {
    const id = req.params.id
    const product = daoProducts.findOne(id)
    if (!product) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    daoProducts.destroy(id)
    return res.status(httpStatus.NO_CONTENT).send()
}



module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy
}