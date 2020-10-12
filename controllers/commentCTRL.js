const express = require('express');
const router = express.Router();

//Database

const db = require('../models');

//Current Path = '/comments'

//GET index

router.get('/', (req, res) => {
     //Get data for all articles.
     db.Comment.find({}, (err, allComments) => {
          if (err) return console.log(err);

          const context = {allComments};

          //render template
          res.render('comments/index', context);
     })
});

//GET new

router.get('/new', (req, res) => {
     db.Place.find({}, (err, allPlaces) => {
          if (err) return console.log(err);

          const context= {
               places: allPlaces
          };
          res.render('comments/new', context);
     });
});

//GET show

router.get('/:commentId', (req, res) => {
     db.Comment.findById(req.params.commentId, 
     (err, commentById) => {
          if (err) return console.log(err);

          console.log('commentById:', commentById);
          let commentParent = commentById.place;

          res.render('comments/show', {
               comment: commentById,
               place: commentParent
          });
     });
});

//POST Create

router.post('/', (req, res) => {
     db.Comment.create(req.body, (err, newComment)=>{
          if (err) return console.log(err);
          console.log(newComment);
          db.Place.findById(req.body.place, (err, foundPlace) => {
               if (err) return console.log(err);
               console.log(foundPlace);
               foundPlace.comments.push(newComment);
               foundPlace.save((err, savedPlace) => {
                    if (err) return console.log(err);

                    res.redirect(`/comments/${newComment.id}`);
               })

          })
     });
});

//GET edit

router.get('/:commentId/edit', (req, res) => {
     db.Comment.findById(req.params.commentId, (err, foundComment) => {
          if (err) return console.log(err);

          const context = {
               comment: foundComment,
          }

          res.render('comments/edit', context);
     });
});

router.delete('/:commentId', (req, res) => {
     const commentId = req.params.commentId;

     db.Comment.findByIdAndDelete(commentId, (err) => {
          if (err) return console.log(err);

          db.Place.findOne({'comments': commentId}, (err, foundPlace) => {
               if (err) return console.log(err);

               foundPlace.comments.remove(commentId);
               foundPlace.save((err, updatedPlace) => {
                    if (err) return console.log(err);

                    res.redirect('/comments');
               })
          })


     });
});

//PUT update

router.put('/:commentId', (req, res) => {
     db.Comment.findByIdAndUpdate(
          req.params.commentId,
          req.body,
          {new:true},
          (err, updatedComment) => {
               if (err) return console.log(err);

               res.redirect(`/comments/${updatedComment._id}`);
          }
     );
});


module.exports = router;