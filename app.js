const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

//databasae connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static('public'));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,  res) => {
  res.send('Hello World!')
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
