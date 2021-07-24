import  { MongoClient, Db } from 'mongodb'

// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default async function connect() {
    if (!client.isConnected()) await client.connect()
    const db = client.db('ufca')
    return {db, client}
}