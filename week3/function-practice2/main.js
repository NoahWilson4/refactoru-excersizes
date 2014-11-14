$(document).on('ready', function() {

// // #1


// 	var name = {
// 		Name: 'Luisa',
// 		Age:  	25
// 			}

// 	var getName = function(name){
// 		return name.Name;
// 	}		
// 	console.log(getName(name));
  


// 	// #2

// 	var words1 = ['javascript', 'is', 'awesome'];

// 	var combineWords = function(previousValue, currentValue){
// 		return previousValue + currentValue;
// 	}

// 	var totalLetters = function(words){
// 		return words.reduce(combineWords).length;
// 	}

// 	console.log(totalLetters(words1));

// 	// #3

	
	// var keyValue = function (a, b) {
	// 	var object = {};
	// 	object[a] = b;   // dynamic alternative to adding key/values in the objectName.newkeyname
	// 	return object;
	// }

	// console.log(keyValue('city', 'denver'));

// 	// #4

// 	var array = ['a', 'b', 'c', 'd', 'e'];

// 	var negativeIndex = function (array, index){
// 		return array[array.length + index];
// 	}

// 	console.log(negativeIndex(array, -3));

// 	// #5

	

// 	var removeM = function(word){
// 		var wordArray = word.split('');
// 		console.log('split: ', wordArray);
// 		for (i = 0; i < wordArray.length; i++){
// 			if (wordArray[i].toLowerCase() === 'm'){
// 				delete wordArray[i];
// 			}
// 		}
// 		console.log('m cut: ', wordArray);
// 		wordArrayJoined = wordArray.join('');
// 		console.log('joined: ', wordArrayJoined);
// 	}

// 	console.log(removeM('family'));
// 	console.log(removeM('Mamma me makin muffins yum'));
	
// #6
	
	// var printObject = function(obj) {
	// 	var objectKey = Object.keys(obj);
	// 	var objectVal = [];
	// 	for (i = 0; i < objectKey.length; i++){
	// 			objectVal.push(obj[(objectKey[i])]);
	// 	}
	// 	for (i = 0; i < objectKey.length; i++){
	// 			console.log(objectKey[i] + ' is ' + objectVal[i]);
	// 	}
	// 		console.log(objectVal);
	// 		console.log(objectKey);
			
			
	// 	};
		
	

	// printObject({a: 10, b: 20, c: 30});


//  #7

	// var vowels = function (word){
	// 	var x = word.split('');
	// 	console.log(x);
	// 	var isVowel = function (x){
	// 		return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u';
	// 		}
	// 	var y = x.filter(isVowel);
	// 	console.log(y);
	// }

	// vowels('alabama');

//  #8

	// var twins = function(x){
	// 	for (i = 0; i < x.length - 1; i = i + 2){
	// 		var f = i + 1;
	// 		if (x[i] !== x[f]){
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }
	// var array = ['a', 'a', 'b', 'b', 'c', 'd'];;
	// console.log(twins(array));

// #9

	// var or = function(x) {
	// 	for (var i = 0; i < x.length; i++) {
	// 		if (x[i] === true) {
	// 			return true;
	// 		} else {
			
	// 		}x
	// 	}	return false;
	// }

	// console.log(or([[]]));

// #10

	// var unique = function(x){
	// 	var uniqueArray = [];
	// 	for (var i = 0; i < x.length; i++){
	// 		var y = x[i];
	// 		for (var f = i + 1; f < x.length; f++){
	// 			if (y === x[f]) {
	// 				x.splice(y, 1);
	// 			};
	// 		};
	// 	};
	// 	return x;
	// };
	// var unique = function(x){
	// 	var uniqueArray = [];
	// 	for (var i = 0; i < x.length; i++){
	// 		var y = x[i];
	// 		if (y = )
	// 	}
	// }
	var unique = function(x){
		y = x.sort();
		console.log(y);
		var uniqueArray = [];
		for (var i = 0; i < y.length; i++){ 
			var f = i + 1;
			if (y[i] !== y[f]) {
				uniqueArray.push(y[i]);
			}
		}
		console.log('unique array: ', uniqueArray);
	};

	// 	return uniqueArray;
	// };
	var letters = ['a', 'b', 'a', 'c', 'd', 'd'];
	var names = ['todd', 'avery', 'maria', 'avery'];
	console.log("unique letters: ", unique(letters));
	console.log("unique names: ", unique(names));





});




















