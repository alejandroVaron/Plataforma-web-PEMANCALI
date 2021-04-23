import userRoutes from './routes/userRoutes'
import express from 'express'
import bodyParser from 'body-parser';
import urlShortener from 'node-url-shortener';
const app = express();
const port =  process.env.PORT|| 3000;

//const db = require('../models/index.js') 
//const urlShortener = require('node-url-shortener');

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

app.use('/user', userRoutes);

app.listen(process.env.PORT || 3000, function(){
    console.log('¡Servidor arriba!')
});