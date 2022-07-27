const mongoose = require('mongoose');
var passwordLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: String,
  password: String,
});

UserSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
