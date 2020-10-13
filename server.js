/* ---------------------------------------------------ROUTER SETUP----------------------- */


const express = require('express');
const app = express();

/* ---------------------------------------------------MIDDLEWARE SETUP----------------------- */


require('dotenv').config();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const methodOverride = require('method-override');
app.use(morgan(':method :url'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

/* Public Static Directory-------------------------------------------------------------------------- */

app.use(express.static('public'));

/* View Engine & Layouts Setup -------------------------------------------------------------------------- */

app.set('view engine', 'ejs');
const layouts = require('express-ejs-layouts');
app.use(layouts);


/* ---------------------------------------------------ROUTING----------------------- */



const ctrl = require('./controllers');
const { Server } = require('mongodb');

/* Index-------------------------------------------------------------------------- */

app.get('/', (req, res) => { res.render('index')});


/*Places Route -------------------------------------------------------------------------- */

app.use('/places', ctrl.places);
app.use('/comments', ctrl.comments)


/* Error Handler & Port Listener -------------------------------------------------------------------------- */

// app.get('*', (req, res) => {res.send('Error, unprogrammed route.')});

app.listen(PORT, () => {
     console.log(`Express is operational at ${PORT}.`)
});