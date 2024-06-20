const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const basePath = path.join(__dirname, '/templates')
const tasks = require('./tasks')

app.use(express.static('public'))

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.use('/tasks', tasks)

app.get('/', (req, res)=>{
  res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
  console.log(`Rodando na porta ${port}`)
})