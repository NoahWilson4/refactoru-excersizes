var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mycompanyname');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var Applicant = mongoose.model('Applicant', {
	name: String,
	bio: String,
	skills: [String],
	experience: Number,
	why: String
})

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Applicant.find({}, function(err, docs) {
		console.log('Err: ', err);
		console.log('Docs', docs);
		var applicants = docs.map(function(applicant){
			return applicant.name;
	});
		res.render('applicants', {
			applicants: applicants
		});
	});
});

// creates and applicant
app.post('/applicant', function(req, res){
	console.log('req.body test: ', req.body);
	var applicant = new Applicant(req.body);
	 console.log('applicant ', applicant);
	 applicant.save();
	// Here is where you need to get the data
	// from the post body and store it in the database
	res.render('success');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
