const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

     id: {
        type: String,
        required: true},

     body: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 300},

     timestamp: {
        type: Date,
        required: true},

     place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'}

}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;