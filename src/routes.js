const express = require('express');
const routes = express.Router();
const Customer = require('./customers')

const customers = [];

//cria-se uma rota com o endereço
routes.get('/', function (req, res) {
    //req - request = requisiçã
    //res - response = resposta
    //resposta do servidor será hello word
    res.send('Hello World!')
});

//cadastrar um cliente:
routes.post('/customers', (req, res) => {
    const { name, cpf, birthday } = req.body;
    const id = customers.length + 1;
    const customer = new Customer(id, name, cpf, birthday);
    customers.push(customer);
    return res.json(customer);
});

routes.get('/customers', (req, res) => {
    return res.json(customers);
})

module.exports = routes;