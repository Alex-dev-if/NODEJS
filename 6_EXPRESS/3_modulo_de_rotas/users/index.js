const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get(`/add`, (req, res)=>{
  res.sendFile(`${basePath}/userform.html`)
})

router.post(`/save`, (req, res)=>{
  console.log(req.body)
  console.log(`Salvando no banco de dados... Nome: ${req.body.name}, Idade: ${req.body.age}`)
})
  
router.get('/:id', (req, res)=>{
  const id = req.params.id

  console.log(`estamos buscando pelo usuário ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router