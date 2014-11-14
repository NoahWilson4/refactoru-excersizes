var fs = require('fs');
var colors = process.argv.slice(1);

var luminosity = function(r, g, b) {
	var r = colors[1];
	var g = colors[2];
	var b = colors[3];

	r = Number(r);
	g = Number(g);
	b = Number(b);

	var lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return lum;
}	

	

isLight = function(luminosity) {
	if (luminosity > 150) {
		return 'light.';
	} else {
		return 'dark.';
	}
};

var lum = isLight(luminosity);
console.log(lum);


module.exports = {
	luminosity: luminosity
};