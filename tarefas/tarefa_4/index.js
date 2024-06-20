const express = require("express")
const app = express()

// handlebars config
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
// end

app.use(express.static('public'))

const products = [
  {
    id: 0,
    title: "pneu aro 14",
    category: "car",
    body: "pneu da pirelli aro 14 novo",
    rating: 4.5
  },
  {
    id: 1,
    title: "pneu aro",
    category: "car",
    body: "pneu da pirelli aro 13 novo",
    rating: 4.2
  },
  {
    id: 2,
    title: "Farol D20",
    category: "car",
    body: "Farol da D20 novo",
    rating: 4.1
  },
  {
    id:3, 
    title: "aromatizante para carro aromatize",
    category: "car",
    body: "Aromatizanto de menta. Carro cheiroso durante a viajem.",
    rating: 4.8
  },
]

app.get('/', (req, res)=>{
  res.render('home', {products})
})

app.get('/products/:id', (req, res)=>{
  const product = products[req.params.id]
  res.render('product', {product})
})

app.listen(3000, ()=>{
  console.log("funcionando")
})