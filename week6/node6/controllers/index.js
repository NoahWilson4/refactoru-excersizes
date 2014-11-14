var Entry = require('./entry.js');
var allEntries = require('./allEntries.js');
var fs = require('fs');



// var findName = allEntries.getByName;

var entry = allEntries.newEntry;

var entries = allEntries.allEntries;

var indexController = {
	home: function(req, res) {
		if (entries.length < 8) {
			res.render('home', {
				entries: entries
			});
		} else {
			res.render('home', {
				entries: entries,
				full: 'Contest Full!'
			});
		}

		// repopulate allEntries from file
		// var regatheredEntries = JSON.parse(allEntries.json);
		// console.log(allEntries.json);
	},
	submitEntry: function(req, res) {
		
			res.render('submitEntry');
		
		
	},
	submit: function(req, res) {
		var name = req.body.name;
		var url = req.body.url;
		var title = req.body.title;
		var description = req.body.description;

		entry.addEntry(name, url, title, description);

		res.redirect('/');
	},
	viewBattles: function(req, res) {
		var round;
		if (entries.length === 8) {
			round = 1;
		} else if (entries.length === 4) {
			round = 2;
		} else if (entries.length === 2) {
			round = 3;
		}

		res.render('battles', {
			entries: entries,
			round: round
		});
	},
	vote: function(req, res) {
		res.render('battles', {
			entries: entries,
			round: round

			//////////// this is where i am!!!!!!!!!!
		});
	}
	view: function(req, res) {
		var entryName = req.params.entryName;
		var thisEntry = entry.getByName(entryName);
		res.render('viewSubmissions', {
			thisEntry: thisEntry
		});
	}
};

module.exports = indexController;