$(document).on('ready', function() {
 
 //CREATE A CAT CLASS. CLASSES START WITH CAPITOL LETTER
var Cat = function(color){
	//take the given color and assign it to the color property of the instance that is created
	this.color = color;

	// one way to add amethod:

	this.meow = function(){
		console.log('meow');
	};
};

// using the prototype to define methods on instances.
//  each instance of cat will have this method available

Cat.prototype.sleep = function(){
	console.log('i am sleeping');
};

//CREATE AN INSTANCE OF CAT.  INSTANCES START WITH LOWER CLASS LIKE REGULAR VARIABLES
var myCat = new Cat();
console.log(myCat);
myCat.meow;
myCat.sleep;



// create a quote class that has two properties, text and author. it should accept these properties as parameters on the constructor.  then create an instance of the quote class and store it in a variable. then console.log both properties of the quote instance. Bonus: provide default values if none given

// var Quote = function(text, author){
	
// 	this.text = text || "nothing said...";
// 	this.author = author || 'Unknown';
	
	
// }

// var newQuote = new Quote('Life is cool.', 'Buddha');
// console.log(newQuote);

// var nextQuote = new Quote();
// console.log(nextQuote);



// update quote class to include two new methods:
	// 1 - countWords
	// 2 - create new DOM element (using jQuery) to represent the quote.

	// log the countWords value to console.
	// append the result of calling the create method



var Quote = function(text, author){
	this.text = text || "nothing said...";
	this.author = author || 'Unknown';	
};

Quote.prototype.countWords = function(){
	return this.text.split(' ').length;
};

Quote.prototype.create = function(){
	return $('<div class="quote">' + this.text + " - " + this.author + '</div>');
};






var newQuote = new Quote('Life is cool.', 'Buddha');
console.log(newQuote);
var nextQuote = new Quote();
console.log(nextQuote);
newQuote.create;

console.log('my quote word count: ', newQuote.countWords());
$('body').append(newQuote.create());









var Quote = function(text, author){
	this.text = text || "nothing said...";
	this.author = author || 'Unknown';	
};

Quote.prototype.countWords = function(){
	return this.text.split(' ').length;
};

Quote.prototype.create = function(){
	// this version - store the created DOM element's reference in the instance of the class.  now we can target this element with jquery (ie change css)
	this.element = $('<div class="quote">' + this.text + " - " + this.author + '</div>');
	return this.element;

};

Quote.prototype.changeColor = function(color){
	this.element.css('color', color);
}






var newQuote = new Quote('Life is cool.', 'Buddha');
console.log(newQuote);
var nextQuote = new Quote();
console.log(nextQuote);
newQuote.create;

console.log('my quote word count: ', newQuote.countWords());

$('body').append( newQuote.create() );
$('body').append( nextQuote.create() );
newQuote.changeColor('darkred');
nextQuote.changeColor('darkgreen');



// update the quote class to include a changeText method that will take in new text as a parameter and changes both the vlaue of that property on the instance, but also updates the dom element on the page



Quote.prototype.changeText = function(newtext) {
	this.text = newtext;
	$('body').append( this.create() );
}

var theNewQuote = "i like apples.";

newQuote.changeText(theNewQuote);















});