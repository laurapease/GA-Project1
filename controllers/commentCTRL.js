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
     db.Comment.findById(req.params.commentId)
     .populate('place')
     .exec((err, commentById) => {
          if (err) return console.log(err);

          console.log('commentById:', commentById);

          res.render('comments/show', commentById);
     });
});

//POST Create

router.post('/', (req, res) => {
     db.Comment.create(req.body, (err, newComment)=>{
          if (err) return console.log(err);

          db.Place.findById(req.body.place, (err, foundPlace) => {
               if (err) return console.log(err);

               foundPlace.comments.push(newComment._id);
               foundPlace.save((err, savedPlace) => {
                    if (err) return console.log(err);

                    res.redirect(`/comments/${newComment.id}`);
               })

          })
     });
});

module.exports = router;