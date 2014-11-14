var Drug = require('../models/drugs.js');

var indexController = {
	index: function(req, res) {
		Drug.find({}, function(err, results){
			// placing the render in this function will wait until the find is complete before calling render
		res.render('index', {
			drugs: results
		});
			
		})
	},

	smokeIt: function(req, res){
		// send back what was submitted
		var drugData = req.body;

		// use submmitted data to create a new instance of drug
		var drug = new Drug(drugData);

		// send the newly saved document back to the browser
		drug.save(function(err, result){
			// res.send({
			// 	err: err,
			// 	result: result
			// });
			res. redirect('/');
		});
	}
};

module.exports = indexController;