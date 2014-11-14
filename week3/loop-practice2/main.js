$(document).on('ready', function() {

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// 1
for (var i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}
console.log('////////////////////////////////////')
// 2
for (var i = 0; i < animals.length; i++) {
	console.log(animals[i]);
	i++;
}
console.log('////////////////////////////////////')
// 3
for (i = animals.length - 1; i >= 0; i--) {
	console.log(animals[i]);
}
  

console.log('////////////////////////////////////')
// 4
for (var i = 0; i < animals.length; i++) {
	console.log(animals[i]);
		if (i > 0 && i < animals.length - 1){
			console.log(animals[i])
		}
	}
});