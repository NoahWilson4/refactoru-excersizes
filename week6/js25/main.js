

var chunk = function(input, num) {
	var arrays = [];
	for (var i = 0; i < num; i++) {
		var array = [];
		arrays.push(array);
	}
	var counter = 0;
	for (var z = 0; z < input.length; z++) {
		arrays[counter].push(input[z]);
		counter++;
		if (counter === num) {
			counter = 0;
		}
	}

	return arrays;
}

var input = [1,2,3,4,5,6,7,8,9,10];
var chunked = chunk(input, 7);
console.log(chunked)