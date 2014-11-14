$(document).on('ready', function() {

// USING .MAP TO LOOP A FUNCTION OVER AN ARRAY


	var numberArray = [1, 2, 3, 4, 5];
	var doubledArray = [];

	var doubler = function(x){
		return x * 2;
		
	};

	console.log(numberArray.map(doubler));
});

// USING MAP, TURN THE ARRAY OF CHRIS JOE FRODO IN THE THE ARRAY cHRIS jOE fRODO

	var names = ['Chris', 'Joe', 'Frodo'];

	var reverseCapitalize = function(name){
		return name[0].toLowerCase() + name.slice(1).toUpperCase();
		
	}

	console.log(names.map(reverseCapitalize).join(' and '));

	// using .filter()  uses functions that return boolean values

	var numbers = [2, 6, 5, 3, 10, 11];

	var evenNumbers = function(x){
		return (x % 2 === 0);
	}

	console.log(numbers.filter(evenNumbers).join(', '))

// 

	var words = ['cat', 'dog', 'cucumber', 'eclair'];

	var cWords = function (x){
		return x[0].toLowerCase() === 'c';
	}
	console.log(words.filter(cWords).join(', '));

// 

	var numbers = [1, 2, 5, 10];

	var lessThanTenSquaredfunction = function(x){
		return x < 10;
	};

	var square = function (x) {
		return x * x;
	}
		
console.log(numbers.filter(lessThanTenSquaredfunction).map(square));













