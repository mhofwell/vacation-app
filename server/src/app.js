const express = require('express');
const cors = require('cors');
const startMongo = require('../util/mongodb.js');

// start the express server
const app = express();

// server configuration
app.use(cors());

startMongo();

// defining routes
app.get('/api/users', (req, res, next) => {
    const users = [
        {
            id: 1,
            name: 'Michael',
        },
    ];
    console.log(users);
    return res.status(200).json(users);
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening for requests on port ${port}`);
});
