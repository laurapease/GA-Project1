const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/');

//Current path = /auth



/* Register routes below. -------------------------------------------------------------------------- */

//Register NEW
router.get('/register', (req, res) => {

     res.render('auths/register');


});

//Register POST
router.post('/register', (req, res) => {

     console.log('register post');
     db.User.findOne({email: req.body.email}, (err, user) => {


          if (err) return console.log(err);
          console.log('begun searching for user');

          if (user) {
               console.log('User account already exists.');
               res.redirect('/auth/register');
          } 

          console.log('hi you made it here');
          //Hash the user password before creating the user
          //Generate hash salt

          bcrypt.genSalt(10, (err, salt) => {
               if (err) return console.log('Error generating salt.');

               bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if (err) return console.log('Error hashing the password.');
                    console.log(salt);
                    console.log('Hashed password: ', hashedPassword);

                    //Create the new user with the hashed password.
                    const newUser = {

                              name: req.body.name,
                              email: req.body.email,
                              password: hashedPassword,
                    }

                    db.User.create(newUser, (err, createdUser) => {
                         if (err) return console.log(err);

                         res.redirect('/auth/login');
                    });
               });
          })
    
     })
});


/*Login Routes -------------------------------------------------------------------------- */

//Login GET

router.get('/login', (req, res) => {

     res.render('auths/login');

});

router.post('/login', (req, res) => {
     console.log(req.body)

     db.User.findOne({email: req.body.email}, (err, user) => {
          if (err) return console.log(err); 
          console.log('begun searching for user');
          //Now check if the user exists, but have an opposite reaction to register.
          //Redirect to login if no user is found.
          if (!user) {
               console.log('Login Route: No user found.');
               return res.redirect('/auth/login');
          }

          //Verify User password with login form password.

          bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
               if (err) return console.log('Error comparing passwords.');

               if (isMatch) {
                    //Before they redirect, attach a cookie to them that is their key to the kingdom. 
                    //Create a new session (express-session)
                    req.session.currentUser = user._id;
                    res.redirect('/places');
               }

               }
     )})
});

//Login SHOW

//Logout User (not a view but an action like delete)

router.delete('/auth/logout', (req, res) => {
     
     if (req.session.currentUser) {
          req.session.destroy();
     }
})



module.exports = router;
