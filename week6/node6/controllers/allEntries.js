var fs = require('fs');
var Entry = require('./entry.js');
var entriesToGather = require('../allEntries.json');
// console.log('entriesToGather', entriesToGather);
var allEntries = entriesToGather.entries || [];
// var allEntries = [];

var AllEntries = function() {
	this.entries = [];
};

AllEntries.prototype.addEntry = function(name, url, title, description) {
	var newEntry = new Entry(name, url, title, description);
	this.entries.push(newEntry);
	allEntries.push(newEntry);

	// write to file
	var entriesStringify = {
		entries: allEntries
	};
	var output = JSON.stringify(entriesStringify);
	fs.writeFile('allEntries.json', output, 'utf-8');
};

AllEntries.prototype.getByName = function(entryName) {
	
	for (var i = 0; i < this.entries.length; i++) {
		if (this.entries[i].name === entryName) {
			return this.entries[i];
		}
	}
}

var newEntry = new AllEntries();
// module.exports = newEntry;

module.exports = {
	newEntry: newEntry,
	allEntries: allEntries
};
