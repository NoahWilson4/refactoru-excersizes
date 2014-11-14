var recipeBox = require('../models/recipeBox.js');

recipeBox.addRecipe(
	'Banana Nut Bread',
	'Bananas + nuts + bread -> bake'
	);
recipeBox.addRecipe(
	'Lasagna',
	'Ask Garfield...'
	);

var indexController = {
	index: function(req, res) {
		res.render('index', {
			recipeBox: recipeBox
		});
	},
	view: function(req, res){

		var recipeTitle = req.params.recipeTitle;
		var recipe = recipeBox.getByTitle(recipeTitle);

		res.render('recipe', {
			recipe: recipe
		});
	},
	addRecipe: function(req, res){
		// get variables form submitted form
		var title = req.body.title;
		var description = req.body.description;
		// create a new recipe in the box
		recipeBox.addRecipe(title, description);
		// give the browser a response, sending it to the homepage
		res.redirect('/');
	},
	deleteRecipe: function(req, res){

		var recipeTitle = req.params.recipeTitle;
		res.send(recipeTitle);
	}
};

module.exports = indexController;