const mongoose = require('mongoose');
const userSchema = mongoose.Schema( {

     ID: {type: String,
     required: true},

     body: {type: String,
     required: true},

     citySource: {type: String},

}, {timestamps: true});

const User = mongoose.model('Comment', userSchema);

module.exports = Comment;

