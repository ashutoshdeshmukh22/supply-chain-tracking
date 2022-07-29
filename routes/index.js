const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const qr = require('qrcode');
const isEmailValid = require('email-validator');
const passwordValidator = require('password-validator');

const passport = require('passport');
const User = require('../models/user');

// Show login form on homepage
router.get('/', (req, res) => {
  res.render('login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

//show register form
router.get('/register', (req, res) => {
  res.render('register');
});

// show dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/manufactdash', (req, res) => {
  res.render('manufact');
});

router.get('/item-manufactdash', (req, res) => {
  res.render('item-manufact-dash');
});

router.get('login-failed', (req, res) => {
  res.render('login-failed');
});
// ----------> router.post('/login', middleware, callback)
router.post('/login', (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  if (email == 'manufacturer@gmail.com' && pass == '12345678') {
    res.redirect('/manufactdash');
  } else if (email == 'admin@gmail.com' && pass == '12345678') {
    res.render('dashboard');
  }
});

// handle login logic
// router.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/',
//   }),
//   (req, res) => {}
// );

router.post('/register', (req, res) => {
  console.log(req.body);

  var schema = new passwordValidator();
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  schema.is(password).min(8);
  const email = req.body.email;

  if (isEmailValid.validate(email)) {
    if (schema.validate(password) && password == confirmpassword) {
      var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
      });

      User.register(newUser, req.body.password, (err, user) => {
        if (err) {
          console.log(err);
          return res.render('register', {
            errormsg: 'Email Already Registered',
          });
        }
        passport.authenticate('local')(req, res, () => {
          res.redirect('/');
        });
      });
    } else {
      return res.render('register', {
        errormsg: 'Password is Too Short / Passwords Do Not Match',
      });
    }
  } else {
    return res.render('register', {
      errormsg: 'This Email is Invalid',
    });
  }
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

//logout Logic
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
