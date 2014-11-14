var Recipe = require('./recipe.js');

var RecipeBox = function(){
	this.recipes = [];
};

/**
 * helper for adding new recipes
 * @param {[type]} title
 * @param {[type]} description
 */
RecipeBox.prototype.addRecipe = function(title, description) {
	var newRecipe = new Recipe(title, description);
	this.recipes.push(newRecipe);
};

//search through recipe box to find a match
RecipeBox.prototype.getByTitle = function(title) {
	for (var i = 0; i < this.recipes.length; i++) {
		if(this.recipes[i].title === title){
			return this.recipes[i];
		}
	};
};

var myRecipeBox = new RecipeBox();

module.exports = myRecipeBox;