const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('hola a todos');
})


app.listen(3000, function(){
    console.log('¡Servidor arriba!')
});