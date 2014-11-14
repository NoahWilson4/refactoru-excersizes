var colorutil = require('./colorutil.js');
console.log('colorutil', colorutil);

var colors = process.argv.slice(2);
console.log('colors', colors);

var darken = function(colors) {
	var r = colors[0] - colors[0] * .2;
	var g = colors[1] - colors[1] * .2;
	var b = colors[2] - colors[2] * .2;

	return r + ' ' + g + ' ' + b;
}

var darkened = darken(colors);
console.log('darkened: ', darkened);