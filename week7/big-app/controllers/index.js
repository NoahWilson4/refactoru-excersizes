var Music = require('../models/music.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	// allow user to view static item of music
	viewMusic: function(req, res){
		// pull id out of url
		var id = req.params.id;
		Music.findOne({_id: id}, function(err, result){
			res.render('musicItem', result);
		})
	}
};

module.exports = indexController;