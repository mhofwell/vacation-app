import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_ADMIN_UN}:${process.env.MONGO_ADMIN_PW}@c1.sdqza7d.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function startMongo() {
    MongoClient.connect(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    })
        .then(async (client) => {
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
        })
        .catch((err) => console.log(err));
}

export default startMongo;
