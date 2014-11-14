var mongoose = require('mongoose');
var Music = require('../music.js');

// Previll the database with information
Music.find({}, function(err, results){
	// if results has a length, then there are documents already....
	if (results.length === 0){
		// if collection is empty, we'll add presets
		var BackInBlack = new Music({
			title: 'Back in Black',
			artist: 'AC/DC',
			numberOfCharacters: 101,
			bandMembers: [
			{
				name: 'Angus Young',
				instrument: 'Guitar',
			},
			{
				name: 'Malcolm Young',
				instrument: 'Guitar'
			}
			]
		});
		BackInBlack.save();

		var menahMenah = new Music({
			title: 'Menah Menah',
			artist: 'Sesame Street',
			numberOfCharacters: 30,
			bandMembers: [
				{
					name: 'Animal',
					instrument: 'DRUMS!!'
				},
				{
					name: 'Swedish Chef',
					instrument: 'Bork Bork Bork!'
				}
			]
		});
		menahMenah.save();
	}
})