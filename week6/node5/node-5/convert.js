var convertJSON = {
	convert: convertJSON = function(input){
		var output = JSON.parse(input);
		console.log('output', output);
		return output;
	}
};



module.exports = {
	convert: convertJSON
}