const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')


router.get('/new', (req, res)=>{
  res.sendFile(`${basePath}/new.html`)
})

router.post('/create', (req, res)=>{
  const nome = req.body.nome
  const descricao = req.body.descricao
  console.log(`Tarefa criada com o nome: ${nome} e descrição: ${descricao}`)
})

router.get('/:id', (req, res)=>{
  const id = req.params.id

  console.log(`Procurando pela tarefa com o ID ${id}`)

})

module.exports = router

