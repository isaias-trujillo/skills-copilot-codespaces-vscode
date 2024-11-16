// Create web server
// npm install express
// npm install body-parser
// npm install cors
// npm install nodemon
// nodemon comments.js
// http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());

var comments = [
  { id: 1, author: 'Joe', text: 'Nice work' },
  { id: 2, author: 'Mary', text: 'Thanks' }
];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, function() {
  console.log('Server started');
});