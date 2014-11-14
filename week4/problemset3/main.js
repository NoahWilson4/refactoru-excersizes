$(document).on('ready', function() {



	// ////// #1

// 	var palindrome = function(string) {
// 		var reversed = [];
// 		string = string.split('')
// 		console.log(string);
// 		for (var i = 0; i < string.length; i++){
// 			reversed.unshift(string[i]);
// 		}
// 		console.log(reversed);
// 		if (string.toString() === reversed.toString()) {console.log('is palindrome');
// 	} else { console.log('not palindrome');}
// 	};
  
// palindrome('wow00wow');


// ////////// #2

	// var dashInsert = function(num){
	// 	num = num.toString().split('');
	// 	console.log(num);
	// 	var array = [];
	// 	for (var i = 0; i < num.length; i++) {
	// 		array.push(num[i]);
	// 		if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
	// 			array.push('-');
	// 		}
	// 	};
	// 		console.log(array.join(''));
	// };

	// dashInsert(123443277879);


// //////////////  #3

	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	console.log(alphabet.length);

	alphabet = alphabet.toString().split('');
	
	var caesarCipher = function(sentance, num){
		var ciphered = [];
		sentance = sentance.split('');
		console.log('sentance: ', sentance);
		for (var i = 0; i < sentance.length; i++){
			var index = alphabet.indexOf(sentance[i]);
			console.log(index);
			if (index === -1) {
				ciphered.push(' ');
			} else if ( index + num > 25 ) {
				index = index + num - 24;
				ciphered.push(alphabet[index]);
			} else { 
				ciphered.push(alphabet[index + num]);
			}
		};
		ciphered = ciphered.join('');
		console.log('final string: ', ciphered);
	}

	caesarCipher('ceasar cipher', 2);




});