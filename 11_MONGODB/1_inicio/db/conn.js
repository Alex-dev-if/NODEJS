const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/testmongodb'

const client = new MongoClient(uri)

async function run(){
  try {
    await client.connect()
    console.log('conectando')
  } catch (error) {
    console.log(error)
  }
}

run()

module.exports = client