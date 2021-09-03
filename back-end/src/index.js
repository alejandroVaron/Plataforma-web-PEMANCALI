import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import express from 'express';
import bodyParser from 'body-parser';
import urlShortener from 'node-url-shortener';
import cors from 'cors'
const app = express();
const port =   process.env.PORT || 3000;
const sequelize = require('./server/database/db')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

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
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

sequelize.sync({ force: false }).then( () => {
    console.log("Nos conectamos a la base de datos")
    app.listen(port, function(){
        console.log('¡Servidor arriba!');
    });
}).catch(error => {
    console.log(error)
});
    


