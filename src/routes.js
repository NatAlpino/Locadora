const express = require('express');
const Customer = require('./customers');
const Product = require('./products');
const routes = express.Router();
const httpStatus = require('http-status');

//cria um novo array
const customers = [];
const products = [];

const RESPONSE_NOT_FOUND_C = {
    "message": "Customer not found!"
}

const RESPONSE_NOT_FOUND_P = {
    "message": "Product not found!"
}

//cria-se uma rota com o endereço
routes.get('/helloword', function (req, res) {
    //req - request = requisição
    //res - response = resposta
    //resposta do servidor será hello word
    res.status(httpStatus.OK).send('Hello World!')
});

//cadastrar um cliente:
routes.post('/customers', (req, res) => {
    const { name, cpf, birthday } = req.body;
    //entre {} porque tem mais de um parametro, se fosse só o name por exemplo não precisaria das {}
    const id = customers.length + 1;
    const customer = new Customer(id, name, cpf, birthday);
    customers.push(customer);
    return res.status(httpStatus.CREATED).json(customer);
});

//listar todos os clientes:
routes.get('/customers', (req, res) => {
    return res.status(httpStatus.OK).json(customers);
});

//listar um cliente pelo id
//customers/{id} (documentação)
//customers/:id (express)
routes.get('/customers/:id', (req, res) => {
    //x = customer (objeto)
    const { id } = req.params
    //= atribuição
    //== compara valores
    //=== compara valores e tipo
    const response = customers.find(x => x.id == id)
    if (!response) {
        //404 (não encontrado)
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_C)
    }
    return res.status(httpStatus.OK).json(customers.find(x => x.id == id))
})

//atualizar um cliente
routes.put('/customers/:id', (req, res) => {
    //obter parametro
    const { id } = req.params
    //obter os dados que eu devo atualizar (o payload)
    const { name, cpf, birthday } = req.body
    //identificar dentro do array o meu id a ser atualizado
    //x = o meu objeto customer
    const idx = customers.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_C)
    }
    const updatedCustomer = customers[idx]
    //atualizar os valores de cada propriedade com os novos valores a ser atualizados
    if (name) {
        updatedCustomer.name = name
    }
    if (cpf) {
        updatedCustomer.cpf = cpf
    }
    if (cpf) {
        updatedCustomer.birthday = birthday
    }
    updatedCustomer.updated_at = new Date()
    customers[idx] = updatedCustomer;
    return res.status(httpStatus.OK).json (customers.find(x => x.id == id))
})

routes.delete('/customers/:id', (req, res) => {
    //extrair o id que deve ser excluido
    const id = req.params.id
    //pequisar o id dentro do array
    const idx = customers.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_C)
    }
    customers.splice(idx, 1)
    //204
    return res.status(httpStatus.NO_CONTENT).send()
})

routes.post('/products', (req, res) => {
    const { description, quantityStock, quantityAvailable }  = req.body;
    const id = products.length + 1;
    const product = new Product(id, description, quantityStock, quantityAvailable);
    products.push(product);
    return res.status(httpStatus.CREATED).json(product);
});

routes.get('/products', (req, res) => {
    return res.status(httpStatus.OK).json(products);
});

routes.get('/products/:id', (req, res) => {
    const { id } = req.params
    const response = products.find(x => x.id == id)
    if (!response) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_P)
    }
    return res.status(httpStatus.OK).json(products.find(x => x.id == id))
});

routes.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { description, quantityStock, quantityAvailable } = req.body
    const idx = products.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_P)
    }
    const updatedProduct = products[idx]
    if (description) {
        updatedProduct.description = description
    }
    if (quantityStock) {
        updatedProduct.quantityStock = quantityStock
    }
    if (quantityAvailable) {
        updatedProduct.quantityAvailable = quantityAvailable
    }
    updatedProduct.updated_at = new Date()
    products[idx] = updatedProduct;
    return res.status(httpStatus.OK).json (products.find(x => x.id == id))
});

routes.delete('/products/:id', (req, res) => {
    const id = req.params.id
    const idx = products.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND_P)
    }
    products.splice(idx, 1)
    return res.status(httpStatus.NO_CONTENT).send()
});




module.exports = routes;
