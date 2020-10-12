const mongoose= require('mongoose');
const Comment = require('../models/Comment.js');


const placeSchema = mongoose.Schema({

    

     name: String,

     country: String,

     continent: String,

     comments: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
     }]

});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;