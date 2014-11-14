var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	// res.header('Content-Type', 'text/html');
	res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req,res) {
	// res.send('got the post!')
	res.redirect('/success')
})

app.get('/success', function(req,res) {
	res.send('success!')

})

var server = app.listen(7958, function() {
	console.log('Express server listening on port ' + server.address().port);
});

