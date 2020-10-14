const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

     name: String,
     

     email: String,

     password: {
          type: String,
          minlength: 2
     },
     
     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
     }
});

const User = mongoose.model('User', userSchema);

module.exports = User;