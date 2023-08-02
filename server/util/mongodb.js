const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

// initializing dotenv vars
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// uri string from .ENV
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const startMongo = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};

module.exports = startMongo;
