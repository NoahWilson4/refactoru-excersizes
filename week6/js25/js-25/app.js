var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

var chunk = require('./chunk.js');

app.get('/', function(req, res) {
	res.send('<h1>Chunk into Groups:</h1><form id="chunkGroup" method="post" action="/form-submit"><label for="names">Names</label><input type="text" id="name" name="names" placeholder="Comma Sepatated"><label for="number">Number of chunks</label><input type="number"name="number"><input type="submit"></form>');
});

app.post('/form-submit', function(req, res){
	
	var submission = req.body;
	var names = submission.names;
	names = names.split(',');
	var num = submission.number;
	var num = Number(num);

	var chunked = chunk.chunk(names, num);
	console.log('chunked: ', chunked);


	res.render('index', {
		chunked: chunked,
		num: num
	})
})

var server = app.listen(9100, function() {
	console.log('Express server listening on port ' + server.address().port);
});
