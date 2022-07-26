const Post = require('../models/file');
const Comment = require('../models/comment');

//all the middleware goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports = middlewareObj;
