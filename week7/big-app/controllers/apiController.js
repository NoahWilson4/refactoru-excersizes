var Music = require('../models/music.js');

var apiController = {
	getMusic: function(req, res){
		// find all music items
		Music.find({}, function(err, results){
			// send back results
			res.send(results);
		});
	},
	getSingle: function(req, res){
		var id = req.body.id;
		Music.findOne({_id: id}, function(err, result){
			res.send(result);
		});
	},
	addMusic: function(req, res){
		//  this came from the $.post on the client-side
		var trackData = req.body;
		var newMusic = new Music(trackData);
		newMusic.save(function(err, result){
			res.send(result);
		});
	},
	deleteMusic: function(req, res){
		var id = req.body.id;
		Music.remove({_id: id}, function(err, result){
			res.send({
				err: err,
				result: result,
				success: err === null
			});
		});
	}
};

module.exports = apiController;