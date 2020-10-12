const express = require('express');
const router = express.Router();

const db = require('../models');

//We're going to be on the /places path.

//INDEX Places

router.get('/', (req, res) => {
     db.Place.find({}, (err, allPlaces) => {
          console.log(allPlaces);

          if (err) return console.log(err)

          res.render('places/index', {
               places: allPlaces,
          });
     });
});

//NEW Place

router.get('/new', (req, res) => {
     res.render('places/new');
});


//CREATE places

router.post('/', (req, res) => {

     db.Place.create(req.body, (err, newPlace) => {
          if (err) return console.log(err);

          console.log(newPlace);

          res.redirect('/places');
     });
     
});

//DELETE place

router.post('/:placeId', (req, res) => {
     db.Place.findByIdAndDelete(req.params.placeId, (err, deletedPlace) => {
          if (err) return console.log(err);
          res.redirect('/places');
     });
});

//SHOW places

router.get('/:placeId', (req, res) => {

     db.Place.findById(req.params.placeId, (err, foundPlace) => {
     
          if (err) return console.log(err);
          res.render('places/show', {
               place: foundPlace
          });
     });
});



module.exports = router;