const mongoose= require('mongoose');
const placeSchema = mongoose.Schema({

     name: {type: String,
     required: true},

     country: {type: String,
     required: true},

     continent: {type: String,
     required: true},

     comments: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
     }],

}, {timestamps: true});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;