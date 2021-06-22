//external imports
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

//internal imports
const {notFoundHandler, errorHaldler} = require('./middlewares/common/errorHandler.js');

const app = express();
dotenv.config();

//databasae connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static('public'));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup -todo
app.get('/', function(req,  res) {
  res.send('Hello World!')
});

//error handling
//404 Not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHaldler);

app.listen(process.env.PORT, function() {
  console.log('Server started on port '+process.env.PORT);
});
