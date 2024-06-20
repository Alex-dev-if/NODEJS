const path = require('path')

console.log(path.resolve("text.txt"))

const folder = 'diretorio'
const file = "arquivo.txt"

const finalPath = path.join('/', 'arquivos', folder, file)

console.log(finalPath)