const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const qr = require('qrcode');

// Show login form on homepage
router.get('/', (req, res) => {
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

//handle login logic
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

//logout Logic
router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;
