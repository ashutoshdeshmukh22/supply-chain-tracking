const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
//---------DATABASE SETUP------------------
const mongo_uri = 'mongodb://127.0.0.1:27017/supplychaintracking';

const connect = mongoose.connect(mongo_uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

connect.then(
  (db) => {
    console.log('Database Connected Successfully');
  },
  (err) => {
    console.log('Error occur while connecting ', err);
  }
);
// --------------------------------------

//-------------GENRAL CONFIGURATION----------
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use('/public', express.static('public'));
// app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
//-------------------------------------------
app.set('views', path.join(__dirname, '/views'));

//------------ROUTERS------------------------
const indexRoutes = require('./routes/index');
//---------------------------------------------

app.use('/', indexRoutes);

let port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
