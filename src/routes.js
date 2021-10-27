
const Product = require('./products');

//cria um novo array

const products = [];



const PRODUCT_NOT_FOUND = {
    "message": "Product not found!"
}



routes.post('/products', (req, res) => {
    const { description, quantityStock, quantityAvailable, value }  = req.body;
    const id = products.length + 1;
    const product = new Product({id, description, quantityStock, quantityAvailable, value});
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
        return res.status(httpStatus.NOT_FOUND).json(PRODUCT_NOT_FOUND)
    }
    return res.status(httpStatus.OK).json(products.find(x => x.id == id))
});

routes.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { description, quantityStock, quantityAvailable, value } = req.body
    const idx = products.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(PRODUCT_NOT_FOUND)
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
    if (value) {
        updatedProduct.value = value
    }
    updatedProduct.updated_at = new Date()
    products[idx] = updatedProduct;
    return res.status(httpStatus.OK).json(products.find(x => x.id == id))
});

routes.delete('/products/:id', (req, res) => {
    const id = req.params.id
    const idx = products.findIndex(x => x.id == id)
    if (idx < 0) {
        return res.status(httpStatus.NOT_FOUND).json(PRODUCT_NOT_FOUND)
    }
    products.splice(idx, 1)
    return res.status(httpStatus.NO_CONTENT).send()
});

module.exports = routes;

/*DAO= Data Acces Object
   Camada de percestência que recebe e grava objetos 

Model= Classes
Em um modelo de banco de dados relacional as classes serão abstrações de tabelas,
ou seja, cada classe vai representar uma tabela dentro do banco de dados (relacional).
Os itens das classes se tornam as colunas na nossa tabela e seus valores se tornam as linhas.

ORM= Object Relational Model (modelo de objeto relacional) 
Ele transforma a modelagem de dados em objetos transacionais, ou seja, banco de dados.
*/
