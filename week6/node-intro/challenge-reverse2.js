// var userString = process.argv[2];	
	// var reversedString = userString.split('').reverse().join('');
	// console.log(reversedString);



var userString = process.argv
.slice(2)	
.join(' ');

console.log(userString);