$(document).on('ready', function() {

	// var Vehicle = function(color){
	// 	this.color = color;
	// };
 //  	Vehicle.prototype.move = function(){
 //  		console.log('moving!');
 //  	};


 //  	// inheriting class
 //  	var Car = function(color, make){
 //  		// 1.call the base-class constructor
 //  		Vehicle.call(this, color);

 //  		// 2. set any car-specific variables
 //  		this.make = make;
 //  	};

 //  		// 3. inherit the prototype
 //  	Car.prototype = new Vehicle();


	// 	// 4. Reset the constructor property back to car-specific
	// Car.prototype.constructor = Car;


	// // boat class
	// var Boat = function(color, length) {
	// 	Vehicle.call(this, 'white');
	// 	// boat specific property
	// 	this.length = length;
	// };

	// Boat.prototype = new Vehicle();
	// Boat.prototype.constructor = Boat;

	// var Yacht = function(length, classLevel) {
	// 	Boat.call(this, length);
	// 	this.classLevel = classLevel;

	// };

	// Yacht.prototype = new Boat();
	// Yacht.prototype.constructor = Yacht;

	// create a media class that has a name property and aview method that console.logs 'viewing <media name>'
	// create a Picture class that extends media and adds an image url and create a method that appends the image to the page

	var Media = function(name){
		this.name = name;
	};

	Media.prototype.view = function(){
		console.log('viewing ',  + this.name);
	};

	var Picture = function(name, image){
		Media.call(this, name);
		this.image = image;
	}

	Picture.prototype.create = function(){
		return $('<img src=""' + this.image + '>')
	}
	Picture.prototype = new Media();
	Picture.prototype.constructor = Picture;
	var myPicture = new Picture(name, /*image url*/);
























});