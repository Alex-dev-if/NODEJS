const exp = require('constants')
const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

// Ler o body
app.use(express.urlencoded({
  extended: true
}))

// Serve para transformar a requisição em arquivo json
app.use(express.json( ))
// Fim da parte que serve para ler o body
app.post(`/users/save`, (req, res)=>{
  console.log(req.body)
  console.log(`Salvando no banco de dados... Nome: ${req.body.name}, Idade: ${req.body.age}`)
})

app.get(`/users/add`, (req, res)=>{
  res.sendFile(`${basePath}/userform.html`)
})
app.get('/users/:id', (req, res)=>{
  const id = req.params.id

  console.log(`estamos buscando pelo usuário ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res)=>[
  res.sendFile(`${basePath}/index.html`)
])

app.listen(port, ()=>{
  console.log(`Rodando na porta ${port}`)
})