const mongoose = require('mongoose');

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
<<<<<<< HEAD
     City: require('./City'),
     User: require('./Comment')
=======
     Place: require('./Place'),
     // User: require('./User')
>>>>>>> f2a4e1616c8058bc4abdce08d43012ff4953be94
};

