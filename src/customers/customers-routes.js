

routes.post('/customers', controller.creat); //cadastrar um cliente:
routes.get('/customers', controller.findAll); //listar todos os clientes:
routes.get('/customers/:id', controller.findOne); //listar um cliente pelo id: / customers/{id} (documentação) / customers/:id (express)
routes.put('/customers/:id', controller.update); //atualizar um cliente:
routes.delete('/customers/:id', controller.destroy); //deleta um cliente:

module.exports = routes;