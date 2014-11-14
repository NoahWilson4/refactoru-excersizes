var fs = require('fs');
// var converter = require('./convert.js');
// console.log('converter: ', converter);

var input = process.argv[2];
var output = process.argv[3];

// res.header('Content-Type', 'text/html');
var fileContents = fs.readFileSync(input, 'utf-8');
var fileArray = fileContents.split('\n');
for (var i = 0; i < fileArray.length; i++) {
	fileArray[i] = fileArray[i].split(',');
}

var arrayOfObjects = [];
var keys = fileArray[0];
for (var i = 1; i < fileArray.length; i++) {
	var values = fileArray[i];
	var object = {};
	for (var z = 0; z < values.length; z++){
		object[keys[z]] = values[z];
	}
	arrayOfObjects.push(object);
}

var objectToStringify = {
	objects: arrayOfObjects
}

var convertJSON = function(input){
		var output = JSON.stringify(input);
		console.log('output', output);
		return output;
	};

var converted = convertJSON(objectToStringify);

fs.writeFile(output, converted, 'utf-8');





