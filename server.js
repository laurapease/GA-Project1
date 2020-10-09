/* ---------------------------------------------------ROUTER SETUP----------------------- */


const express = require('express');
const app = express();

/* ---------------------------------------------------MIDDLEWARE SETUP----------------------- */


require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.set('view engine', 'ejs');

const morgan = require('morgan');
app.use(morgan('tiny'));


/* ---------------------------------------------------ROUTING----------------------- */



//const controlOTBP = require('./controllers/');

app.use('/', (req, res) => { res.send('You have reached the / page.')});

app.get('*', (req, res) => {res.send('Error, unprogrammed route.')});

app.listen(PORT, () => {
     console.log(`Express is operational at ${PORT}.`)
});