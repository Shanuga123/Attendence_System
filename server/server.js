const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const users = [{ username: 'user', password: 'password' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, '92d7ddc01cec38cbf69545c27295133f49a4167e6f5d69131e2bcf408a3197de123891aae6d3cb3301dbe239a7e2b1335ff3478e36e6a9b4fe27ae03954d59f4');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));