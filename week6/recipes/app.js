var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//home page: list of all recipes
app.get('/', indexController.index);

//create a dynamic route that will match /view/lasagna or /view/fruitcake and let them both be handled by the same cortroller method
app.get('/view/:recipeTitle', indexController.view);

// add route to handle adding new recipes
app.post('/addRecipe', indexController.view);

//  route for handling deleting recipes
app.get('/delete/:recipeTitle', indexController.deleteRecipe);

var server = app.listen(7802, function() {
	console.log('Express server listening on port ' + server.address().port);
});
