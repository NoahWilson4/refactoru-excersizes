var fs = require('fs');

var fileContent = fs.readFileSync('file1.txt', 'utf-8');

var reversedContent = fileContent
	.split('')
	.reverse()
	.join('');

console.log(reversedContent);

fs.writeFileSync('reversed.txt', reversedContent);