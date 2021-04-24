import userRoutes from './routes/userRoutes'
import express from 'express'
import bodyParser from 'body-parser';
import urlShortener from 'node-url-shortener';
const app = express();
const port =   3000;
const sequelize = require('./server/database/db')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/url', function(req, res) {
    const url = req.body.url;

    urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});

app.get('/', (req, res) => {
    res.end('Welcome');
    
})

app.use('/user', userRoutes);

sequelize.sync({ force: false }).then( () => {
    console.log("Nos conectamos a la base de datos")
    app.listen(3000, function(){
        console.log('¡Servidor arriba!')
    });
}).catch(error => {
    console.log(error)
})
    


