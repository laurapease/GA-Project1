const express = require('express');
const router = express.Router();

//Database

const db = require('../models');
const Place = require('../models/Place.js');
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
               foundPlace.comments.push(req.body._id);
               foundPlace.save((err, savedPlace) => {
                    if (err) return console.log(err);

                    res.redirect(`/places/${foundPlace._id}`);
          });
     });
     })
});

//POST Delete

router.post('/:commentId', (req, res) => {
     

     db.Comment.findByIdAndDelete(req.params.commentId,
          (err, deletedComment) => {
          if (err) return console.log(err);
          console.log(deletedComment);
          res.redirect('/comments');
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