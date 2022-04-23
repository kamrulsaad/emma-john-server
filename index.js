import express from "express";
import cors from 'cors'
import "dotenv/config";
import { MongoClient, ServerApiVersion } from 'mongodb'
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@emma-john-server.ubnp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect()
        const productsCollection = client.db('emmaJohn').collection('products')
        app.get('/products', async (req,res) => {
            const query = {}
            const cursor = productsCollection.find(query)
            const products = await cursor.toArray()
            console.log(products.length);
            res.send(products)
        } )

        app.get('/productsCount', async (req, res) => {
            const count = await productsCollection.estimatedDocumentCount()
            res.send({count})
        })
    }
    finally{}
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Hello From emma john server')
})

app.listen(port, () => {
    console.log(port);
})