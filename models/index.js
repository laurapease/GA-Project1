const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();


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


module.exports = {
     Place: require('./Place.js'),
     Comment: require('./Comment.js'),
     User: require('./User.js')
};

