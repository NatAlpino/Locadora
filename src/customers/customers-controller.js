const Customer = require('./customers-model')
const httpStatus = require('http-status')
const DAO = require('../base/dao')
const customers = []
const daoCustomer = new DAO(customers)

const RESPONSE_NOT_FOUND = {
    "message": "Customer not found!"
}

function create (req, res) {
    const { name, cpf, birthday } = req.body
    const id = customers.length + 1
    const customer = new Customer(id, name, cpf, birthday)
    return res.status(httpStatus.CREATED).json(daoCustomer.create(customer))
}

function findAll (req, res) {
    return res.status(httpStatus.OK).json(daoCustomer.findAll())
}

function findOne (req, res) {
    const { id } = req.params
    const response = daoCustomer.findOne(id)
    if (!response) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    return res.status(httpStatus.OK).json(response)
}

function update (req, res) {
    const { id } = req.params
    const { name, cpf, birthday } = req.body   
    const customer = daoCustomer.findOne(id)
    if (!customer) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    if (name) {
        customer.name = name
    }
    if (cpf) {
        customer.cpf = cpf
    }
    if (birthday) {
        customer.birthday = birthday
    }
    customer.updated_at = new Date()
    return res.status(httpStatus.OK).json(daoCustomer.update(customer, id))
}

function destroy (req, res) {
    const id = req.params.id
    const customer = daoCustomer.findOne(id)
    if (!customer) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    daoCustomer.destroy(id)
    return res.status(httpStatus.NO_CONTENT).send()
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy
}