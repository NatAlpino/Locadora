const express = require('express');
const controller = require('./products-controller');
const routes = express.Router();

routes.post('/products', controller.create); 
routes.get('/products', controller.findAll); 
routes.get('/products/:id', controller.findOne);
routes.put('/products/:id', controller.update); 
routes.delete('/products/:id', controller.destroy);

module.exports = routes;