var desserts = require('../models/desserts.js')

var indexController = {
	index: function(req, res) {
		res.render('index', {
			desserts: desserts
		});
	},

	about: function(req, res){
		res.render('about', dessertCount);
	}
};

module.exports = indexController;