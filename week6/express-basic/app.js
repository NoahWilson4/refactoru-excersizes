var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Express Route - forward slash represents the home page
app.get('/', function(req, res) {
	// res.render('index');
	res.send('Hello World!');
});

app.get('/about', function(req, res) {
	// res.render('index');
	res.send('info on the about page');
});

var server = app.listen(8751, function() {
	console.log('Express server listening on port ' + server.address().port);
});
