/////////// 1

// var alphabetSoup = function(string){
// 	string = string.split('').sort().join('');
// 	console.log(string);
// }

// alphabetSoup('hello');



// ////// 2

// var vowelCount = function(string) {
// 	var vowels = ['a', 'e', 'i', 'o', 'u'];
// 	var areVowels = [];
// 	string = string = string.split('');
// 	for (var i = 0; i < string.length; i++) {
// 		if (vowels.indexOf(string[i].toLowerCase()) !== -1) {
// 			areVowels.push(string[i]);
// 		}
// 	}
// 	var numOfVowels = areVowels.length;
// 	console.log(areVowels);
// 	console.log(numOfVowels);
// }

// vowelCount("All cows eat grass")


////////// 3

// var coinDeterminer = function(value) {
// 	var coins = [1, 5, 7, 9, 11];
// 	var coinCombination = [];
// 	var countOfCoins = value;
// 	for (var z = coins.length - 1; z >=0; z--) {
// 		var count = 0;
// 		var coinsAdding = [];
// 		for (var i = z; i >= 0; i--) {
// 			while (count + coins[i] <= value) {
// 				coinsAdding.push(coins[i]);
// 				count = count + coins[i];
// 			}
// 		}
// 		var numberOfCoins = coinsAdding.length;
// 		if (numberOfCoins < countOfCoins) {
// 			coinCombination = coinsAdding;
// 			countOfCoins = numberOfCoins;
// 		}
// 	}
// 	console.log(countOfCoins, coinCombination);
// }

// coinDeterminer(135);
// 
// 
// 
// 
// 

var smallestCoinCombo = function(minusCount) {
		var coins = [1, 5, 7, 9, 11];
		var coinCombination = [];
		var countOfCoins = minusCount;
		for (var z = coins.length - 1; z >=0; z--) {
			var count = 0;
			var coinsAdding = [];
			for (var i = z; i >= 0; i--) {
				while (count + coins[i] <= minusCount) {
					coinsAdding.push(coins[i]);
					count = count + coins[i];
				}
			}
			var numberOfCoins = coinsAdding.length;
			if (numberOfCoins <= countOfCoins) {
				coinCombination = coinsAdding;
				countOfCoins = numberOfCoins;
			}
		}
		console.log(coinCombination)
		return coinCombination;
	}

var test = smallestCoinCombo(4);
console.log('test: ', test);

var coinDeterminer = function(value) {
	var minusCount = value;
	var finalCombo = [];
	while (minusCount >= 0) {
		console.log('minusCount: ', minusCount);
		var smallestFromHere = smallestCoinCombo(minusCount);
		console.log('[0]', smallestFromHere[0]);
		if (smallestFromHere[0]) {finalCombo.push(smallestFromHere[0])};
		minusCount = minusCount - smallestFromHere[0];
	}
	var coinCount = finalCombo.length;
	console.log('finalCombo: ', finalCombo);
	console.log('coinCount: ', coinCount);
}

coinDeterminer(134);




