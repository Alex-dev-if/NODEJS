const express = require('express')

const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

// rotas 
app.get('/', (req, res)=>{
  res.json({message: 'primeira rota criada com sucesso  '})
})

app.post('/createproduct', (req, res)=>{
  const { name, price } = req.body

  res.status(201).json({message: `Foi criado um produto com nome: ${name} e preço: ${price}`})
})

app.listen(3000)
