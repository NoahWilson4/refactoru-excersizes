/// 1 ///////////////////////////

// var addNumbers = function(string){
// 	var string = string.split('');
// 	console.log('string', string);
// 	var numbers = [];
// 	for (var i = 0; i < string.length; i ++) {
		
// 		var number;
// 		var num = parseInt(string[i])
// 		var nextNum = parseInt(string[i + 1]);
// 		console.log('next num: ', nextNum);
// 		console.log('num', num);
// 		if ( typeof num === 'number' ) {
// 			if ( number > 0) {
// 				number = number + num;
// 			} else {
// 				number = num;
// 			}
// 			if (nextNum ) {
// 				number = number * 10;
// 			} else {
// 				if (number > 0){
// 					numbers.push(number);
// 					number = 0;
// 				}
// 			}
// 		}
// 	}
// 	console.log(numbers);
// 	var total = 0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		total += numbers[i];
// 	}
// 	console.log('total: ', total);
// }

// addNumbers("88Hello 3World!");



/// 2 //////////////////////////////////

// var longestWord = function(string) {
// 	var longest = '';
// 	var letterCount = 0;
// 	string = string.split(' ');
// 	console.log('string split', string);
// 	for (var i = 0; i < string.length; i++) {
// 		var lastLetter = string[i].charAt(string[i].length - 1).toString();
		
// 		lastLetter = lastLetter;
// 		console.log('last letter: ', lastLetter);
// 	if (lastLetter !== 'a' || 'b' || 'c' || 'd' || 'e' || 'f' || 'g' || 'h' || 'i' || 'j' || 'k' || 'l' || 'm' || 'n' || 'o' || 'p' || 'q' || 'r' || 's' || 't' || 'u' || 'v' || 'x' || 'y' || 'z') {
// 		 var trim = string[i].length - 1;
// 		 var word = string[i];
// 		 word = word.substring(0, trim);
// 		 console.log('trim', trim)
// 		 console.log('trimmed: ', word);
// 		 string[i] = word;
// 	}

// 		if (string[i].length > letterCount) {
// 			letterCount = string[i].length;
// 			longest = string[i]
// 		}
// 	}
// 	console.log('longest word: ', longest);
// };

// longestWord('what is THe longest word in this sentance, huh? thisWORD?');

//// 3 ///////////////////////////////////////

var averageStringNumbers = function(string) {
	string = string.split(' ');
	console.log('string split: ', string);
	var numbers = [];
	for (var i = 0; i < string.length; i++) {
		
		string[i].split('');
		word = string[i].split('');

		console.log('string i: ', string[i])
		console.log('word: ', word);
		for (var z = 0; z < word.length; z++) {

			var isNum = parseInt(word[z]);
			console.log('isnum: ', isNum)
			if (isNum > 0) {
				numbers.push(isNum);
			}
			// var letter = word[z].toLowerCase();
			// console.log('letter test: ', letter);
			// if ((letter !== 'a' ) || (letter ) {
			// 	// || 'b' || 'c' || 'd' || 'e' || 'f' || 'g' || 'h' || 'i' || 'j' || 'k' || 'l' || 'm' || 'n' || 'o' || 'p' || 'q' || 'r' || 's' || 't' || 'u' || 'v' || 'x' || 'y' || 'z') {
				
				// nonLetters.push(letter);
			// };
		}
		

	}
	console.log('numbers: ', numbers);
	var numOfNumbers = numbers.length;
	console.log('num nums: ', numOfNumbers);
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	console.log('total: ', total);

	string = string.join('');
	console.log('stringjoined: ', string);
} 


averageStringNumbers("Hello6 9World 2, Nic8e D7ay!");



















