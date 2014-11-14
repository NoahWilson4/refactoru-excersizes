var candyBag = new CandyBag([
		new Candy({name: 'Nerds', calories: 1, isPoisoned: true}),
		new Candy({name: 'Twix', calories: '34'})
	]);

var bagView = new BagView({
	collection: candyBag,
	attributes: {
		title: 'My Candy bag'
	}
});
bagView.render();

var someoneElses = new BagView({
	collection: candyBag,
	attributes: {
		title: 'My Candy bag'
	}
});
someoneElses.render();


$(document).on('ready', function() {
  	$('.container').append(bagView.el).append(someoneElses.el);
});