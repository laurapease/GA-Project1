const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

     firstName: {
        type: String,
        required: true},

     body: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 300},

     place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'}

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;