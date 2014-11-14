var mongoose = require('mongoose');

// connect to the database      url			database
mongoose.connect('mongodb://localhost/mongoose-basic');

// // create a mongoose model of a car with the given schema of data.
var Car = mongoose.model('Car', {
	make: String,
	model: String,
	year: Number,
	passengers: [String]
});

// //creat a new car and fill in the data
// var delorean = new Car({
// 	make: "delorean",
// 	model: "Super fast one",
// 	year: 1985,
// 	passengers: ["Marty McFLy", "Doc Brown", "Einstein the Dog"]
// });

// // save the car to the database
// delorean.save();

// find from the database.  it will call our anonomous function and pass it any errors and any documents found based on the criteria we pass
Car.find({}, function(err, docs){
	console.log('Err: ', err);
	console.log('Docs: ', docs);

	// print array of makes

	var makes = docs.map(function(car){
		return car.make;
	});
	console.log('makes: ', makes);
});