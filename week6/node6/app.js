var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.home);

app.get('/submitEntry', indexController.submitEntry);

app.post('/entrySubmit', indexController.submit);

app.post('/vote', indexController.addVote);

app.get('/battles', indexController.viewBattles);

app.get('/view/:entryName', indexController.view);

var server = app.listen(8584, function() {
	console.log('Express server listening on port ' + server.address().port);
});
