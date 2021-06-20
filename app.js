const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
