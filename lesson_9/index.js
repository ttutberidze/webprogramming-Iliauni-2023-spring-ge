// const fs = require('fs');
// const http = require('http');

// fs.writeFile('./fileAsync.txt', 'Hello World!', {}, (error) => {
//     console.log(error, 'Finished');
// })

// const app = http.createServer((request, response) => {
//     console.log('inside create server', request.url);
//     response.end('<h1>Hello World</h1>');
// })

// app.listen(8888);

const express = require('express');
const app = express();
const {router: productRouter} = require('./routes/product');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/product', productRouter);

app.use('/test', (req, res) => {
    console.log(req.url);
    res.send('<h1>First Express Route</h1>');
})

app.use('/', (req, res) => {
    console.log(req.url);
    res.send('<h1>Main Route</h1>');
})

app.use((error, req, res, next) => {
    console.log(error.message);
    res.status(500).send(error.message);
})

app.listen(8888);