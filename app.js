var express = require('express');
var app = express(); 
var config = require('./config'); 
var mongoose = require('mongoose'); 
var setupController = require('./controllers/setupController'); 
//var apiController = require('./controllers/apiController');
var profileController = require('./controllers/profileController');
var postController = require('./controllers/postController'); 
var commentsController = require('./controllers/commentsController'); 
var channelsController = require('./controllers/channelsController'); 



var port = process.env.PORT || 3000; 
app.use('./assets', express.static(__dirname + '/public')); 
app.set('view engine', 'ejs'); 


mongoose.connect(config.getDbConnectionString()); 
setupController(app); 
//apiController(app); 
profileController(app);
postController(app); 
commentsController(app); 
channelsController(app); 
app.listen(port);  
//edit
