const http = require('http')

const port = 3000

const server = http.createServer((req, res)=>{
  res.statusCode = 200
  res.setHeader('contenty-type', 'text/html')
  res.end("<h1>Retornando html<h1>")
})

server.listen(port, () => {
  console.log("O servidor está rodando na porta "+port)
})