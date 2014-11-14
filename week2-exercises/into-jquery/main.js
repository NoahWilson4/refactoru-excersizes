

 $(document).on('ready', function() {
// part 1
// 	$('.the-button').click( function() {
// 		$('<p>here is a paragraph</p>').appendTo('body')
// 	});

// 	$('.the-button2').click(function () {
// 		$('<h1>This is a new heading</h1><p>here is another paragraph about something cool.</p>').appendTo('body')
// 	});

// 	$('.the-button3').click(function (){
// 		$('<ul><li>item 1 is here</li><li>item 2 is here</li><li>item 3 goies here</li></ul>').appendTo('body')
// 	});
// });




// PART 2


// $('p').mouseover(function(){
// 	$('p').css({
// 	color: '#DB88E5'
// 	})
// });
// $('p').mouseout(function(){
// 	$('p').css({
// 	color: 'black'
// 	})
// });


// $('h1').text(function(){
// 	var header = $(this).text();
// 	var exclamation = '!';
// 	var headerExclamated = header.concat(exclamation);
// 	$(this).text(headerExclamated);
// 	$(this).next();
// 	}
// );

// $('a').click(function(){
// 	if (confirm('Would you like to go here?  It"s pretty cool...') === false){
// 		$('a').hide();
// 		return false;
// 	}
// })

// PART 3

$('.big-button').click(function(){
	$('<div class="popup">Click below to close this box.<button type="button" class="close-popup">Close</button></div>').appendTo('.main');
	$('.popup').css({
				position: 'fixed',
				width: 400, 
				height: 100,
				background: 'lightgray',
				top: 100,
				left: 275,
				fontSize: 30,
				padding: 20,
				borderWidth: 1,
				borderColor: 'gray',
				borderStyle: 'solid',
				borderRadius: 5  
			})
	$('.close-popup').css({
				display: 'block',
				padding: 10,
				fontSize: 10,
				color: '#D1584E',
				width:  70,
				marginLeft: 200,
				marginTop: 20


		}).click(function(){
			$('.popup').hide()
		})
	});


});