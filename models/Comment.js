const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

   place: String,
   
   firstName: String,

   body: String

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;