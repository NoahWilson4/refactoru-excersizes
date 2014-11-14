var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var fileContents = fs.readFileSync('data.txt');

app.get('/:filename', function(req, res) {
		var file = req.params.filename;

		fs.readFile(file, function(err, data){
			res.header('Content-Type', 'text/html');
			res.send(data);
		})
		
		
		
});

var server = app.listen(9182, function() {
	console.log('Express server listening on port ' + server.address().port);
});




