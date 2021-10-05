/*
    Para importar libs ou arquivos, utiliza-se o comando require.
() => executa um método
*/ 

//carrego a lib do express (serviço da aplicação)
const express = require('express')

const routes = require('./routes')

const customer = require('./customers')

//instanciando um novo servidor
const app = express()
app.use(express.json())
app.use('/', routes)

//crio uma constante para definir que porta o servidor rodará
const port = 3000

//listen: ouvir/escutar uma determinada porta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})