var express = require('express');
var indexController = require('./controllers/index.js');
var converter = require('./controllers/conver.js');

var input = process.argv[2];
var output = process.argv[3];

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', indexController.index);

var server = app.listen(4023, function() {
	console.log('Express server listening on port ' + server.address().port);
});
