var mongoose = require('mongoose');

var musicSchema = mongoose.Schema({
	title: String,
	artist: String,
	numberOfCharacters: Number,
	bandMembers: [{
		name: String,
		instrument: String
	}]
});

module.exports = mongoose.model('music', musicSchema);