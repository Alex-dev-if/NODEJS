const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
})
//handlebars config 
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.static('public'))

app.get("/post", (req, res) => {
  const post = {
    title: "aprender nodejs",
    category: "javascript",
    body: "esse artigo vai te ensinar a usar nodejs",
    comments: 4,
  }
  res.render("blogpost", { post })
})

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Nodejs",
      category: "Javascript",
      body: "Teste",
      comments: 3,
    },
    {
      title: "Aprender php",
      category: "php",
      body: "Teste",
      comments: 3,
    },
    {
      title: "Aprender python",
      category: "python",
      body: "Teste",
      comments: 3,
    },
  ]
  res.render("blog", { posts })
})

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c"]

  res.render("dashboard", { items })
})

app.get("/", (req, res) => {
  const user = {
    name: "alex",
    surname: "silva",
  }
  const auth = false
  res.render("home", { user: user, auth })
})

app.listen(3000, () => {
  console.log("App funcionando!")
})
