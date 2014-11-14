$(document).on('ready', function() {
 
	//  var originalList = [1, 2, 3,];
	//  var numericalAdd = function(memo, num){
	//  	return memo + num;
	//  };
	//  var startValue = 0;

	//  							// iterating function					start number
	// // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
	// 					// original
	// 						// array

	// var reducedNumbers = _.reduce(originalList, numericalAdd, startValue);

	// console.log('reduce: ', reducedNumbers)

	// });

	// challenge: acronym builder - given the string "im so meta even this acronym"
											// give back string "i.s.m.e.t.a"

	// var phrase = "im so meta even this acronym";
	// var startValue = 0;
	// var firstLetters = function(array){
	// 	var letters = array.split(' ');
	// 	return letters[startValue];
	// }

	// var acronym = _.reduce(phrase, firstLetters, startValue);
	// console.log('acronym: ', acronym);

	// var originalString = "im so meta even this acronym";
	// var acronymReducer = function(memo, currentWord){                    //memo is handled by underscore, 
	// 	return memo + currentWord[0].toUpperCase() + '.';			//gets passed along to each iteration, incremented?
	// };
	// var acronymStart = '';
	// var acronym = _.reduce(originalString.split(' '), acronymReducer, acronymStart);
	// console.log(acronym);

	// NOT Working!!!!


// find

	// var even = _.find([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0; });
	// console.log('find "even": ', even);


	// var users = [
	// 			{id: 1, name: 'Chris'},
	// 			{id: 5, name: 'Joe'},
	// 			{id: 3, name: 'Raine'},
	// 			{id: 4, name: 'Sean'}    
	// 				];

	// var friendId = 3;  //users starts with the first item in array and goes to the next with eath round
	// var user = _.find(users, function(user){ return user.id === friendId;
	// 	 });

	// console.log('find friend: ', user);

	//pluck given an array of objects, return an array of a specific property

	// var stooges = [{name: 'moe', age: 40}, {
	// 	name: 'larry', age: 50}, 
	// 	{name: 'curly', age: 60}];

	

	// var names = _.pluck(stooges, 'name');
	// console.log(names);

	// var ages = _.pluck(stooges, 'age');
	// console.log(ages);

	// given an array of photos, get back a unique list of all tags:

	var photos = [
		{
			id: 12345,
			tags: ['cat', 'happy', 'evil', 'scratch'],
			title: 'a cat with a plan'
		},
			{
			id: 23456,
			tags: ['cat', 'angry', 'nofood', 'alone'],
			title: 'i don\'t know whos cat this is',
			},
			{
			id: 34566,
			tags: ['cat', 'hariy', 'frisky', 'wacky']
			}

	]
	var tags = _.chain(photos).pluck('tags').flatten().uniq().value();
		console.log('photo tags: ', tags);



	// var uniqueTags = _.uniq(tags)

	// console.log(uniqueTags)










});
