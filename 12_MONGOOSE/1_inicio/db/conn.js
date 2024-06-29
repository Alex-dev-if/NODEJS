const mongoose = require('mongoose')

async function main(){
  await mongoose.connect('mongodb://localhost:27017/mongoosedb')
  console.log('conectou ao db com mongoose!')
}

main().catch((err)=>console.log(err))

module.exports = mongoose