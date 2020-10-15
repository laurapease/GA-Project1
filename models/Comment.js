const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

   place: String,
   
   firstName: String,

   body: String,

   creator: String,

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;