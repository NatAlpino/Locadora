const express = require('express');
const routes = express.Router();

//cria-se uma rota com o endereço
routes.get('/helloword', function (req, res) {
    //req - request = requisição
    //res - response = resposta
    //resposta do servidor será hello word
    res.send('Hello World!')
});

//cadastrar um cliente:
routes.post('/customers', (req, res) => {
    const { name, cpf, birthday } = req.body;
    const id = customer.length + 1;
    const customer = new Customer(id, name, cpf, birthday);
    customer.push(customer);
    return res.json(customer);
});

module.exports = routes;