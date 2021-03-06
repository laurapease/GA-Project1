const express = require('express');
const router = express.Router();

const db = require('../models');
const Place = require('../models/Place.js')
const Comment = require('../models/Comment.js')
const places = require('../placesdb');

const multer = require('multer');
const multerConfig = {

     storage: multer.diskStorage({

          destination: function(req, file, next) {
               next(null, './public/images');
          },

          filename: function(req, file, next){
               console.log(file);
               const ext=file.mimetype.split('/')[1];
               next(null, file.fieldname + '-' + Date.now() + '.' + ext);
          }
     }),

     fileFilter: function (req, file, next) {
          if (!file) {
               next();
          }
          const image=file.mimetype.startsWith('image/');
          if (image) {
               console.log('photo uploaded');
               next(null, true);
          } else {
               console.log('file not supported');
               return next();
          }
     }
}


//We're going to be on the /places path.

//INDEX Places

// router.get('/', (req, res) => {
//      db.Place.find({})
//      .populate('placeSeeds') 
//      .exec ((err, allPlaces) => {
//           if (err) return console.log(err);
//           const context = {
//                places: allPlaces,
//                placeSeeds: placeSeeds
//           }
//           console.log(placeSeeds, "Did I seed this?");
//           console.log(allPlaces, "did this add data?");
//           res.render('places/index', context);
//      })
// })

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

     res.render('places/new')
});


//CREATE places

router.post('/', multer(multerConfig).single('photo'), (req, res) => {
     
     console.log(req.session.currentUser);
     req.body.user = req.session.currentUser;

     let imageSource = `/images/${req.file.filename}`;
     
     req.body.image = imageSource; 

     db.Place.create(req.body, (err, newPlace) => {
          if (err) return console.log(err);

          console.log(newPlace);

          res.redirect('/places');
     });

});


//SHOW Places

router.get('/:placeId', (req, res) => {

     Place.findById(req.params.placeId)
     .populate('comments')
     .exec((err, foundPlace) => {
     
          if (err) return console.log(err);
          console.log('foundPlace:', foundPlace);

          if(foundPlace.comments.length > 0) {
               res.render('places/show', {
                    place: foundPlace,
                    commentsLeft: foundPlace.comments                        
               })}

               else {
               res.render('places/show', {
                    place:foundPlace,
                    commentsLeft: []                              
                    
               })
          }
     });
});


//delete place

router.delete('/:placeId', (req, res) => {
     db.Place.findByIdAndDelete(req.params.placeId, (err, deletedPlace) => {
          if (err) return console.log(err);
          console.log(deletedPlace);
          res.redirect('/places');
     });
});


//EDIT Place

router.get('/:placeId/edit', (req, res) => {
     db.Place.findById(req.params.placeId, 
          (err, foundPlace) => {
          if (err) return console.log(err);
          console.log(foundPlace);
          res.render('places/edit', {
               place: foundPlace,
          });
     });
});


//Update Place

router.post('/:placeId', (req, res) => {
     db.Place.findByIdAndUpdate(
          req.params.placeId,
          req.body,
          {new: true},
          (err, updatedPlace) => {
               if (err) return console.log(err);
               console.log(updatedPlace);
               res.redirect(`/places/${updatedPlace._id}`);
          }
     );
});

module.exports = router;