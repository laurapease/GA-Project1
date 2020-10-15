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

const session = require('express-session');

const multer = require('multer');

const multerConfig = {

     storage: multer.diskStorage({

          destination: function(req, file, next) {
               next(null, './public/images');
          },

          filename: function(req, file, next){
               console.log(file);
               const ext=file.mimetype.split('/')[1];
               next(null, file.fieldname + '-' + Date.now() + '.' + ext);
          }
     }),

     fileFilter: function (req, file, next) {
          if (!file) {
               next();
          }
          const image=file.mimetype.startsWith('image/');
          if (image) {
               console.log('photo uploaded');
               next(null, true);
          } else {
               console.log('file not supported');
               return next();
          }
     }
}



/* Public Static Directory-------------------------------------------------------------------------- */

app.use(express.static('public'));

/* Express Session-------------------------------------------------------------------------- */

app.use(session({
     secret: process.env.SESSION_SECRET,
     resave: false, //Only save the session if we actually changed properties during the session
     saveUninitialized: false,
     cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //Expiration of 2 weeks by multing up milliseconds
     }
}));


/* View Engine & Layouts Setup -------------------------------------------------------------------------- */

app.set('view engine', 'ejs');
const layouts = require('express-ejs-layouts');
app.use(layouts);


/* ---------------------------------------------------ROUTING----------------------- */



const ctrl = require('./controllers');
const { Server } = require('mongodb');

/* Index-------------------------------------------------------------------------- */

app.get('/', (req, res) => { res.render('index')});


/*Initial Request Divios-------------------------------------------------------------------------- */

app.use('/places', ctrl.places);
app.use('/comments', ctrl.comments);
app.use('/auth', ctrl.auths);

/* Error Handler & Port Listener -------------------------------------------------------------------------- */

// app.get('*', (req, res) => {res.send('Error, unprogrammed route.')});

app.listen(PORT, () => {
     console.log(`Express is operational at ${PORT}.`)
});