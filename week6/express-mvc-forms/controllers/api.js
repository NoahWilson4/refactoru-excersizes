var desserts = require('../models/desserts.js');

var apiController = {
	addDessert: function(req,res){
		var data = req.body;
		res.send(data);

		desserts.push(data);
		res.redirect('/');
	}
};

module.exports = apiController;