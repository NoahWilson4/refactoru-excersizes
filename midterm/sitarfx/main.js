$(document).on('ready', function() {

$('#strings div').each(function() {
    addAudioProperties(this);
});

$('#sp div').click(function() {
    this.play();
});
});
var context = new (window.AudioContext || window.webkitAudioContext)();
// var analyser = context.createAnalyser();
// 	// var strings =document.createElement('audio');
// 	// 				strings.setAttribute('src', 'strings.mp3');
// 	// 				strings.load();
// 	// 				$.get();
// var strings = document.getElementById("strings");
// strings.addEventListener("canplay", function() {
//     var source = context.createMediaElementSource(strings);
//     source.connect(analyser);
//     analyser.connect(context.destination);
//     source.play();
// });







	// var analyser = context.createAnalyser();

	// analyser.fftSize = 256;
	// var bufferLength = analyser.frequencyBinCount;
	// console.log(bufferLength);
	// var dataArray = new Float32Array(bufferLength);


	// analyser.getFloatFrequencyData(dataArray);
	// console.log(dataArray);

var pluck = $('#strings');
var url = 'strings.mp3';
function loadAudio( pluck, url) {
	var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
 
    request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
            pluck.buffer = buffer;
        });
    }
    request.send();
}

function addAudioProperties(pluck) {
    pluck.name = pluck.id;
    pluck.source = $(pluck).data('strings');
    loadAudio(pluck, pluck.source);
    pluck.play = function () {
        var s = context.createBufferSource();
        s.buffer = pluck.buffer;
        s.connect(context.destination);
        s.start(0);
        pluck.s = s;
    }
}



























  
