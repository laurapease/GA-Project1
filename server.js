/* ---------------------------------------------------ROUTER SETUP----------------------- */


const express = require('express');
const app = express();

/* ---------------------------------------------------MIDDLEWARE SETUP----------------------- */


require('dotenv').config();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
app.use(morgan('tiny'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

/* View Engine & Layouts Setup -------------------------------------------------------------------------- */

app.set('view engine', 'ejs');
const layouts = require('express-ejs-layouts');
app.use(layouts);




/* ---------------------------------------------------ROUTING----------------------- */



const placeCTRL = require('./controllers/placeCTRL');


/* Index-------------------------------------------------------------------------- */

app.get('/', (req, res) => { res.render('index')});


/*Places Route -------------------------------------------------------------------------- */

app.use('/places', placeCTRL);


/* Error Handler & Port Listener -------------------------------------------------------------------------- */

app.get('*', (req, res) => {res.send('Error, unprogrammed route.')});

app.listen(PORT, () => {
     console.log(`Express is operational at ${PORT}.`)
});