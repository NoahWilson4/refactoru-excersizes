var express = require('express');
var bodyParser = require('body-parser');

var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/about', indexController.about);

app.post('/dessertSubmit', apiController.addDesert)

var server = app.listen(5270, function() {
	console.log('Express server listening on port ' + server.address().port);
});
