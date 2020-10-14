const mongoose= require('mongoose');
const commentSchema = mongoose.Schema({

   place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
      index: true
   },
   
   firstName: String,

   body: String

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;