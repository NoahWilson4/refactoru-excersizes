var fs = require('fs');
var outputFileName = process.argv[2];
var inputFileNames = process.argv.slice(3);

var combined = inputFileNames.map(function(fileName){
	return fs.readFileSync(fileName, 'utf-8');
})
.join('\n');

console.log(combined);

fs.writeFileSync(outputFileName, combined);