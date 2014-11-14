var fs = require('fs');

var file1 = fs.readFileSync('source.txt', 'utf-8');
var sourceFileName = process.argv[2];
var destinationFilename = process.argv[3];

var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8');



console.log(sourceFileName, destinationFilename);

fs.writeFileSync(destinationFilename, sourceFileContents);

