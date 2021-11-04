/*
    Para importar libs ou arquivos, utiliza-se o comando require.
() => executa um método
*/ 

//carrego a lib do express (serviço da aplicação)
const express = require('express')

//importa as rotas
const customerRoutes = require('./customers/customers-routes')
const productRoutes = require('./products/products-routes')


//instanciando um novo servidor
const app = express()

//habilita o uso do json
app.use(express.json())

//importa as rotas para o servidor
app.use('/', [
  customerRoutes, 
  productRoutes
])


//crio uma constante para definir que porta o servidor rodará
const port = 3000

//listen: ouvir/escutar uma determinada porta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
