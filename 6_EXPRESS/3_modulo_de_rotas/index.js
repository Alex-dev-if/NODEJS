const express = require('express')
const app = express()

const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')


const users = require('./users')
// Arquivos estáticos
app.use(express.static('public'))
// Ler o body
app.use(express.urlencoded({
  extended: true
}))
// Serve para transformar a requisição em arquivo json
app.use(express.json( ))
// Fim da parte que serve para ler o body

// Obs: a linha abaixo tem que ser aqui!! em cima do .get do "/"
app.use('/users', users)

app.get('/', (req, res)=>[
  res.sendFile(`${basePath}/index.html`)
])

app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
  console.log(`Rodando na porta ${port}`)
})