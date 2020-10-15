const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
const session = require('express-session');
const express = require('express');
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex: true,
     useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
     console.log('MongoDB connected.');
});

mongoose.connection.on('error', (err) => {
     console.log(err);
});

const MongoStore = require('connect-mongo')(session)

app.use(session({
     secret: process.env.SESSION_SECRET,
     resave: false,
     saveUninitialized: false,
     store: new MongoStore({url: process.env.MONGODB_URI})
}));


module.exports = {
     Place: require('./Place.js'),
     Comment: require('./Comment.js'),
     User: require('./User.js')
};

