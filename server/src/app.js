const express = require('express');
const cors = require('cors');

// start the express server
const app = express();

// server configuration
app.use(cors());

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
