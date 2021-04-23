const express = require('express');
const app = express();
const port =  process.env.PORT|| 3000;
const db = require('../models/index.js')
const bodyParser = require('body-parser');
const urlShortener = require('node-url-shortener');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));

app.post('/url', function(req, res) {
    const url = req.body.url;

    urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});

app.get('/', (req, res) => {
    res.end('hola a todos');
})


app.listen(process.env.PORT || 3000, function(){
    console.log('¡Servidor arriba!')
});