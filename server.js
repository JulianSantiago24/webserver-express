const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //Esto serà de dominio publico

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //dirname , no importa cual sea el path, concatena la ruta despues del +
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    // res.send('Hola Mundo')
    // let salida = {
    //     nombre: 'Julian',
    //     edad: 26,
    //     url: req.url
    // };

    res.render('home', {
        nombre: 'julIan JaRamillo',
        //anio: new Date().getFullYear()

    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        //anio: new Date().getFullYear()

    });
});
// app.get('/data', (req, res) => {

//   res.send('Hola data');

//});

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);

});