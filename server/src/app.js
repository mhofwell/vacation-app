import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/users', (req, res, next) => {
    const users = [{
        id: 1,
        name: 'Michael',
    }];
    console.log(users);
    return res.status(200).json(users);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening for requests on port ${port}`);
});
