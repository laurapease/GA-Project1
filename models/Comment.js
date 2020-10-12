const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

     id: {type: String,
     required: true},

     body: {type: String,
     required: true,
    minLength: 10,
     maxLength: 300},

     timestamp: {
         type: Date,
     required: true},

     city: [{type: String,
     }],

});

const Comment = mongoose.model('Comment', citySchema);

module.exports = Comment;