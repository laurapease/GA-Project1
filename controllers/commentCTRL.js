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