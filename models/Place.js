const mongoose= require('mongoose');
const Comment = require('../models/Comment.js');


const placeSchema = mongoose.Schema({

    

     name: String,

     country: String,

     continent: String,

     image: String,

     comments: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
          index: true
     }]

});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;