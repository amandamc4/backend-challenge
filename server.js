var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var messageRoutes = require('./routes/message');
var conversationRoutes = require('./routes/conversation');

mongoose.connect('localhost:27017/backendchallenge');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/messages', messageRoutes);
app.use('/conversations', conversationRoutes);


app.listen(port);

console.log('RESTful API server started on: ' + port);