import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import orderRoutes from './routes/orderRoutes'
import productRoutes from './routes/productRoutes';
import express from 'express';
import bodyParser from 'body-parser';
import urlShortener from 'node-url-shortener';
const app = express();
var port =   process.env.PORT || 3000;
const sequelize = require('./server/database/db');
if(!process.env.DATABASE_URL){
    port = 3000;
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/url', function(req, res) {
    const url = req.body.url;

    urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});

app.get('/', (req, res) => {
    res.end('¡Welcome!');
    
})

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

sequelize.sync({ force: false }).then( () => {
    console.log("¡We connect to the database!");
    app.listen(port, function(){
        console.log('¡Server up in port '+port+'!');
    });
}).catch(error => {
    console.log(error)
});
    


