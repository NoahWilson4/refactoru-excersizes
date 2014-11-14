$(function(){

	$('#update-numbers').on('click', function(e){

		// make an ajax get request to the server
		$.get('/getNumber', {}, function(resultData){
			console.log(resultData);
			$('#numbers').append('<li>' + resultData.number + '</li>')
		})
	});

})