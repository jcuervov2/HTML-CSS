const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})


app.use(express.static('./public'));

app.listen('3000', () => console.log('Server listening in http:/localhost:3000'));