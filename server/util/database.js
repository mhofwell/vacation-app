import MongoClient from 'mongodb';
require('dotenv').config();

const uri =
    `mongodb+srv://${process.env.MONGO_ADMIN_UN}:${process.env.MONGO_ADMIN_PW}@c1.sdqza7d.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
