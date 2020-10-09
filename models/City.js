const mongoose= require('mongoose');
const citySchema = mongoose.Schema({

     name: {type: String,
     required: true},

     country: {type: String,
     required: true},

     continent: {type: String,
     required: true},

     comments: [{type: String,
     minLength: 10,
     maxLength: 300}],

});

const City = mongoose.model('City', citySchema);

module.exports = City;