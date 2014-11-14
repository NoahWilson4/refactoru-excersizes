$(document).on('ready', function() {
  
var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];



/////// 1

	var ages = function(n){
		for (var i = 0; i < n.length; i++){
			console.log(n[i].age);
		}
	};
	ages(students);


	///////////// 2

	var nameLocation = function(n){
		for (var i = 0; i < n.length; i++){
			console.log(n[i].name + ', ' + n[i].city);
		}
	};
	nameLocation(students);

///////////////// 3

	var boulderites = function(n){
		for (var i = 0; i < n.length; i++){
			if (n[i].city === 'Boulder'){
			console.log(n[i].name + ' is from ' + n[i].city);
			}
		}
	};
	boulderites(students);

	///////////// 4

	var older = function(n){
		for (var i = 0; i < n.length; i++){
			if (n[i].age > 25){
			console.log(n[i].name + ' is older than 25');
			}
		}
	};
	older(students);


});