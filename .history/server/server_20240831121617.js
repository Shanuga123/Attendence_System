const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [{ username: 'user', password: 'password' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, '73529e5e7d9eae9ba56a7ac8cf688187265fa2df14d685660d1e4cb346fbfe923719665051d9ecfc5e184a2be2acd3c4f1c61f661c333f9ae578d2ea726efeac');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));
