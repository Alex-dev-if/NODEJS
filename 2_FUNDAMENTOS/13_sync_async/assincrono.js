const fs = require('fs')

fs.writeFile('arquivo.pdf', 'oi', function(err){
  setTimeout(function(){
    console.log("siiii")
  }, 5000)
})

console.log("fim")