//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World !!!')
})

app.get('/contact', (req, res) => {
    res.send('contact me at hareesh@gmail.com');
})

app.get('/about', (req, res) => {
    res.send('This is my about page hahaha!!!')
})

app.get('/hobbies', (req, res) => {
    res.send('My hobbies are reading books and I love code..')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})