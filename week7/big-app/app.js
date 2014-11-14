var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/apiController.js');

// connect to database
mongoose.connect('mongodb://localhost/bigApp')

//seed the database
////since i don't need to save access to each seed(they just execute...),
///then I dont have to set it to a variable
require('./models/seeds/musicSeed.js');

// main views
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/view/:id', indexController.viewMusic);

// api routes
app.get('/api/getMusic', apiController.getMusic);
app.get('api/getSingle/:id', apiController.getSingle);
app.post('/api/addMusic', apiController.addMusic);
app.post('/api/delete', apiController.deleteMusic);



var server = app.listen(9630, function() {
	console.log('Express server listening on port ' + server.address().port);
});
