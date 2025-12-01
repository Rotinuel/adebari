import { MongoClient } from 'mongodb'
let client
export async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI)
    await client.connect()
  }
  return client.db('adebari_consult')
}
