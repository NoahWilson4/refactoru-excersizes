$(document).on('ready', function() {
  
	// var templateSource = $('#demo-template').html();
	// console.log('templateSource: ', templateSource);

	// // have Handlebars compile this source into a reusable template function
	// var templateFunction = Handlebars.compile(templateSource);
	// console.log('templateFunction: ', templateFunction);

	// // define a context to be used in the generation step below
	// var data = {
	// 	name: 'Noah Wilson',
	// 	age: 29,
	// 	eats: 'Cabbage and coconut',
	// 	opacity: true,
	// 	schedule: undefined,
	// 	snacks: ['granola bar', 'muffin', 'quinoa', 'gooey ganja balls']
	// };

	// // generate html with the function
	// var outputHTML = templateFunction(data);
	// console.log('outputHTML: ', outputHTML);
	// // append to  page
	// $('.container').append(outputHTML);


	// /// reuse the function to render more info
	// /// 
	// var data2 = {
	// 	name: 'Brother Dude',
	// 	age: 74,
	// 	eats: 'Bananas and clams',
	// 	schedule: {
	// 		morning: 'do nothing',
	// 		evening: 'keep working hard to do nothing'
	// 	}
	// }
	// var outputHTML2 = templateFunction(data2);
	// $('.container').append(outputHTML2);


// you are planning a super cool halloween party. friends are coming and you will tell them what to bring

	var people = [
		{
			name: 'Jimmy',
			bringing: ['kazoos', 'cupcakes', 'peanut butter']
		},
		{
			name: 'Suzy',
			bringing: ['balloons', 'salad', 'bouncy balls']
		}
	]
	var personSource = $('#partyPerson').html();
	var personTemplateFunction = Handlebars.compile(personSource);

	var partyHTML = people.map(function(person){
		return personTemplateFunction;
	});
	console.log(partyHTML);
	$('#party').append(partyHTML);

});