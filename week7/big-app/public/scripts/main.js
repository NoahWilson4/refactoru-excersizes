// cient-side js

var renderTrack = function(trackData) {
	var el = $('<li>')
	el.append('<h4>' + trackData.title + '</h4>');
	el.append('<p><em>' + trackData.artist + '</em></p>');

	// set an attribute on the main containing li that will let us access the track's specific database ID
	// 
	el.attr('data-id', trackData._id);

	//append some action items
	el.append('<button class="delete btn btn-danger">Delete</button>')
	// add _id to url variable, set up in app.js
	el.append('<a class="btn btn-info" href="/view/' + trackData._id + '">View</a>');
	el.append('<button class="btn btn-success edit">Edit</button>');
	return el;

};

$(document).on('click', '.delete', function(){
	var container = $(this).closest('li');
	// traverse and retrieve ID
	var musicId = $(this).closest('li').attr('data-id');
	console.log('delete: ', musicId);
	$.post('/api/delete', {id: musicId}, function(responseData){
		console.log('responseData: ', responseData);
		if(responseData.success === true) {
			//successful delete
			//remove from DOM
			container.remove();
		}
	});
});

$(function(){

	//on page load, pull down the list of music with AJAX and render it to the page

	$.get('/api/getMusic', {}, function(responseData) {
		//we've got a dataset back from the server, so lets display it in the DOM
		console.log('getMusic responseData', responseData);

		for (var i = 0; i < responseData.length; i++) {
			var trackEl = renderTrack(responseData[i]);
			$('#musicList').append(trackEl);
		};
	});

	// hijack the new music form
	$('#new-music').on('submit', function(e){
		e.preventDefault();
		var trackTitle = $(this).find('[name=title]').val();
		var trackArtist = $(this).find('[name=artist]').val();
		var trackData = {
			title: trackTitle,
			artist: trackArtist
		};
		console.log(trackData);

		$.post('/api/addMusic', trackData, function(responseData){
			var trackEl = renderTrack(responseData);
			$('#musicList').append(trackEl);
		});
	});

	$(document).on('click', '.edit', function(){
		var container = $(this).closest('li');
		var musicId = $(this).closest('li').attr('data-id');

		var requestUrl = '/api/getSingle/' + musicId;

		$.get(requestUrl, {}, function(responseData){
			console.log(responseData);


			// set the values of the inputs in our modal to be the values of the response data
			modal.find('[name=title]').val(responseData.title);
			modal.find('[name=artist]').val(responseData.artist);

			// finally after all the data is retrieved and we've updated the values in the form, let's show the modal
		});

		$('#edit-modal').modal('show');
	});




});