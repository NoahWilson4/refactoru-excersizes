var colorutil = require('./colorutil.js');
console.log('colorutil', colorutil);

var colors = process.argv.slice(2);
console.log('colors', colors);



var luminosity = colorutil.luminosity(colors[0], colors[1], colors[2]);
console.log('luminosity: ', luminosity);

