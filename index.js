import express from "express";
import cors from 'cors'
import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb'
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@emma-john-server.ubnp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{}
    finally{}
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Hello From emma john server')
})

app.listen(port, () => {
    console.log(port);
})